import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
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

const categories = [
  {
    name: "AI & Technology",
    icon: Code,
    count: 45,
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    count: 38,
  },
  {
    name: "HealthTech",
    icon: Heart,
    count: 32,
  },
  {
    name: "EdTech",
    icon: GraduationCap,
    count: 28,
  },
  {
    name: "Sustainability",
    icon: Leaf,
    count: 25,
  },
  {
    name: "FinTech",
    icon: TrendingUp,
    count: 42,
  },
  {
    name: "Cybersecurity",
    icon: Shield,
    count: 22,
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    count: 18,
  },
  {
    name: "Mobile Apps",
    icon: Smartphone,
    count: 52,
  },
  {
    name: "Food & Beverage",
    icon: Utensils,
    count: 19,
  },
  {
    name: "Transportation",
    icon: Car,
    count: 15,
  },
  {
    name: "Real Estate",
    icon: Home,
    count: 21,
  },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <section id="explore-categories" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-accent" />
      <div className="absolute top-1/3 left-[20%] w-80 h-80 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-[20%] w-60 h-60 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Explore by 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Browse startup opportunities across diverse industries and discover 
            the perfect match for your expertise and passion.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className="border-border/50 hover:border-primary/30 hover:shadow-elevated transition-bounce cursor-pointer group relative overflow-hidden bg-gradient-glass backdrop-blur-sm"
                onClick={() => {
                  navigate(`/category/${encodeURIComponent(category.name)}`);
                }}
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <CardContent className="p-6 text-center relative">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-bounce">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold mb-2 text-foreground group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground font-medium">
                    {category.count} ideas
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