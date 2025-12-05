import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Smartphone,
  Shirt,
  Home,
  Sparkles,
  Watch,
  Laptop,
  Gift,
  Utensils,
  Baby,
  Dumbbell,
} from "lucide-react";

const categories = [
  { name: "Mobiles", icon: Smartphone, slug: "mobiles", color: "bg-blue-100 text-blue-600" },
  { name: "Fashion", icon: Shirt, slug: "fashion", color: "bg-pink-100 text-pink-600" },
  { name: "Home", icon: Home, slug: "home", color: "bg-amber-100 text-amber-600" },
  { name: "Beauty", icon: Sparkles, slug: "beauty", color: "bg-purple-100 text-purple-600" },
  { name: "Watches", icon: Watch, slug: "watches", color: "bg-slate-100 text-slate-600" },
  { name: "Electronics", icon: Laptop, slug: "electronics", color: "bg-cyan-100 text-cyan-600" },
  { name: "Gifts", icon: Gift, slug: "gifts", color: "bg-red-100 text-red-600" },
  { name: "Kitchen", icon: Utensils, slug: "kitchen", color: "bg-orange-100 text-orange-600" },
  { name: "Kids", icon: Baby, slug: "kids", color: "bg-green-100 text-green-600" },
  { name: "Sports", icon: Dumbbell, slug: "sports", color: "bg-indigo-100 text-indigo-600" },
];

const CategoryStrip = () => {
  return (
    <section className="bg-card py-6 border-b border-border">
      <div className="container-main">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/category/${category.slug}`}
                className="flex flex-col items-center gap-2 min-w-[80px] group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:shadow-card`}
                >
                  <category.icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {category.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryStrip;
