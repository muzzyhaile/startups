import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Target, DollarSign, Users, Clock, TrendingUp, Lightbulb, CheckCircle, AlertTriangle, Building, Code, Rocket, BarChart3, Calendar, Shield, Zap, User, Globe } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock detailed analysis data
const getIdeaDetails = (title: string) => {
  const baseDetails = {
    "AI-Powered Personal Finance Assistant": {
      executiveSummary: "A comprehensive AI-driven personal finance platform that provides intelligent budgeting, investment recommendations, and financial goal tracking. Leverages machine learning to analyze spending patterns and provide personalized financial advice.",
      problemStatement: "77% of Americans live paycheck to paycheck, and 57% can't afford a $500 emergency expense. Traditional financial advice is expensive and inaccessible to most people, while existing budgeting apps lack intelligence and personalization.",
      solution: "An AI-powered mobile and web application that acts as a personal financial advisor, providing real-time budget optimization, investment recommendations, debt payoff strategies, and personalized financial education.",
      targetPersonas: [
        { name: "Young Professionals", age: "25-35", income: "$50-100K", pain: "Struggling to save and invest effectively" },
        { name: "Middle-Income Families", age: "35-50", income: "$75-150K", pain: "Managing complex finances with multiple goals" },
        { name: "College Students", age: "18-24", income: "$0-30K", pain: "Learning financial basics and building credit" },
      ],
      businessModel: {
        primary: "Freemium SaaS",
        revenue: [
          "Premium subscriptions ($9.99/month)",
          "Financial product referrals (2-5% commission)",
          "Investment advisory fees (0.25% AUM)",
          "White-label licensing to banks",
        ],
      },
      marketAnalysis: {
        totalMarket: "$1.2T",
        targetSegment: "$87B",
        growthRate: "23% CAGR",
        competition: "High",
      },
      technicalFeasibility: 88,
      marketDemand: 95,
      competitiveAdvantage: 82,
      techStack: [
        "React Native for mobile apps",
        "Python/FastAPI for AI backend",
        "PostgreSQL for data storage",
        "TensorFlow/PyTorch for ML models",
        "Plaid API for bank integrations",
        "AWS/Google Cloud infrastructure",
      ],
      competitors: [
        { name: "Mint", strength: "Brand recognition", weakness: "Limited AI features" },
        { name: "Personal Capital", strength: "Investment focus", weakness: "High minimum balances" },
        { name: "YNAB", strength: "Budgeting methodology", weakness: "Manual setup required" },
        { name: "Robinhood", strength: "Investment platform", weakness: "Limited financial planning" },
      ],
      financialProjections: [
        { year: "Year 1", revenue: "$250K", users: "10K", expenses: "$800K" },
        { year: "Year 2", revenue: "$2.5M", users: "100K", expenses: "$4M" },
        { year: "Year 3", revenue: "$12M", users: "500K", expenses: "$15M" },
        { year: "Year 4", revenue: "$35M", users: "1.2M", expenses: "$25M" },
        { year: "Year 5", revenue: "$75M", users: "2.5M", expenses: "$45M" },
      ],
      keyMetrics: [
        { label: "Time to MVP", value: "4 months" },
        { label: "Initial Investment", value: "$1.2M - $2M" },
        { label: "Break-even Point", value: "Month 30" },
        { label: "Customer Acquisition Cost", value: "$35" },
        { label: "Lifetime Value", value: "$450" },
        { label: "Monthly Churn Rate", value: "3.5%" },
      ],
      implementationTimeline: [
        { phase: "Phase 1", duration: "Months 1-4", tasks: "MVP development, basic AI features, bank integrations" },
        { phase: "Phase 2", duration: "Months 5-8", tasks: "Advanced analytics, investment recommendations, iOS/Android apps" },
        { phase: "Phase 3", duration: "Months 9-12", tasks: "Premium features, white-label platform, international expansion" },
      ],
      resourceRequirements: [
        { role: "CEO/Co-founder", count: 1, cost: "$150K/year" },
        { role: "CTO/Co-founder", count: 1, cost: "$150K/year" },
        { role: "Senior AI Engineers", count: 2, cost: "$140K/year each" },
        { role: "Full-stack Developers", count: 3, cost: "$120K/year each" },
        { role: "Product Manager", count: 1, cost: "$130K/year" },
        { role: "Data Scientists", count: 2, cost: "$135K/year each" },
      ],
      riskAssessment: [
        { risk: "Regulatory compliance", probability: "High", impact: "High", mitigation: "Early legal consultation and compliance framework" },
        { risk: "Data security breaches", probability: "Medium", impact: "High", mitigation: "SOC 2 compliance and regular security audits" },
        { risk: "Competition from big tech", probability: "High", impact: "Medium", mitigation: "Focus on niche features and superior UX" },
        { risk: "Economic downturn affecting funding", probability: "Medium", impact: "High", mitigation: "Conservative cash management and multiple funding sources" },
      ],
      goToMarket: [
        "Content marketing focused on financial education",
        "Partnerships with financial influencers and YouTubers",
        "University partnerships for student acquisition",
        "Referral program with existing users",
        "App store optimization and paid acquisition",
      ],
      successMetrics: [
        "Monthly Active Users (MAU) growth",
        "Average Revenue Per User (ARPU)",
        "Customer Acquisition Cost (CAC)",
        "Net Promoter Score (NPS)",
        "Feature adoption rates",
        "Revenue from referral partners",
      ],
      strengths: [
        "Large and growing market demand",
        "AI/ML technology increasingly accessible",
        "Multiple monetization streams",
        "Strong network effects potential",
        "Regulatory tailwinds supporting fintech innovation",
      ],
      challenges: [
        "Heavy regulatory requirements (PCI DSS, SOC 2, state licensing)",
        "Customer acquisition costs in competitive market",
        "Building trust with sensitive financial data",
        "Integration complexity with multiple financial institutions",
        "Need for significant initial funding",
      ],
      nextSteps: [
        "Conduct user interviews with 100+ potential customers",
        "Build technical proof-of-concept with basic AI features",
        "Secure initial funding ($500K-1M seed round)",
        "Hire core technical team (CTO, 2 engineers)",
        "Establish partnerships with Plaid and banking APIs",
        "Develop compliance framework and legal structure",
        "Create detailed product roadmap and technical architecture",
      ],
    },
    "AI Health Symptom Checker": {
      executiveSummary: "An advanced AI-powered health assessment platform that analyzes user symptoms and provides preliminary health insights while connecting users with appropriate healthcare providers for follow-up care.",
      problemStatement: "65% of people delay seeking medical care due to uncertainty about symptom severity, and emergency rooms are overcrowded with non-emergency cases. Traditional symptom checkers lack accuracy and medical oversight.",
      solution: "AI-driven symptom analysis platform that provides accurate preliminary assessments, triages users to appropriate care levels, and integrates with healthcare provider networks for seamless referrals.",
      targetPersonas: [
        { name: "Health-Conscious Adults", age: "25-65", income: "$40-120K", pain: "Uncertainty about when to seek medical care" },
        { name: "Parents", age: "30-45", income: "$50-150K", pain: "Assessing children's symptoms urgency" },
        { name: "Elderly Population", age: "65+", income: "$30-80K", pain: "Managing multiple health conditions" },
      ],
      businessModel: {
        primary: "Subscription + Revenue Share",
        revenue: [
          "Consumer subscriptions ($14.99/month)",
          "Healthcare provider partnerships (10% revenue share)",
          "Enterprise health plans licensing",
          "Telemedicine platform integrations",
        ],
      },
      marketAnalysis: {
        totalMarket: "$659B",
        targetSegment: "$45B",
        growthRate: "28% CAGR",
        competition: "Medium-High",
      },
      technicalFeasibility: 75,
      marketDemand: 95,
      competitiveAdvantage: 70,
      techStack: [
        "Python/TensorFlow for AI models",
        "React Native for mobile apps",
        "Node.js/Express backend",
        "MongoDB for medical data",
        "HIPAA-compliant cloud infrastructure",
        "FHIR APIs for healthcare integration",
      ],
      competitors: [
        { name: "WebMD", strength: "Brand recognition", weakness: "Limited AI accuracy" },
        { name: "Ada Health", strength: "Medical backing", weakness: "Limited provider integration" },
        { name: "Babylon Health", strength: "Comprehensive platform", weakness: "Geographic limitations" },
      ],
      financialProjections: [
        { year: "Year 1", revenue: "$300K", users: "15K", expenses: "$1.2M" },
        { year: "Year 2", revenue: "$3.5M", users: "150K", expenses: "$5M" },
        { year: "Year 3", revenue: "$18M", users: "800K", expenses: "$20M" },
        { year: "Year 4", revenue: "$45M", users: "1.8M", expenses: "$35M" },
        { year: "Year 5", revenue: "$95M", users: "3.2M", expenses: "$65M" },
      ],
      keyMetrics: [
        { label: "Time to MVP", value: "8 months" },
        { label: "Initial Investment", value: "$2M - $3.5M" },
        { label: "Break-even Point", value: "Month 36" },
        { label: "Customer Acquisition Cost", value: "$45" },
        { label: "Lifetime Value", value: "$320" },
        { label: "Diagnostic Accuracy Target", value: "85%" },
      ],
      implementationTimeline: [
        { phase: "Phase 1", duration: "Months 1-8", tasks: "AI model development, regulatory compliance, MVP launch" },
        { phase: "Phase 2", duration: "Months 9-16", tasks: "Healthcare provider partnerships, mobile apps, advanced features" },
        { phase: "Phase 3", duration: "Months 17-24", tasks: "International expansion, enterprise sales, platform scaling" },
      ],
      resourceRequirements: [
        { role: "CEO/Medical Director", count: 1, cost: "$180K/year" },
        { role: "CTO", count: 1, cost: "$160K/year" },
        { role: "AI/ML Engineers", count: 3, cost: "$145K/year each" },
        { role: "Backend Engineers", count: 2, cost: "$130K/year each" },
        { role: "Medical Advisors", count: 2, cost: "$100K/year each" },
        { role: "Regulatory Specialist", count: 1, cost: "$120K/year" },
      ],
      riskAssessment: [
        { risk: "FDA regulatory approval", probability: "High", impact: "High", mitigation: "Early FDA consultation and medical advisory board" },
        { risk: "Medical liability concerns", probability: "Medium", impact: "High", mitigation: "Comprehensive insurance and clear disclaimers" },
        { risk: "AI accuracy and bias", probability: "Medium", impact: "High", mitigation: "Diverse training data and continuous model validation" },
      ],
      goToMarket: [
        "Partner with healthcare providers for pilot programs",
        "Medical conference presentations and publications",
        "Direct-to-consumer digital marketing",
        "Integration with existing health apps",
        "Employer health plan partnerships",
      ],
      successMetrics: [
        "Diagnostic accuracy rates",
        "User engagement and retention",
        "Healthcare provider adoption",
        "Cost savings for healthcare systems",
        "Patient satisfaction scores",
      ],
      strengths: [
        "Large unmet market need",
        "High potential for cost savings in healthcare",
        "Strong AI/ML capabilities available",
        "Clear path to monetization",
        "Potential for significant social impact",
      ],
      challenges: [
        "Complex regulatory environment",
        "High liability and compliance costs",
        "Need for medical expertise and validation",
        "Building trust with healthcare providers",
        "Ensuring AI model accuracy and bias prevention",
      ],
      nextSteps: [
        "Assemble medical advisory board",
        "Conduct regulatory feasibility study",
        "Develop proof-of-concept AI model",
        "Secure initial funding ($1M-2M seed)",
        "Begin FDA pre-submission process",
        "Establish healthcare provider partnerships",
        "Build core technical team",
      ],
    },
    "AI-Powered Personal Learning Assistant": {
      executiveSummary: "An intelligent learning platform that adapts to individual learning styles and pace, providing personalized curriculum and real-time feedback to maximize learning outcomes for students and professionals.",
      problemStatement: "Traditional education fails to adapt to individual learning needs, leading to poor retention rates (only 34% complete online courses) and suboptimal learning outcomes.",
      solution: "AI-driven learning assistant that creates personalized learning paths, adapts content difficulty in real-time, and provides immediate feedback to optimize learning efficiency.",
      targetPersonas: [
        { name: "Students", age: "16-25", income: "$0-20K", pain: "Struggling with standardized learning approaches" },
        { name: "Professionals", age: "25-45", income: "$50-120K", pain: "Need to upskill but lack time for traditional courses" },
        { name: "Corporate Training", age: "N/A", income: "Budgets $50K+", pain: "Low engagement and completion rates in training programs" },
      ],
      businessModel: {
        primary: "Subscription-based",
        revenue: [
          "Individual subscriptions ($19.99/month)",
          "Corporate training licenses ($50-200/employee/year)",
          "Content partnerships with educators",
          "Certification program fees",
        ],
      },
      marketAnalysis: {
        totalMarket: "$350B",
        targetSegment: "$25B",
        growthRate: "18% CAGR",
        competition: "Medium",
      },
      technicalFeasibility: 85,
      marketDemand: 92,
      competitiveAdvantage: 78,
      techStack: [
        "React/Next.js for web platform",
        "Python/Django for backend",
        "TensorFlow/PyTorch for AI models",
        "PostgreSQL for data storage",
        "WebRTC for video content",
        "AWS for cloud infrastructure",
      ],
      competitors: [
        { name: "Coursera", strength: "Content library", weakness: "Limited personalization" },
        { name: "Khan Academy", strength: "Free access", weakness: "Basic adaptive features" },
        { name: "Udemy", strength: "Course variety", weakness: "No adaptive learning" },
      ],
      financialProjections: [
        { year: "Year 1", revenue: "$150K", users: "5K", expenses: "$600K" },
        { year: "Year 2", revenue: "$1.8M", users: "50K", expenses: "$2.5M" },
        { year: "Year 3", revenue: "$8M", users: "200K", expenses: "$6M" },
        { year: "Year 4", revenue: "$20M", users: "450K", expenses: "$14M" },
        { year: "Year 5", revenue: "$50M", users: "800K", expenses: "$30M" },
      ],
      keyMetrics: [
        { label: "Time to MVP", value: "6 months" },
        { label: "Initial Investment", value: "$500K - $1M" },
        { label: "Break-even Point", value: "18 months" },
        { label: "Course Completion Rate", value: "75%" },
        { label: "Learning Efficiency Improvement", value: "40%" },
        { label: "Customer Satisfaction", value: "4.6/5" },
      ],
      implementationTimeline: [
        { phase: "Phase 1", duration: "Months 1-6", tasks: "MVP development and core AI features" },
        { phase: "Phase 2", duration: "Months 7-12", tasks: "Advanced personalization and content partnerships" },
        { phase: "Phase 3", duration: "Months 13-18", tasks: "Corporate platform and certification programs" },
      ],
      resourceRequirements: [
        { role: "Founder/CEO", count: 1, cost: "$120K/year" },
        { role: "CTO", count: 1, cost: "$140K/year" },
        { role: "AI Engineers", count: 2, cost: "$130K/year each" },
        { role: "Full-stack Engineers", count: 2, cost: "$115K/year each" },
        { role: "Content Manager", count: 1, cost: "$85K/year" },
        { role: "Education Specialist", count: 1, cost: "$95K/year" },
      ],
      riskAssessment: [
        { risk: "Content quality concerns", probability: "Medium", impact: "High", mitigation: "Partner with established educators and continuous quality monitoring" },
        { risk: "Low user engagement", probability: "Medium", impact: "Medium", mitigation: "Gamification and social learning features" },
        { risk: "AI bias in learning recommendations", probability: "Low", impact: "Medium", mitigation: "Diverse training data and bias testing" },
      ],
      goToMarket: [
        "Educational institution partnerships",
        "Content creator collaborations",
        "Corporate training sales outreach",
        "Freemium model for user acquisition",
        "Professional development conference presence",
      ],
      successMetrics: [
        "Learning completion rates",
        "User engagement time",
        "Knowledge retention scores",
        "Customer acquisition cost",
        "Revenue per user",
      ],
      strengths: [
        "Growing demand for personalized education",
        "AI technology readily available",
        "Scalable business model",
        "Large addressable market",
        "Clear value proposition for learners",
      ],
      challenges: [
        "Data privacy concerns in education",
        "Need for quality content partnerships",
        "User acquisition costs",
        "Technical complexity of adaptive learning",
        "Competition with established platforms",
      ],
      nextSteps: [
        "Conduct user research and validation",
        "Develop MVP with core AI features",
        "Secure content partnerships",
        "Build technical team",
        "Raise seed funding",
        "Launch pilot program with educational institutions",
        "Develop go-to-market strategy",
      ],
    },
  };

  return baseDetails[title as keyof typeof baseDetails] || {
    executiveSummary: "",
    problemStatement: "",
    solution: "",
    targetPersonas: [],
    businessModel: {
      primary: "TBD",
      revenue: [],
    },
    marketAnalysis: {
      totalMarket: "TBD",
      targetSegment: "TBD",
      growthRate: "TBD",
      competition: "TBD",
    },
    technicalFeasibility: 70,
    marketDemand: 75,
    competitiveAdvantage: 65,
    techStack: [],
    competitors: [],
    financialProjections: [],
    keyMetrics: [],
    implementationTimeline: [],
    resourceRequirements: [],
    riskAssessment: [],
    goToMarket: [],
    successMetrics: [],
    strengths: [],
    challenges: [],
    nextSteps: [],
  };
};

