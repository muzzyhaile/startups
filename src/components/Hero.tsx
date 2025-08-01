import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, TrendingUp, Lightbulb, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-24 md:py-32 bg-gradient-hero overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse delay-1000" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass border border-primary/20 backdrop-blur-sm mb-8 shadow-glow">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered Innovation Engine
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="text-foreground">Transform Ideas Into</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent relative">
              Startup Success
              <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-2xl rounded-lg" />
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Discover meticulously crafted startup concepts with comprehensive market intelligence, 
            validated business models, and executable implementation roadmaps.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-hero transition-bounce shadow-glow text-white font-semibold px-8 py-4 h-auto text-lg relative group overflow-hidden"
              onClick={() => navigate('/idea/AI-Powered Personal Finance Assistant')}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <Zap className="w-5 h-5 mr-2" />
              Explore Today's Idea
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-smooth backdrop-blur-sm bg-gradient-glass px-8 py-4 h-auto text-lg font-semibold"
              onClick={() => {
                document.getElementById('explore-categories')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;