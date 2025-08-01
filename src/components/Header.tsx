import { Button } from "@/components/ui/button";
import { Film, Target, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Kill Bill inspired logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center transform -skew-x-12 shadow-glow">
            <Film className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-xl tracking-wider text-foreground">
              STARTUPIDEA.AI
            </span>
            <span className="font-mono text-xs text-primary tracking-widest leading-none">
              INNOVATION_ENGINE
            </span>
          </div>
        </div>
        
        {/* Cinematic navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#ideas" className="font-oswald text-sm font-medium text-foreground/80 hover:text-primary transition-cinematic tracking-wider uppercase relative group">
            IDEAS
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#categories" className="font-oswald text-sm font-medium text-foreground/80 hover:text-primary transition-cinematic tracking-wider uppercase relative group">
            CATEGORIES
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#about" className="font-oswald text-sm font-medium text-foreground/80 hover:text-primary transition-cinematic tracking-wider uppercase relative group">
            ABOUT
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas text-sm tracking-wider transform -skew-x-6 transition-cinematic shadow-card hidden sm:flex">
            <Target className="w-4 h-4 mr-2" />
            GENERATE IDEA
          </Button>
          
          <Button variant="ghost" size="sm" className="md:hidden text-primary">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;