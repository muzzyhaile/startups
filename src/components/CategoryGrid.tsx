import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { 
  Smartphone, 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Leaf, 
  Shield, 
  Gamepad2,
  TrendingUp,
  Code,
  Utensils,
  Car,
  Home
} from "lucide-react";

// Category definitions with icons - counts will be fetched from database
const categoryDefinitions = [
  {
    name: "AI & Technology",
    icon: Code,
    keywords: ["AI", "Technology", "Tech", "Machine Learning", "Artificial Intelligence", "EdTech"]
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    keywords: ["E-commerce", "Ecommerce", "Shopping", "Retail", "Commerce"]
  },
  {
    name: "HealthTech",
    icon: Heart,
    keywords: ["Health", "HealthTech", "Medical", "Healthcare", "Wellness"]
  },
  {
    name: "FinTech",
    icon: TrendingUp,
    keywords: ["FinTech", "Finance", "Financial", "Banking", "Payment", "Dispute"]
  },
  {
    name: "Business Operations",
    icon: TrendingUp,
    keywords: ["Business", "Operations", "Management", "Automation"]
  },
  {
    name: "Education",
    icon: GraduationCap,
    keywords: ["Education", "Learning", "School", "Training"]
  },
  {
    name: "Search & Data",
    icon: Code,
    keywords: ["Search", "Data", "Platform", "Analytics"]
  },
  {
    name: "Reviews & Marketing",
    icon: Smartphone,
    keywords: ["Review", "Marketing", "Collection", "Voice"]
  },
];

const CategoryGrid = () => {
  const navigate = useNavigate();
  const [categoriesWithCounts, setCategoriesWithCounts] = useState(categoryDefinitions.map(cat => ({ ...cat, count: 0 })));

  // Fetch real category counts from database
  useEffect(() => {
    const fetchCategoryCounts = async () => {
      try {
        const { data, error } = await supabase
          .from('startup_ideas')
          .select('category');

        if (error) {

          return;
        }

        // Count categories and map to our predefined categories
        const categoryCounts: Record<string, number> = {};
        
        data?.forEach(idea => {
          const category = idea.category;
          if (category) {
            // Find matching category definition based on keywords
            const matchingCategory = categoryDefinitions.find(catDef => 
              catDef.keywords.some(keyword => 
                category.toLowerCase().includes(keyword.toLowerCase())
              )
            );
            
            if (matchingCategory) {
              categoryCounts[matchingCategory.name] = (categoryCounts[matchingCategory.name] || 0) + 1;
            }
          }
        });

        // Update categories with real counts
        const updatedCategories = categoryDefinitions.map(catDef => ({
          ...catDef,
          count: categoryCounts[catDef.name] || 0
        }));

        setCategoriesWithCounts(updatedCategories);
      } catch (error) {

      }
    };

    fetchCategoryCounts();
  }, []);

  return (
    <section id="explore-categories" className="py-20 px-4 relative overflow-hidden bg-gradient-hero film-grain">
      {/* Yellow geometric frame */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary" />
      <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-40" />
      <div className="absolute top-0 right-0 w-2 h-full bg-primary opacity-40" />
      
      {/* Diagonal accent lines */}
      <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-primary rotate-45 opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-1 bg-primary -rotate-45 opacity-60" />
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-7xl mb-6 text-foreground tracking-wider uppercase">
            EXPLORE
            <span className="text-primary neon-glow block"> CATEGORIES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-oswald tracking-wide">
            DISCOVER IDEAS • FIND YOUR NICHE • START BUILDING
          </p>
          
          {/* Film strip decoration */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-2 h-6 bg-primary/30 border border-primary/50" />
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoriesWithCounts.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className="border-2 border-border hover:border-primary transition-cinematic cursor-pointer group relative overflow-hidden bg-card film-grain"
                onClick={() => {
                  navigate(`/category/${encodeURIComponent(category.name)}`);
                }}
              >
                {/* Yellow accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Kill Bill stripe effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <CardContent className="p-6 text-center relative">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-primary transform -skew-x-6 flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-cinematic">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="font-bebas text-lg text-foreground group-hover:text-primary transition-cinematic tracking-wider uppercase mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                    {category.count} IDEAS
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;