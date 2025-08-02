import { Button } from "@/components/ui/button";
import { Lightbulb, Target, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo with lightbulb */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-colors">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
            <Lightbulb className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-foreground">
              StartupIdea.ai
            </span>
            <span className="text-xs text-primary font-medium">
              Daily startup ideas
            </span>
          </div>
        </Link>
        
        {/* Cinematic navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/?section=ideas" className="font-oswald text-sm font-medium text-foreground/80 hover:text-primary transition-cinematic tracking-wider uppercase relative group">
            TODAY'S IDEA
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/?section=browse" className="font-oswald text-sm font-medium text-foreground/80 hover:text-primary transition-cinematic tracking-wider uppercase relative group">
            BROWSE IDEAS
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/?section=categories" className="font-oswald text-sm font-medium text-foreground/80 hover:text-primary transition-cinematic tracking-wider uppercase relative group">
            CATEGORIES
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/about" className="font-oswald text-sm font-medium text-foreground/80 hover:text-primary transition-cinematic tracking-wider uppercase relative group">
            ABOUT
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium hidden sm:flex"
          >
            <Link to="/?section=ideas">
              <Target className="w-4 h-4 mr-2" />
              Today's Idea
            </Link>
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