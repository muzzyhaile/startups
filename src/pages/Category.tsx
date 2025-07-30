import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import StartupIdeaCard from "@/components/StartupIdeaCard";
import { Button } from "@/components/ui/button";

// Extended mock data organized by category
const categoryIdeas = {
  "AI & Technology": [
    {
      title: "AI-Powered Personal Learning Assistant",
      description: "An intelligent platform that creates personalized learning paths by analyzing individual learning patterns, preferences, and goals. Uses advanced AI to adapt content difficulty and teaching methods in real-time.",
      category: "AI & Technology",
      targetMarket: "Professionals & Students",
      revenueModel: "Subscription",
      marketSize: "$350B",
      timeToMarket: "8-12 months",
      difficulty: "Medium" as const,
    },
    {
      title: "AI Code Review Assistant",
      description: "An intelligent code review tool that automatically detects bugs, security vulnerabilities, and suggests optimizations using machine learning trained on millions of code repositories.",
      category: "AI & Technology",
      targetMarket: "Software Developers",
      revenueModel: "Subscription",
      marketSize: "$25B",
      timeToMarket: "6-9 months",
      difficulty: "Hard" as const,
    },
    {
      title: "AI-Powered Content Moderation",
      description: "Advanced AI system that can detect and moderate harmful content across multiple platforms including text, images, and videos with 99.5% accuracy.",
      category: "AI & Technology",
      targetMarket: "Social Media Platforms",
      revenueModel: "B2B SaaS",
      marketSize: "$12B",
      timeToMarket: "12-15 months",
      difficulty: "Hard" as const,
    },
  ],
  "E-commerce": [
    {
      title: "Virtual Try-On Platform",
      description: "AR-powered platform allowing customers to virtually try on clothes, accessories, and makeup before purchasing, reducing return rates by 60%.",
      category: "E-commerce",
      targetMarket: "Fashion Retailers",
      revenueModel: "Licensing",
      marketSize: "$180B",
      timeToMarket: "10-14 months",
      difficulty: "Medium" as const,
    },
    {
      title: "Sustainable Shopping Assistant",
      description: "Browser extension that rates products based on sustainability factors and suggests eco-friendly alternatives during online shopping.",
      category: "E-commerce",
      targetMarket: "Conscious Consumers",
      revenueModel: "Affiliate Commission",
      marketSize: "$45B",
      timeToMarket: "4-6 months",
      difficulty: "Easy" as const,
    },
  ],
  "HealthTech": [
    {
      title: "Remote Team Wellness Platform",
      description: "A comprehensive wellness platform designed specifically for remote teams, featuring virtual fitness classes, mental health resources, and team building activities with integrated analytics.",
      category: "HealthTech",
      targetMarket: "Remote Companies",
      revenueModel: "B2B SaaS",
      marketSize: "$80B",
      timeToMarket: "6-9 months",
      difficulty: "Easy" as const,
    },
    {
      title: "AI Health Symptom Checker",
      description: "Advanced AI system that analyzes symptoms and provides preliminary health assessments, connecting users with appropriate healthcare providers.",
      category: "HealthTech",
      targetMarket: "Healthcare Consumers",
      revenueModel: "Subscription",
      marketSize: "$120B",
      timeToMarket: "18-24 months",
      difficulty: "Hard" as const,
    },
  ],
  "EdTech": [
    {
      title: "VR Language Immersion",
      description: "Virtual reality platform that creates immersive language learning experiences by simulating real-world scenarios and conversations.",
      category: "EdTech",
      targetMarket: "Language Learners",
      revenueModel: "Subscription",
      marketSize: "$60B",
      timeToMarket: "12-16 months",
      difficulty: "Medium" as const,
    },
  ],
  // Add more categories as needed
};

const Category = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const decodedCategoryName = categoryName ? decodeURIComponent(categoryName) : "";
  const ideas = categoryIdeas[decodedCategoryName as keyof typeof categoryIdeas] || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">
            {decodedCategoryName} Ideas
          </h1>
          <p className="text-foreground/70 text-lg">
            Explore innovative startup concepts in the {decodedCategoryName.toLowerCase()} space.
          </p>
        </div>

        {ideas.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {ideas.map((idea, index) => (
              <StartupIdeaCard
                key={index}
                {...idea}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-foreground/60">
              Ideas for {decodedCategoryName} are being curated. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;