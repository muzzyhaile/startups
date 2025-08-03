import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Film, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden letterbox film-grain">
      {/* Yellow geometric accents */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-primary opacity-80" />
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-primary opacity-80" />
      <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-primary rotate-45 opacity-60" />
      <div className="absolute bottom-1/3 right-1/3 w-24 h-1 bg-primary -rotate-45 opacity-60" />
      
      {/* Neon glow effects */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-bold tracking-wider mb-8 transform -skew-x-12 shadow-card">
            <Target className="w-4 h-4 mr-2" />
            DAILY STARTUP IDEAS
          </div>
          
          {/* Headline */}
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wider mb-8 uppercase">
            <span className="text-foreground block">ONE IDEA</span>
            <span className="text-primary neon-glow block text-stroke">EVERY DAY</span>
            <span className="text-foreground block">THAT'S IT</span>
          </h1>
          
          {/* Subtitle */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="absolute -left-8 top-0 bottom-0 w-4 bg-gradient-primary opacity-20"></div>
            <div className="absolute -right-8 top-0 bottom-0 w-4 bg-gradient-primary opacity-20"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-oswald font-light leading-relaxed px-8">
              FRESH STARTUP CONCEPTS • MARKET INSIGHTS • EXECUTION ROADMAPS
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas text-xl tracking-wider px-12 py-6 h-auto transform -skew-x-6 transition-cinematic shadow-hero group relative overflow-hidden"
              onClick={() => navigate('/?section=ideas')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Target className="w-6 h-6 mr-3" />
              TODAY'S IDEA
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bebas text-xl tracking-wider px-12 py-6 h-auto transform skew-x-6 transition-cinematic bg-transparent group"
              onClick={() => {
                document.getElementById('explore-categories')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <Play className="w-6 h-6 mr-3" />
              BROWSE IDEAS
            </Button>
          </div>
          
          {/* Simple tagline */}
          <div className="mt-16 font-mono text-sm text-muted-foreground tracking-widest opacity-60">
            "ONE FRESH STARTUP IDEA DELIVERED DAILY"
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;