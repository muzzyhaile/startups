import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Brain } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20" />
      <div className="absolute inset-0 bg-gradient-secondary opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-accent border border-primary/20 mb-6">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">AI-Powered Startup Ideas</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-foreground">Startup Ideas</span>
            <br />
            <span className="text-foreground/80">Generated Daily</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover sophisticated, AI-generated startup concepts with detailed market analysis, 
            target audiences, and implementation strategies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow text-lg px-8 py-6 h-auto"
            >
              Get Today's Idea
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6 h-auto"
              onClick={() => {
                document.getElementById('explore-categories')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Browse Categories
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Brain className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-primary">500+</span>
              </div>
              <p className="text-foreground/60">Ideas Generated</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-primary">95%</span>
              </div>
              <p className="text-foreground/60">Market Viability</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-primary">Daily</span>
              </div>
              <p className="text-foreground/60">Fresh Ideas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;