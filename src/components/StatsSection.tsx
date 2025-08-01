import { Target, Crosshair, Sword, Zap } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "365+",
    label: "IDEAS DELIVERED",
    description: "Fresh concepts daily"
  },
  {
    icon: Crosshair,
    value: "95%",
    label: "MARKET VALIDATED",
    description: "Research-backed opportunities"
  },
  {
    icon: Sword,
    value: "10K+",
    label: "ENTREPRENEURS",
    description: "Building the future"
  },
  {
    icon: Zap,
    value: "$2B+",
    label: "MARKET POTENTIAL",
    description: "Combined opportunity size"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-secondary film-grain">
      {/* Yellow accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary" />
      
      {/* Geometric yellow accents */}
      <div className="absolute top-10 left-10 w-16 h-1 bg-primary rotate-45 opacity-60" />
      <div className="absolute bottom-10 right-10 w-20 h-1 bg-primary -rotate-45 opacity-60" />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-7xl mb-6 text-foreground tracking-wider uppercase">
            DAILY
            <span className="text-primary neon-glow block"> IMPACT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-oswald tracking-wide">
            ONE IDEA • DAILY DELIVERY • ENDLESS POSSIBILITIES
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary transform -skew-x-12 mb-4 group-hover:shadow-glow group-hover:scale-110 transition-cinematic">
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="font-bebas text-4xl md:text-5xl text-primary neon-glow tracking-wider">
                    {stat.value}
                  </div>
                  <div className="font-bebas text-lg text-foreground tracking-wider">
                    {stat.label}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
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