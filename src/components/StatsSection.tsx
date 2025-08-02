import { Target, Crosshair, Sword, Zap } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "365+",
    label: "IDEAS SHARED",
    description: "Curated daily concepts"
  },
  {
    icon: Crosshair,
    value: "100%",
    label: "RESEARCH BASED",
    description: "Market trends analyzed"
  },
  {
    icon: Sword,
    value: "5K+",
    label: "READERS",
    description: "Growing community"
  },
  {
    icon: Zap,
    value: "24H",
    label: "FRESH CONTENT",
    description: "Updated daily"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground font-semibold">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering fresh startup ideas and insights daily
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl text-primary font-bold">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
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