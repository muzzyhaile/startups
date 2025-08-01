import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, DollarSign, Users, Clock, BookmarkPlus, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface StartupIdeaCardProps {
  title: string;
  description: string;
  category: string;
  targetMarket: string;
  revenueModel: string;
  marketSize: string;
  timeToMarket: string;
  difficulty: "Easy" | "Medium" | "Hard";
  featured?: boolean;
}

const StartupIdeaCard = ({
  title,
  description,
  category,
  targetMarket,
  revenueModel,
  marketSize,
  timeToMarket,
  difficulty,
  featured = false,
}: StartupIdeaCardProps) => {
  const navigate = useNavigate();
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Hard":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card 
      className={`group transition-bounce hover:shadow-hero cursor-pointer relative overflow-hidden ${
        featured 
          ? "border-primary/30 bg-gradient-glass shadow-glow" 
          : "border-border hover:border-primary/30 hover:shadow-elevated"
      }`}
      onClick={() => {
        navigate(`/idea/${encodeURIComponent(title)}`);
      }}
    >
      {/* Shine effect */}
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}
      
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs font-medium bg-primary/5 border-primary/20 text-primary">
                {category}
              </Badge>
              <Badge 
                variant="outline" 
                className={`text-xs font-medium ${getDifficultyColor(difficulty)}`}
              >
                {difficulty}
              </Badge>
              {featured && (
                <Badge className="bg-gradient-primary text-white text-xs font-semibold shadow-glow">
                  ✨ Featured Today
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10">
              <BookmarkPlus className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-smooth font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <p className="text-foreground/70 leading-relaxed">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <div>
              <p className="text-foreground/50">Target Market</p>
              <p className="font-medium">{targetMarket}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            <div>
              <p className="text-foreground/50">Revenue Model</p>
              <p className="font-medium">{revenueModel}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <div>
              <p className="text-foreground/50">Market Size</p>
              <p className="font-medium">{marketSize}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <div>
              <p className="text-foreground/50">Time to Market</p>
              <p className="font-medium">{timeToMarket}</p>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full bg-gradient-primary hover:shadow-glow transition-bounce text-white font-semibold relative group overflow-hidden"
          size="lg"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/idea/${encodeURIComponent(title)}`);
          }}
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          <span className="relative">View Full Analysis</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default StartupIdeaCard;