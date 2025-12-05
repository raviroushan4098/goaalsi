import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "@/components/products/ProductCard";

interface ProductSliderProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
  bgColor?: string;
}

const ProductSlider = ({
  title,
  subtitle,
  products,
  viewAllLink = "/shop",
  bgColor = "bg-card",
}: ProductSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className={`section-padding ${bgColor}`}>
      <div className="container-main">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex border-border hover:border-goaalsi-blue hover:text-goaalsi-blue"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex border-border hover:border-goaalsi-blue hover:text-goaalsi-blue"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-goaalsi-blue hover:text-goaalsi-blue-dark gap-1"
            >
              <Link to={viewAllLink}>
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Products Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="min-w-[220px] sm:min-w-[260px] md:min-w-[280px]"
            >
              <ProductCard product={product} index={0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
