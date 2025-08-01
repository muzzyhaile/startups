import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, TrendingUp, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-20 md:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-accent" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8">
            <Lightbulb className="w-4 h-4 mr-2" />
            AI-Powered Startup Ideas
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Discover Your Next
            <br />
            <span className="text-primary">Big Idea</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Access curated startup concepts with comprehensive market analysis, 
            target audiences, and actionable implementation strategies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-smooth shadow-elevated px-8 py-3"
              onClick={() => navigate('/idea/AI-Powered Personal Finance Assistant')}
            >
              Explore Today's Idea
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-accent transition-smooth px-8 py-3"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Brain className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-semibold text-foreground">500+</span>
              </div>
              <p className="text-muted-foreground text-sm">Ideas Generated</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-semibold text-foreground">95%</span>
              </div>
              <p className="text-muted-foreground text-sm">Market Viability</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Lightbulb className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-semibold text-foreground">Daily</span>
              </div>
              <p className="text-muted-foreground text-sm">Fresh Ideas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;