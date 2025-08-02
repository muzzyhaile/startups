import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StartupIdeaCard from "@/components/StartupIdeaCard";
import SEO from "@/components/SEO";
import CategoryGrid from "@/components/CategoryGrid";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, RefreshCw } from "lucide-react";
import { supabase, isSupabaseAvailable } from "@/lib/supabase";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [startupIdeas, setStartupIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { toast } = useToast();
  
  // Get section from URL params
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get('section');
  
  // Scroll to top when component mounts or when navigating from idea details
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Handle section-based scrolling
  useEffect(() => {
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section === 'ideas' ? 'todays-idea' : section === 'browse' ? 'browse-ideas' : section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [section]);

  // Fetch startup ideas from Supabase
  const fetchStartupIdeas = async () => {
    try {
      setIsLoading(true);
      
      // Check if Supabase client is available
      if (!isSupabaseAvailable()) {
        setHasError(true);
        setErrorMessage('Missing database configuration - check environment variables');
        toast({
          title: "Configuration Error",
          description: "Missing database configuration. Please check environment variables.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      
      const { data, error } = await supabase
        .from('startup_ideas')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      if (data && data.length > 0) {
        // Map database fields to component props
        const mappedIdeas = data.map((idea: any) => ({
          title: idea.title,
          description: idea.description,
          category: idea.category,
          targetMarket: idea.target_market,
          revenueModel: idea.revenue_model,
          marketSize: idea.market_size,
          timeToMarket: idea.time_to_market,
          salary: idea.salary,
          difficulty: idea.difficulty || 'Medium',
          featured: idea.featured || false,
          riskAssessment: idea.risk_assessment_and_mitigation || [],
          goToMarketStrategy: idea.go_to_market_strategy || [],
          successMetrics: idea.success_metrics_kpis || [],
          keyStrengths: idea.key_strengths || [],
          keyChallenges: idea.key_challenges || [],
          recommendedNextSteps: idea.recommended_next_steps || [],
        }));
        
        setStartupIdeas(mappedIdeas);
        toast({
          title: "Ideas Loaded",
          description: `Loaded ${data.length} startup ideas from database.`,
        });
      } else {
        toast({
          title: "No Ideas Found",
          description: "No startup ideas found in database. Check back later!",
        });
      }
    } catch (error) {
      setHasError(true);
      setErrorMessage(`Database error: ${error.message}`);
      toast({
        title: "Error Loading Ideas",
        description: "Could not load startup ideas from database.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };



  // Load ideas on component mount
  useEffect(() => {
    fetchStartupIdeas();
  }, []);
  
  // If there's an error, show visible error message
  if (hasError) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#ffe6e6',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          backgroundColor: '#ff0000',
          color: 'white',
          padding: '30px',
          borderRadius: '10px',
          maxWidth: '600px',
          textAlign: 'center',
          fontSize: '18px'
        }}>
          <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>🚨 APPLICATION ERROR 🚨</h1>
          <p style={{ marginBottom: '15px' }}><strong>Error:</strong> {errorMessage}</p>
          <p style={{ fontSize: '14px', marginTop: '20px' }}>Check browser console for detailed logs</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              backgroundColor: 'white',
              color: 'red',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              marginTop: '20px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="StartupIdea.AI - AI-Powered Daily Startup Ideas | Build Your Next Venture"
        description="Get fresh AI-generated startup ideas daily. Explore innovative business concepts with market analysis, revenue models, and actionable insights. Turn ideas into reality with StartupIdea.AI."
        keywords="startup ideas, AI generated business ideas, entrepreneurship, business concepts, startup inspiration, market analysis, revenue models, business planning, innovation, venture ideas"
        url="https://startupidea.ai/"
      />
      <Header />
      <Hero />
      
      <StatsSection />
      
      {/* Today's Featured Idea Section */}
      <section id="todays-idea" className="py-20 px-4 relative">
        {/* Yellow accent lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-primary" />
        
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-7xl mb-6 text-foreground tracking-wider uppercase">
              TODAY'S
              <span className="text-primary neon-glow block"> FEATURED IDEA</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-oswald">
              FRESH STARTUP CONCEPTS • MARKET INSIGHTS • EXECUTION ROADMAPS
            </p>
            
            {/* Film strip decoration */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-8 bg-primary/20 border border-primary/40" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Today's Featured Idea - Show only the latest/featured idea */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <span className="ml-4 font-oswald text-xl text-muted-foreground tracking-wider">LOADING TODAY'S IDEA...</span>
            </div>
          ) : startupIdeas.length > 0 ? (
            <div className="flex justify-center">
              <div className="max-w-md">
                <StartupIdeaCard
                  {...startupIdeas[0]}
                  featured={true}
                />
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-bebas text-3xl text-muted-foreground mb-4 tracking-wider">NO IDEAS YET</h3>
              <p className="text-muted-foreground font-oswald">Today's startup idea will appear here once your n8n workflow creates it!</p>
            </div>
          )}
          
          {/* View All Ideas Button */}
          {startupIdeas.length > 1 && (
            <div className="text-center mt-12">
              <Button 
                onClick={() => {
                  const element = document.getElementById('browse-ideas');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas text-lg tracking-wider transform -skew-x-6 px-8 py-4"
              >
                VIEW ALL {startupIdeas.length} IDEAS
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Browse All Ideas Section */}
      <section id="browse-ideas" className="py-20 px-4 relative bg-gradient-secondary">
        {/* Yellow accent lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary" />
        
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-7xl mb-6 text-foreground tracking-wider uppercase">
              BROWSE
              <span className="text-primary neon-glow block"> ALL IDEAS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-oswald">
              EXPLORE ALL CONCEPTS • FIND YOUR PERFECT MATCH • START BUILDING
            </p>
            
            {/* Film strip decoration */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-2 h-6 bg-primary/30 border border-primary/50" />
                ))}
              </div>
            </div>
          </div>
          
          {/* All Startup Ideas Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <span className="ml-4 font-oswald text-xl text-muted-foreground tracking-wider">LOADING ALL IDEAS...</span>
            </div>
          ) : startupIdeas.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {startupIdeas.map((idea, index) => (
                <StartupIdeaCard
                  key={index}
                  {...idea}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-bebas text-3xl text-muted-foreground mb-4 tracking-wider">NO IDEAS YET</h3>
              <p className="text-muted-foreground font-oswald">Startup ideas will appear here once your n8n workflow creates them!</p>
            </div>
          )}
        </div>
      </section>
      
      <div id="categories">
        <CategoryGrid />
      </div>
      
      {/* Kill Bill Footer */}
      <footer className="py-16 border-t-2 border-primary bg-gradient-secondary relative overflow-hidden">
        {/* Yellow accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-primary flex items-center justify-center transform -skew-x-12 shadow-glow">
              <span className="text-primary-foreground font-bebas text-xl">S</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bebas text-2xl text-foreground tracking-wider">
                STARTUPIDEA.AI
              </span>
              <span className="font-mono text-xs text-primary tracking-widest">
                INNOVATION_ENGINE
              </span>
            </div>
          </div>
          <p className="text-muted-foreground font-oswald text-lg tracking-wider uppercase">
            "ONE FRESH STARTUP IDEA DELIVERED DAILY"
          </p>
          
          {/* Legal Links */}
          <div className="mt-8 pt-6 border-t border-primary/20">
            <div className="flex justify-center items-center space-x-8">
              <button 
                onClick={() => navigate('/imprint')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-oswald tracking-wider uppercase"
              >
                Imprint
              </button>
              <button 
                onClick={() => navigate('/privacy')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-oswald tracking-wider uppercase"
              >
                Privacy
              </button>
              <button 
                onClick={() => navigate('/terms')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-oswald tracking-wider uppercase"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;