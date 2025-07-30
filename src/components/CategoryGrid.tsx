import { Card, CardContent } from "@/components/ui/card";
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
    color: "text-blue-400",
    bgColor: "bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    count: 38,
    color: "text-green-400",
    bgColor: "bg-green-500/10 border-green-500/20",
  },
  {
    name: "HealthTech",
    icon: Heart,
    count: 32,
    color: "text-red-400",
    bgColor: "bg-red-500/10 border-red-500/20",
  },
  {
    name: "EdTech",
    icon: GraduationCap,
    count: 28,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10 border-purple-500/20",
  },
  {
    name: "Sustainability",
    icon: Leaf,
    count: 25,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    name: "FinTech",
    icon: TrendingUp,
    count: 42,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    name: "Cybersecurity",
    icon: Shield,
    count: 22,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10 border-orange-500/20",
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    count: 18,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10 border-pink-500/20",
  },
  {
    name: "Mobile Apps",
    icon: Smartphone,
    count: 52,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    name: "Food & Beverage",
    icon: Utensils,
    count: 19,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10 border-amber-500/20",
  },
  {
    name: "Transportation",
    icon: Car,
    count: 15,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    name: "Real Estate",
    icon: Home,
    count: 21,
    color: "text-teal-400",
    bgColor: "bg-teal-500/10 border-teal-500/20",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore by Category
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Browse startup ideas across different industries and find the perfect 
            opportunity that matches your interests and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className={`${category.bgColor} hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-background/50">
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-foreground/60">
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