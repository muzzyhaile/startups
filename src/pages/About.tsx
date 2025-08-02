import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Zap, Globe, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background film-grain">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden bg-gradient-hero">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary" />
        <div className="absolute top-1/4 right-1/4 w-32 h-1 bg-primary rotate-45 opacity-60" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-1 bg-primary -rotate-45 opacity-60" />
        
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-primary flex items-center justify-center transform -skew-x-12 shadow-glow">
              <Lightbulb className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="font-bebas text-6xl md:text-8xl mb-6 text-foreground tracking-wider uppercase">
            ABOUT
            <span className="text-primary neon-glow block">STARTUPIDEA.AI</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-oswald leading-relaxed">
            DAILY STARTUP CONCEPTS • MARKET INSIGHTS • EXECUTION ROADMAPS
          </p>
          
          {/* Film strip decoration */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-3 h-8 bg-primary/20 border border-primary/40" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bebas text-4xl md:text-6xl mb-8 text-center tracking-wider uppercase">
              OUR <span className="text-primary">MISSION</span>
            </h2>
            
            <Card className="border-2 border-primary/20 bg-card film-grain mb-12">
              <CardContent className="p-8">
                <p className="text-lg font-oswald leading-relaxed text-center">
                  We believe that great startup ideas shouldn't be reserved for Silicon Valley insiders. 
                  Every day, we deliver fresh, actionable startup concepts complete with market analysis, 
                  revenue models, and execution strategies. Our AI-powered platform identifies emerging 
                  opportunities across industries, helping entrepreneurs worldwide turn ideas into reality.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <Card className="border-2 border-border hover:border-primary transition-cinematic group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary transform -skew-x-6 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-cinematic">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bebas text-xl tracking-wider uppercase mb-2">DAILY IDEAS</h3>
                  <p className="font-oswald text-sm text-muted-foreground">
                    Fresh startup concepts delivered every day with detailed analysis
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary transition-cinematic group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary transform -skew-x-6 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-cinematic">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bebas text-xl tracking-wider uppercase mb-2">AI POWERED</h3>
                  <p className="font-oswald text-sm text-muted-foreground">
                    Advanced algorithms identify trends and market opportunities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary transition-cinematic group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary transform -skew-x-6 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-cinematic">
                    <Globe className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bebas text-xl tracking-wider uppercase mb-2">GLOBAL REACH</h3>
                  <p className="font-oswald text-sm text-muted-foreground">
                    Ideas spanning multiple industries and international markets
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
        
        <div className="container mx-auto">
          <h2 className="font-bebas text-4xl md:text-6xl mb-16 text-center tracking-wider uppercase">
            HOW IT <span className="text-primary">WORKS</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transform -skew-x-12 shadow-glow">
                <span className="font-bebas text-2xl text-primary-foreground">1</span>
              </div>
              <h3 className="font-bebas text-2xl tracking-wider uppercase mb-4">DISCOVER</h3>
              <p className="font-oswald text-muted-foreground">
                Browse daily curated startup ideas across multiple categories and industries
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transform -skew-x-12 shadow-glow">
                <span className="font-bebas text-2xl text-primary-foreground">2</span>
              </div>
              <h3 className="font-bebas text-2xl tracking-wider uppercase mb-4">ANALYZE</h3>
              <p className="font-oswald text-muted-foreground">
                Deep dive into market size, revenue models, and execution strategies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transform -skew-x-12 shadow-glow">
                <span className="font-bebas text-2xl text-primary-foreground">3</span>
              </div>
              <h3 className="font-bebas text-2xl tracking-wider uppercase mb-4">EXECUTE</h3>
              <p className="font-oswald text-muted-foreground">
                Follow detailed roadmaps and next steps to bring your chosen idea to life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-bebas text-4xl md:text-6xl mb-8 tracking-wider uppercase">
            READY TO <span className="text-primary">START BUILDING?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-oswald mb-12">
            Join thousands of entrepreneurs discovering their next big opportunity
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas text-xl tracking-wider transform -skew-x-6 px-12 py-6 shadow-glow"
          >
            <Link to="/?section=ideas">
              <Rocket className="w-6 h-6 mr-3" />
              VIEW TODAY'S IDEA
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t-2 border-primary bg-gradient-secondary relative overflow-hidden">
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

export default About;
