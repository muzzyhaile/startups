import { Brain, TrendingUp, Users, Rocket } from "lucide-react";

const stats = [
  {
    icon: Brain,
    value: "500+",
    label: "Ideas Generated",
    description: "Curated startup concepts"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Market Viability",
    description: "Validated opportunities"
  },
  {
    icon: Users,
    value: "10K+",
    label: "Entrepreneurs",
    description: "Building the future"
  },
  {
    icon: Rocket,
    value: "$2B+",
    label: "Market Potential",
    description: "Combined opportunity size"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-accent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-primary opacity-5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Powering Innovation Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of entrepreneurs who've discovered their next big opportunity through our AI-powered platform.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-glass border border-primary/10 mb-4 group-hover:shadow-glow group-hover:scale-110 transition-bounce">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;