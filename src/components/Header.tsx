import { Button } from "@/components/ui/button";
import { Lightbulb, Plus, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">
              StartupIdea.AI
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Innovation Engine
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#ideas" className="text-muted-foreground hover:text-primary transition-smooth font-medium relative group">
            Ideas
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#categories" className="text-muted-foreground hover:text-primary transition-smooth font-medium relative group">
            Categories
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth font-medium relative group">
            About
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="default" className="bg-gradient-primary hover:shadow-glow transition-bounce text-white font-semibold hidden sm:flex">
            <Plus className="w-4 h-4 mr-2" />
            Generate Idea
          </Button>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;