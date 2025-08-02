import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StartupIdeaCard from "@/components/StartupIdeaCard";
import CategoryGrid from "@/components/CategoryGrid";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, RefreshCw, Download } from "lucide-react";

const mockStartupIdeas = [
  {
    title: "AI-Powered Personal Learning Assistant",
    description: "An intelligent platform that creates personalized learning paths by analyzing individual learning patterns, preferences, and goals. Uses advanced AI to adapt content difficulty and teaching methods in real-time.",
    category: "EdTech",
    targetMarket: "Professionals & Students",
    revenueModel: "Subscription",
    marketSize: "$350B",
    timeToMarket: "8-12 months",
    difficulty: "Medium" as const,
    featured: true,
  },
  {
    title: "Sustainable Package Tracking Network",
    description: "A blockchain-based system that tracks packages throughout their lifecycle while incentivizing sustainable delivery options and packaging materials through carbon credits and rewards.",
    category: "Sustainability",
    targetMarket: "E-commerce Retailers",
    revenueModel: "Transaction Fees",
    marketSize: "$15B",
    timeToMarket: "12-18 months",
    difficulty: "Hard" as const,
  },
  {
    title: "Remote Team Wellness Platform",
    description: "A comprehensive wellness platform designed specifically for remote teams, featuring virtual fitness classes, mental health resources, and team building activities with integrated analytics.",
    category: "HealthTech",
    targetMarket: "Remote Companies",
    revenueModel: "B2B SaaS",
    marketSize: "$80B",
    timeToMarket: "6-9 months",
    difficulty: "Easy" as const,
  },
];

const Index = () => {
  const [startupIdeas, setStartupIdeas] = useState(mockStartupIdeas);
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const { toast } = useToast();

  // Fetch startup ideas from database
  const fetchStartupIdeas = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3001/api/startup-ideas');
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setStartupIdeas(data);
          toast({
            title: "Ideas Updated",
            description: `Loaded ${data.length} startup ideas from database.`,
          });
        }
      }
    } catch (error) {
      console.error('Failed to fetch startup ideas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Manual sync function to trigger webhook
  const syncIdeas = async () => {
    try {
      setIsSyncing(true);
      toast({
        title: "Syncing...",
        description: "Fetching latest startup ideas from webhook.",
      });
      
      const response = await fetch('http://localhost:3001/api/sync-ideas', {
        method: 'POST',
      });
      
      if (response.ok) {
        await fetchStartupIdeas(); // Refresh the ideas after sync
        toast({
          title: "Sync Complete!",
          description: "Successfully fetched and saved new startup ideas.",
        });
      } else {
        throw new Error('Sync failed');
      }
    } catch (error) {
      console.error('Sync failed:', error);
      toast({
        title: "Sync Failed",
        description: "Could not sync startup ideas. Make sure the server is running.",
        variant: "destructive",
      });
    } finally {
      setIsSyncing(false);
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
      <section className="py-20 px-4 relative">
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
            
            {/* Manual Sync Button */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={fetchStartupIdeas}
                disabled={isLoading}
                variant="outline"
                className="font-oswald tracking-wider border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Download className="mr-2 h-4 w-4" />
                )}
                LOAD IDEAS
              </Button>
              
              <Button
                onClick={syncIdeas}
                disabled={isSyncing}
                className="font-oswald tracking-wider bg-primary hover:bg-primary/90 neon-glow"
              >
                {isSyncing ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCw className="mr-2 h-4 w-4" />
                )}
                SYNC WEBHOOK
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mockStartupIdeas.map((idea, index) => (
              <StartupIdeaCard
                key={index}
                {...idea}
              />
            ))}
          </div>
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