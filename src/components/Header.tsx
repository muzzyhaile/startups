import { Button } from "@/components/ui/button";
import { Lightbulb, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            StartupIdea.AI
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#ideas" className="text-foreground/80 hover:text-foreground transition-colors">
            Ideas
          </a>
          <a href="#categories" className="text-foreground/80 hover:text-foreground transition-colors">
            Categories
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Sparkles className="w-4 h-4 mr-2" />
          Generate Idea
        </Button>
      </div>
    </header>
  );
};

export default Header;