const IdeaDetail = () => {
  const { ideaTitle } = useParams<{ ideaTitle: string }>();
  const decodedTitle = ideaTitle ? decodeURIComponent(ideaTitle) : "";
  const details = getIdeaDetails(decodedTitle);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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

        <div className="space-y-8">
          {/* Executive Summary */}
          {details.executiveSummary && (
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Rocket className="w-6 h-6 text-primary" />
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">{details.executiveSummary}</p>
              </CardContent>
            </Card>
          )}

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {details.problemStatement && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    Problem Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">{details.problemStatement}</p>
                </CardContent>
              </Card>
            )}

            {details.solution && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-500" />
                    Solution Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">{details.solution}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Target Personas */}
          {details.targetPersonas && details.targetPersonas.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  Target Customer Personas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {details.targetPersonas.map((persona, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-muted/30">
                      <h4 className="font-semibold mb-2">{persona.name}</h4>
                      <div className="space-y-1 text-sm text-foreground/70">
                        <p><span className="font-medium">Age:</span> {persona.age}</p>
                        <p><span className="font-medium">Income:</span> {persona.income}</p>
                        <p><span className="font-medium">Pain Point:</span> {persona.pain}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Business Model */}
          {details.businessModel && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-green-500" />
                  Business Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-2">Primary Model</p>
                  <Badge variant="secondary" className="text-sm">{details.businessModel.primary}</Badge>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-2">Revenue Streams</p>
                  <ul className="space-y-1">
                    {details.businessModel.revenue.map((stream, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <DollarSign className="w-3 h-3 text-green-500" />
                        {stream}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Market Analysis & Feasibility */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          </div>

          {/* Technology Stack */}
          {details.techStack && details.techStack.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-500" />
                  Technology Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {details.techStack.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Competitive Analysis */}
          {details.competitors && details.competitors.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-500" />
                  Competitive Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {details.competitors.map((competitor, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{competitor.name}</h4>
                      <div className="space-y-1 text-sm">
                        <p><span className="text-green-600 font-medium">Strength:</span> {competitor.strength}</p>
                        <p><span className="text-red-600 font-medium">Weakness:</span> {competitor.weakness}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Financial Projections */}
          {details.financialProjections && details.financialProjections.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  5-Year Financial Projections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Year</th>
                        <th className="text-left py-2">Revenue</th>
                        <th className="text-left py-2">Users</th>
                        <th className="text-left py-2">Expenses</th>
                      </tr>
                    </thead>
                    <tbody>
                      {details.financialProjections.map((projection, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2 font-medium">{projection.year}</td>
                          <td className="py-2 text-green-600">{projection.revenue}</td>
                          <td className="py-2">{projection.users}</td>
                          <td className="py-2 text-red-600">{projection.expenses}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Key Business Metrics */}
          {details.keyMetrics && details.keyMetrics.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Key Business Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {details.keyMetrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-foreground/60 mb-1">{metric.label}</p>
                      <p className="font-semibold text-lg">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Implementation Timeline */}
          {details.implementationTimeline && details.implementationTimeline.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  Implementation Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {details.implementationTimeline.map((phase, index) => (
                    <div key={index} className="flex gap-4 p-4 border rounded-lg">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">
                        {phase.phase}
                      </Badge>
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1">{phase.duration}</p>
                        <p className="text-sm text-foreground/70">{phase.tasks}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Resource Requirements */}
          {details.resourceRequirements && details.resourceRequirements.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-orange-500" />
                  Resource Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {details.resourceRequirements.map((resource, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{resource.role}</p>
                        <p className="text-xs text-foreground/60">Count: {resource.count}</p>
                      </div>
                      <Badge variant="outline">{resource.cost}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Risk Assessment */}
          {details.riskAssessment && details.riskAssessment.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Risk Assessment & Mitigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {details.riskAssessment.map((risk, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-sm">{risk.risk}</h4>
                        <div className="flex gap-2">
                          <Badge variant={risk.probability === 'High' ? 'destructive' : risk.probability === 'Medium' ? 'secondary' : 'outline'} className="text-xs">
                            {risk.probability}
                          </Badge>
                          <Badge variant={risk.impact === 'High' ? 'destructive' : risk.impact === 'Medium' ? 'secondary' : 'outline'} className="text-xs">
                            {risk.impact} Impact
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-foreground/70">
                        <span className="font-medium">Mitigation:</span> {risk.mitigation}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Go-to-Market Strategy */}
          {details.goToMarket && details.goToMarket.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  Go-to-Market Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {details.goToMarket.map((strategy, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{strategy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Success Metrics */}
          {details.successMetrics && details.successMetrics.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-500" />
                  Success Metrics & KPIs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {details.successMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Strengths & Challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {details.strengths && details.strengths.length > 0 && (
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

            {details.challenges && details.challenges.length > 0 && (
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
          </div>

          {/* Next Steps */}
          {details.nextSteps && details.nextSteps.length > 0 && (
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Recommended Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {details.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0 bg-primary text-primary-foreground">
                        {index + 1}
                      </Badge>
                      <span className="text-sm font-medium">{step}</span>
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