import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, DollarSign, Users, Clock, Crosshair, Sword } from "lucide-react";
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
        return "bg-primary/20 text-primary border-primary/40";
      case "Medium":
        return "bg-primary/30 text-primary border-primary/50";
      case "Hard":
        return "bg-primary/40 text-primary border-primary/60";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card 
      className={`group transition-cinematic hover:shadow-hero cursor-pointer relative overflow-hidden border-2 bg-card film-grain ${
        featured 
          ? "border-primary shadow-glow" 
          : "border-border hover:border-primary/50"
      }`}
      onClick={() => {
        navigate(`/idea/${encodeURIComponent(title)}`);
      }}
    >
      {/* Yellow accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
      
      {/* Kill Bill stripe effect */}
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}
      
      <CardHeader className="space-y-4 pt-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground font-bebas text-xs tracking-wider transform -skew-x-6">
                {category.toUpperCase()}
              </Badge>
              <Badge 
                variant="outline" 
                className={`font-mono text-xs ${getDifficultyColor(difficulty)} transform skew-x-6`}
              >
                {difficulty.toUpperCase()}
              </Badge>
              {featured && (
                <Badge className="bg-gradient-primary text-primary-foreground font-bebas text-xs shadow-glow neon-glow">
                  ⚡ KILL SHOT
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-cinematic">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/20 text-primary">
              <Crosshair className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/20 text-primary">
              <Sword className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <CardTitle className="font-bebas text-2xl leading-tight group-hover:text-primary transition-cinematic tracking-wider uppercase">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <p className="text-foreground/80 leading-relaxed font-oswald">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <div>
              <p className="text-foreground/50 font-mono text-xs tracking-wider uppercase">Target</p>
              <p className="font-oswald font-medium">{targetMarket}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            <div>
              <p className="text-foreground/50 font-mono text-xs tracking-wider uppercase">Revenue</p>
              <p className="font-oswald font-medium">{revenueModel}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <div>
              <p className="text-foreground/50 font-mono text-xs tracking-wider uppercase">Market</p>
              <p className="font-oswald font-medium">{marketSize}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <div>
              <p className="text-foreground/50 font-mono text-xs tracking-wider uppercase">Timeline</p>
              <p className="font-oswald font-medium">{timeToMarket}</p>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bebas text-lg tracking-wider transform -skew-x-6 transition-cinematic shadow-card relative group overflow-hidden"
          size="lg"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/idea/${encodeURIComponent(title)}`);
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative">EXECUTE PLAN</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default StartupIdeaCard;