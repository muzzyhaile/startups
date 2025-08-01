import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StartupIdeaCard from "@/components/StartupIdeaCard";
import CategoryGrid from "@/components/CategoryGrid";

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
      
      {/* Featured Ideas Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Today's Featured Ideas
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Carefully curated startup concepts with detailed market analysis and implementation strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
      <footer className="py-12 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">S</span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              StartupIdea.AI
            </span>
          </div>
          <p className="text-muted-foreground">
            Generating the future, one idea at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;