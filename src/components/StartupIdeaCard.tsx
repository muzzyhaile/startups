import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, DollarSign, Users, Clock, Crosshair, Sword } from "lucide-react";
import { createSlug } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface StartupIdeaCardProps {
  title: string;
  description: string;
  category: string;
  targetMarket: string;
  revenueModel: string;
  marketSize: string;
  timeToMarket: string;
  salary?: string;
  difficulty: "Easy" | "Medium" | "Hard";
  featured?: boolean;
  riskAssessment?: Array<{
    risk: string;
    likelihood: string;
    impact: string;
    mitigation: string;
  }>;
  goToMarketStrategy?: string[];
  successMetrics?: string[];
  keyStrengths?: string[];
  keyChallenges?: string[];
  recommendedNextSteps?: string[];
}

const StartupIdeaCard = ({
  title,
  description,
  category,
  targetMarket,
  revenueModel,
  marketSize,
  timeToMarket,
  salary,
  difficulty,
  featured = false,
  riskAssessment = [],
  goToMarketStrategy = [],
  successMetrics = [],
  keyStrengths = [],
  keyChallenges = [],
  recommendedNextSteps = [],
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
        navigate(`/idea/${createSlug(title)}`);
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
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-primary text-primary-foreground font-bebas text-xs tracking-wider transform -skew-x-6 max-w-[200px] truncate">
                {(category || 'General').toUpperCase()}
              </Badge>
              <Badge 
                variant="outline" 
                className={`font-mono text-xs ${getDifficultyColor(difficulty || 'Medium')} transform skew-x-6`}
              >
                {(difficulty || 'Medium').toUpperCase()}
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
        
        {/* Salary Information */}
        {salary && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
            <p className="text-foreground/50 font-mono text-xs tracking-wider uppercase mb-1">Expected Salary</p>
            <p className="font-bebas text-lg text-primary tracking-wider">{salary}</p>
          </div>
        )}
        
        {/* Key Strengths */}
        {keyStrengths.length > 0 && (
          <div>
            <h4 className="font-bebas text-sm tracking-wider uppercase text-primary mb-2">💪 Key Strengths</h4>
            <ul className="space-y-1">
              {keyStrengths.slice(0, 3).map((strength, index) => (
                <li key={index} className="text-sm font-oswald flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Key Challenges */}
        {keyChallenges.length > 0 && (
          <div>
            <h4 className="font-bebas text-sm tracking-wider uppercase text-yellow-500 mb-2">⚠️ Key Challenges</h4>
            <ul className="space-y-1">
              {keyChallenges.slice(0, 2).map((challenge, index) => (
                <li key={index} className="text-sm font-oswald flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Go-to-Market Strategy Preview */}
        {goToMarketStrategy.length > 0 && (
          <div>
            <h4 className="font-bebas text-sm tracking-wider uppercase text-primary mb-2">🚀 Go-to-Market</h4>
            <ul className="space-y-1">
              {goToMarketStrategy.slice(0, 2).map((strategy, index) => (
                <li key={index} className="text-sm font-oswald flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{strategy}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Risk Assessment Preview */}
        {riskAssessment.length > 0 && (
          <div>
            <h4 className="font-bebas text-sm tracking-wider uppercase text-red-500 mb-2">🎯 Top Risk</h4>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <p className="font-oswald font-medium text-sm">{riskAssessment[0].risk}</p>
                <div className="flex gap-1">
                  <Badge variant="outline" className="text-xs">{riskAssessment[0].likelihood}</Badge>
                  <Badge variant="outline" className="text-xs">{riskAssessment[0].impact}</Badge>
                </div>
              </div>
              <p className="text-xs text-foreground/70 font-oswald">{riskAssessment[0].mitigation}</p>
            </div>
          </div>
        )}
        
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bebas text-lg tracking-wider transform -skew-x-6 transition-cinematic shadow-card relative group overflow-hidden"
          size="lg"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/idea/${createSlug(title)}`);
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative">VIEW DETAILS</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default StartupIdeaCard;