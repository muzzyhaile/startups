import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StartupIdeaCard from "@/components/StartupIdeaCard";
import CategoryGrid from "@/components/CategoryGrid";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, RefreshCw } from "lucide-react";
import { createClient } from '@supabase/supabase-js';

// Supabase client configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hxxjkmgznhhvvmpokfih.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4eGprbWd6bmhodnZtcG9rZmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyOTcxMTEsImV4cCI6MjA0Mjg3MzExMX0.NQgQz6SHPz6sGCEMAlnDNZmE6SQNT8HEa6-6q1WDZlE';
const supabase = createClient(supabaseUrl, supabaseKey);

const Index = () => {
  const [startupIdeas, setStartupIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Fetch startup ideas from Supabase
  const fetchStartupIdeas = async () => {
    try {
      setIsLoading(true);
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
      console.error('Failed to fetch startup ideas:', error);
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

  return (
    <div className="min-h-screen bg-background film-grain">
      <Header />
      <Hero />
      
      <StatsSection />
      
      {/* Featured Ideas Section - Kill Bill style */}
      <section id="ideas" className="py-20 px-4 relative">
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
          
          {/* Startup Ideas Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <span className="ml-4 font-oswald text-xl text-muted-foreground tracking-wider">LOADING IDEAS...</span>
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
              <p className="text-muted-foreground font-oswald">New startup ideas will appear here once your n8n workflow creates them!</p>
            </div>
          )}
        </div>
      </section>
      
      <CategoryGrid />
      
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
        </div>
      </footer>
    </div>
  );
};

export default Index;