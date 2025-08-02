import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cron from 'node-cron';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase client configuration
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

interface StartupIdea {
  title: string;
  description: string;
  category?: string;
  targetMarket?: string;
  revenueModel?: string;
  marketSize?: string;
  timeToMarket?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  featured?: boolean;
}

// Function to fetch data from n8n webhook
async function fetchStartupIdeas(): Promise<any> {
  try {
    const webhookUrl = process.env.N8N_WEBHOOK_URL!;
    console.log(`[${new Date().toISOString()}] Fetching startup ideas from webhook...`);
    
    const response = await fetch(webhookUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`[${new Date().toISOString()}] Successfully fetched webhook data:`, data);
    return data;
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error fetching webhook data:`, error);
    throw error;
  }
}

// Function to save startup ideas to Supabase
async function saveStartupIdeas(ideas: StartupIdea[], webhookData: any): Promise<void> {
  try {
    console.log(`[${new Date().toISOString()}] Saving ${ideas.length} startup ideas to database...`);

    const ideasWithMetadata = ideas.map(idea => ({
      ...idea,
      target_market: idea.targetMarket,
      revenue_model: idea.revenueModel,
      market_size: idea.marketSize,
      time_to_market: idea.timeToMarket,
      webhook_data: webhookData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }));

    const { data, error } = await supabase
      .from('startup_ideas')
      .insert(ideasWithMetadata);

    if (error) {
      throw error;
    }

    console.log(`[${new Date().toISOString()}] Successfully saved startup ideas to database`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error saving to database:`, error);
    throw error;
  }
}

// Function to process webhook data and extract startup ideas
function processWebhookData(webhookData: any): StartupIdea[] {
  try {
    // Handle different possible webhook response formats
    let ideas: StartupIdea[] = [];

    if (Array.isArray(webhookData)) {
      ideas = webhookData;
    } else if (webhookData.ideas && Array.isArray(webhookData.ideas)) {
      ideas = webhookData.ideas;
    } else if (webhookData.data && Array.isArray(webhookData.data)) {
      ideas = webhookData.data;
    } else if (typeof webhookData === 'object' && webhookData.title) {
      // Single idea object
      ideas = [webhookData];
    } else {
      console.warn('Unknown webhook data format, treating as single idea');
      ideas = [webhookData];
    }

    // Validate and clean the ideas
    return ideas.filter(idea => idea && idea.title && idea.description);
  } catch (error) {
    console.error('Error processing webhook data:', error);
    return [];
  }
}

// Main function to fetch and save startup ideas
async function fetchAndSaveStartupIdeas(): Promise<void> {
  try {
    const webhookData = await fetchStartupIdeas();
    const ideas = processWebhookData(webhookData);
    
    if (ideas.length > 0) {
      await saveStartupIdeas(ideas, webhookData);
      console.log(`[${new Date().toISOString()}] Daily sync completed successfully. Processed ${ideas.length} ideas.`);
    } else {
      console.log(`[${new Date().toISOString()}] No valid startup ideas found in webhook data.`);
    }
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Daily sync failed:`, error);
  }
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/startup-ideas', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('startup_ideas')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.json(data || []);
  } catch (error) {
    console.error('Error fetching startup ideas:', error);
    res.status(500).json({ error: 'Failed to fetch startup ideas' });
  }
});

app.post('/api/sync-ideas', async (req, res) => {
  try {
    await fetchAndSaveStartupIdeas();
    res.json({ success: true, message: 'Sync completed successfully' });
  } catch (error) {
    console.error('Manual sync failed:', error);
    res.status(500).json({ error: 'Sync failed' });
  }
});

// Direct endpoint for n8n webhook (production endpoint)
app.post('/sync-ideas/', async (req, res) => {
  try {
    console.log(`[${new Date().toISOString()}] Received data from n8n:`, req.body);
    
    // Process the incoming data from n8n
    const ideaData = req.body;
    
    // Convert n8n format to our StartupIdea format
    const startupIdea: StartupIdea = {
      title: ideaData['Startup idea'] || ideaData.title || 'Untitled Idea',
      description: ideaData['Pain Point'] || ideaData.description || '',
      category: ideaData.Category || ideaData.category,
      targetMarket: ideaData.Industry || ideaData['Target Market'] || ideaData.targetMarket,
      revenueModel: ideaData['Revenue Model'] || ideaData.revenueModel,
      marketSize: ideaData['Market Size'] || ideaData.marketSize,
      timeToMarket: ideaData['Time to Market'] || ideaData.timeToMarket,
      difficulty: ideaData.difficulty || 'Medium',
      featured: false
    };

    // Save to database
    await saveStartupIdeas([startupIdea], ideaData);
    
    res.json({ 
      success: true, 
      message: 'Startup idea received and saved successfully',
      idea: {
        title: startupIdea.title,
        category: startupIdea.category
      }
    });
    
  } catch (error) {
    console.error('Error processing n8n webhook:', error);
    res.status(500).json({ 
      error: 'Failed to process startup idea',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Schedule daily webhook fetch (runs every day at 9:00 AM)
cron.schedule('0 9 * * *', async () => {
  console.log(`[${new Date().toISOString()}] Running scheduled startup ideas sync...`);
  await fetchAndSaveStartupIdeas();
}, {
  timezone: "Europe/Berlin" // Adjust timezone as needed
});

// Also run sync on server startup for testing
console.log(`[${new Date().toISOString()}] Server starting - running initial sync...`);
setTimeout(fetchAndSaveStartupIdeas, 5000); // Wait 5 seconds after startup

app.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Server running on port ${PORT}`);
  console.log(`[${new Date().toISOString()}] Daily sync scheduled for 9:00 AM (Europe/Berlin timezone)`);
  console.log(`[${new Date().toISOString()}] Health check: http://localhost:${PORT}/api/health`);
  console.log(`[${new Date().toISOString()}] API endpoint: http://localhost:${PORT}/api/startup-ideas`);
  console.log(`[${new Date().toISOString()}] Manual sync: http://localhost:${PORT}/api/sync-ideas`);
});

export default app;
