import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Target, DollarSign, Users, Clock, TrendingUp, Lightbulb, CheckCircle, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock detailed analysis data
const getIdeaDetails = (title: string) => {
  const baseDetails = {
    "AI-Powered Personal Learning Assistant": {
      marketAnalysis: {
        totalMarket: "$350B",
        targetSegment: "$25B",
        growthRate: "18% CAGR",
        competition: "Medium",
      },
      technicalFeasibility: 85,
      marketDemand: 92,
      competitiveAdvantage: 78,
      keyMetrics: [
        { label: "Time to MVP", value: "6 months" },
        { label: "Initial Investment", value: "$500K - $1M" },
        { label: "Break-even Point", value: "18 months" },
        { label: "5-Year Revenue", value: "$50M" },
      ],
      strengths: [
        "Growing demand for personalized education",
        "AI technology readily available",
        "Scalable business model",
        "Large addressable market",
      ],
      challenges: [
        "Data privacy concerns",
        "Need for quality content partnerships",
        "User acquisition costs",
        "Technical complexity",
      ],
      nextSteps: [
        "Conduct user research and validation",
        "Develop MVP with core AI features",
        "Secure content partnerships",
        "Build technical team",
        "Raise seed funding",
      ],
    },
  };

  return baseDetails[title as keyof typeof baseDetails] || {
    marketAnalysis: {
      totalMarket: "TBD",
      targetSegment: "TBD",
      growthRate: "TBD",
      competition: "TBD",
    },
    technicalFeasibility: 70,
    marketDemand: 75,
    competitiveAdvantage: 65,
    keyMetrics: [],
    strengths: [],
    challenges: [],
    nextSteps: [],
  };
};

const IdeaDetail = () => {
  const { ideaTitle } = useParams<{ ideaTitle: string }>();
  const decodedTitle = ideaTitle ? decodeURIComponent(ideaTitle) : "";
  const details = getIdeaDetails(decodedTitle);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Ideas
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-6">
            {decodedTitle}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Market Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Market Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-foreground/60">Total Market</p>
                  <p className="font-semibold">{details.marketAnalysis.totalMarket}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Target Segment</p>
                  <p className="font-semibold">{details.marketAnalysis.targetSegment}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Growth Rate</p>
                  <p className="font-semibold">{details.marketAnalysis.growthRate}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Competition</p>
                  <p className="font-semibold">{details.marketAnalysis.competition}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feasibility Scores */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Feasibility Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Technical Feasibility</span>
                  <span className="text-sm font-medium">{details.technicalFeasibility}%</span>
                </div>
                <Progress value={details.technicalFeasibility} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Market Demand</span>
                  <span className="text-sm font-medium">{details.marketDemand}%</span>
                </div>
                <Progress value={details.marketDemand} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Competitive Advantage</span>
                  <span className="text-sm font-medium">{details.competitiveAdvantage}%</span>
                </div>
                <Progress value={details.competitiveAdvantage} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          {details.keyMetrics.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Key Business Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {details.keyMetrics.map((metric, index) => (
                    <div key={index}>
                      <p className="text-sm text-foreground/60">{metric.label}</p>
                      <p className="font-semibold">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Strengths */}
          {details.strengths.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Key Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {details.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Challenges */}
          {details.challenges.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Key Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {details.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Next Steps */}
          {details.nextSteps.length > 0 && (
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Recommended Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {details.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">
                        {index + 1}
                      </Badge>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;