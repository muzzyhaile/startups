import { Button } from "@/components/ui/button";
import { Lightbulb, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">
            StartupIdea.AI
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#ideas" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">
            Ideas
          </a>
          <a href="#categories" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">
            Categories
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth font-medium">
            About
          </a>
        </nav>

        <Button variant="default" className="bg-primary hover:bg-primary/90 transition-smooth">
          <Plus className="w-4 h-4 mr-2" />
          Generate Idea
        </Button>
      </div>
    </header>
  );
};

export default Header;