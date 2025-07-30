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
      className={`group transition-all duration-300 hover:shadow-card hover:scale-[1.02] cursor-pointer ${
        featured 
          ? "border-primary/50 bg-gradient-accent shadow-glow" 
          : "border-border/50 hover:border-primary/30"
      }`}
      onClick={() => {
        navigate(`/idea/${encodeURIComponent(title)}`);
      }}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
              <Badge 
                variant="outline" 
                className={`text-xs ${getDifficultyColor(difficulty)}`}
              >
                {difficulty}
              </Badge>
              {featured && (
                <Badge className="bg-primary text-primary-foreground text-xs">
                  Today's Featured
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <BookmarkPlus className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
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
          className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
          size="lg"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/idea/${encodeURIComponent(title)}`);
          }}
        >
          View Full Analysis
        </Button>
      </CardContent>
    </Card>
  );
};

export default StartupIdeaCard;