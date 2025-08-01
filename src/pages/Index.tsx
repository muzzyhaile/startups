import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StartupIdeaCard from "@/components/StartupIdeaCard";
import CategoryGrid from "@/components/CategoryGrid";
import StatsSection from "@/components/StatsSection";

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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <StatsSection />
      
      {/* Featured Ideas Section */}
      <section className="py-20 px-4 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />
        
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Today's Featured
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Ideas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Meticulously curated startup concepts with comprehensive market validation, 
              detailed competitive analysis, and executable business strategies.
            </p>
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
      
      {/* Footer */}
      <footer className="py-16 border-t border-border/50 bg-gradient-accent relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-foreground">
                StartupIdea.AI
              </span>
              <span className="text-xs text-muted-foreground">
                Innovation Engine
              </span>
            </div>
          </div>
          <p className="text-muted-foreground font-light text-lg">
            Generating the future, one revolutionary idea at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;