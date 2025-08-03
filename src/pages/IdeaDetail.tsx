import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Target, DollarSign, Users, Clock, TrendingUp, Lightbulb, CheckCircle, AlertTriangle, Building, Code, Rocket, BarChart3, Calendar, Shield, Zap, User, Globe, ExternalLink, MessageSquare } from "lucide-react";
import { supabase } from '@/lib/supabase';
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { slugToTitle, normalizeTitle } from "@/lib/utils";

// Helper function to create ChatGPT prompt
const createChatGPTPrompt = (idea: any) => {
  const prompt = `Help me develop this startup idea:

Title: ${idea.title}

Description: ${idea.description}

Target Market: ${idea.targetMarket}

Revenue Model: ${idea.revenueModel}

Key Strengths: ${idea.keyStrengths?.join(', ') || 'Not specified'}

Key Challenges: ${idea.keyChallenges?.join(', ') || 'Not specified'}

Please provide detailed guidance on:
1. Market validation strategies
2. MVP development approach
3. Go-to-market tactics
4. Potential funding sources
5. Risk mitigation strategies

I'd like specific, actionable advice for this startup concept.`;
  
  return encodeURIComponent(prompt);
};

// IdeaDetail Component
const IdeaDetail = () => {
  const { title: slug } = useParams<{ title: string }>();
  const [ideaData, setIdeaData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchIdeaData();
  }, [slug]);
  
  const fetchIdeaData = async () => {
    if (!slug || !supabase) {
      setError('Unable to fetch data');
      setLoading(false);
      return;
    }

    try {
      // Convert SEO-friendly slug back to title for database lookup
      const reconstructedTitle = slugToTitle(slug);
      
      // Try exact match first
      let { data, error: fetchError } = await supabase
        .from('startup_ideas')
        .select('*')
        .eq('title', reconstructedTitle)
        .single();
      
      // If exact match fails, try multiple fuzzy matching strategies
      if (fetchError && fetchError.code === 'PGRST116') {
        // Strategy 1: Try with hyphens instead of spaces
        const hyphenatedTitle = reconstructedTitle.replace(/ /g, '-');
        let { data: hyphenData, error: hyphenError } = await supabase
          .from('startup_ideas')
          .select('*')
          .eq('title', hyphenatedTitle)
          .single();
        
        if (!hyphenError) {
          data = hyphenData;
          fetchError = null;
        } else {
          // Strategy 2: Try ILIKE with word-based matching
          const words = reconstructedTitle.split(' ').filter(word => word.length > 2);
          const likePattern = words.map(word => `%${word}%`).join('');
          
          let { data: fuzzyData, error: fuzzyError } = await supabase
            .from('startup_ideas')
            .select('*')
            .ilike('title', likePattern)
            .limit(1);
          
          if (fuzzyData && fuzzyData.length > 0) {
            data = fuzzyData[0];
            fetchError = null;
          } else {
            // Strategy 3: Try partial word matching with original slug
            const slugWords = slug.split('-').filter(word => word.length > 2);
            const slugPattern = slugWords.map(word => `%${word}%`).join('');
            
            let { data: slugData, error: slugError } = await supabase
              .from('startup_ideas')
              .select('*')
              .ilike('title', slugPattern)
              .limit(1);
            
            if (slugData && slugData.length > 0) {
              data = slugData[0];
              fetchError = null;
            } else {
              fetchError = fuzzyError;
            }
          }
        }
      }

      if (fetchError) {
        console.error('Error fetching idea:', fetchError);
        console.error('Attempted slug:', slug);
        console.error('Attempted title:', reconstructedTitle);
        setError('Failed to fetch startup idea data');
      } else {
        setIdeaData(data);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading startup idea...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !ideaData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error || 'Idea not found'}</p>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Extract data from webhook_data if available
  const webhookData = ideaData.webhook_data || {};
  const details = {
    title: ideaData.title,
    description: ideaData.description,
    executiveSummary: webhookData.executive_summary || ideaData.description,
    problemStatement: webhookData.problem_statement || ideaData.description,
    solutionOverview: webhookData.solution_overview,
    targetMarket: ideaData.target_market,
    category: ideaData.category,
    revenueModel: ideaData.revenue_model,
    marketSize: ideaData.market_size,
    timeToMarket: ideaData.time_to_market,
    difficulty: ideaData.difficulty,
    featured: ideaData.featured,
    businessModel: webhookData.business_model,
    marketAnalysis: webhookData.market_analysis,
    technologyStack: webhookData.technology_stack,
    feasibilityAssessment: webhookData.feasibility_assessment,
    keyBusinessMetrics: webhookData.key_business_metrics,
    financialProjections: ideaData.financial_projections || webhookData.financial_projections,
    resourceRequirements: ideaData.resource_requirements || webhookData.resource_requirements,
    keyStrengths: ideaData.key_strengths || webhookData.key_strengths,
    keyChallenges: ideaData.key_challenges || webhookData.key_challenges,
    goToMarketStrategy: ideaData.go_to_market_strategy || webhookData.go_to_market_strategy,
    successMetrics: ideaData.success_metrics_kpis || webhookData.success_metrics_kpis,
    riskAssessment: ideaData.risk_assessment_and_mitigation || webhookData.risk_assessment_and_mitigation,
    recommendedNextSteps: ideaData.recommended_next_steps || webhookData.recommended_next_steps,
    createdAt: ideaData.created_at,
    updatedAt: ideaData.updated_at
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <div className="pt-16 pb-8 px-4 bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-32 h-1 bg-primary rotate-45 opacity-60" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-1 bg-primary -rotate-45 opacity-60" />
        <div className="container mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Ideas
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="font-bebas text-4xl md:text-6xl tracking-wider uppercase text-foreground mb-4 transform -skew-x-1">
              {details.title}
            </h1>
            <p className="font-oswald text-lg text-muted-foreground mb-6 leading-relaxed">
              {details.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 font-bold">
                {details.category?.toUpperCase() || 'STARTUP'}
              </Badge>
              <Badge className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                {details.difficulty?.toUpperCase() || 'MEDIUM'}
              </Badge>
              <Badge className="bg-accent/10 text-accent-foreground border-accent/20">
                {details.marketSize || 'Market Size TBD'}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Executive Summary */}
            {details.executiveSummary && (
              <Card className="border-2 border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="font-bebas text-2xl tracking-wider uppercase flex items-center">
                    <Lightbulb className="w-6 h-6 mr-3 text-primary" />
                    Executive Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-oswald text-foreground/80 leading-relaxed">
                    {details.executiveSummary}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Problem Statement */}
            {details.problemStatement && details.problemStatement !== details.executiveSummary && (
              <Card className="border-2 border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="font-bebas text-2xl tracking-wider uppercase flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3 text-amber-500" />
                    Problem Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-oswald text-foreground/80 leading-relaxed">
                    {details.problemStatement}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Solution Overview */}
            {details.solutionOverview && (
              <Card className="border-2 border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="font-bebas text-2xl tracking-wider uppercase flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                    Solution Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-oswald text-foreground/80 leading-relaxed">
                    {details.solutionOverview}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Key Strengths */}
            {details.keyStrengths && Array.isArray(details.keyStrengths) && details.keyStrengths.length > 0 && (
              <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
                <CardHeader>
                  <CardTitle className="font-bebas text-2xl tracking-wider uppercase flex items-center text-green-700">
                    <TrendingUp className="w-6 h-6 mr-3" />
                    Key Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="font-oswald text-foreground/80 space-y-2">
                    {details.keyStrengths.map((strength: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Key Challenges */}
            {details.keyChallenges && Array.isArray(details.keyChallenges) && details.keyChallenges.length > 0 && (
              <Card className="border-2 border-amber-200 hover:border-amber-400 transition-colors">
                <CardHeader>
                  <CardTitle className="font-bebas text-2xl tracking-wider uppercase flex items-center text-amber-700">
                    <AlertTriangle className="w-6 h-6 mr-3" />
                    Key Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="font-oswald text-foreground/80 space-y-2">
                    {details.keyChallenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="w-4 h-4 mr-2 mt-1 text-amber-500 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="font-bebas text-2xl tracking-wider uppercase text-primary">
                  Take Action
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bebas text-lg tracking-wider transform -skew-x-3 transition-all duration-300 shadow-lg relative group overflow-hidden"
                    size="lg"
                    onClick={() => {
                      const chatGPTUrl = `https://chat.openai.com/?q=${createChatGPTPrompt(details)}`;
                      window.open(chatGPTUrl, '_blank');
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <MessageSquare className="w-5 h-5 mr-2" />
                    <span className="relative">OPEN IN CHATGPT</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="font-bebas text-xl tracking-wider uppercase flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-oswald text-sm text-muted-foreground">Target Market</span>
                  <span className="font-bold text-sm">{details.targetMarket || 'TBD'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-oswald text-sm text-muted-foreground">Revenue Model</span>
                  <span className="font-bold text-sm">{details.revenueModel || 'TBD'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-oswald text-sm text-muted-foreground">Market Size</span>
                  <span className="font-bold text-sm">{details.marketSize || 'TBD'}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-oswald text-sm text-muted-foreground">Time to Market</span>
                  <span className="font-bold text-sm">{details.timeToMarket || 'TBD'}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;
