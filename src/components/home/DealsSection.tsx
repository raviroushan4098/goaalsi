import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "@/components/products/ProductCard";

const dealProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Noise Cancelling Headphones",
    slug: "wireless-headphones",
    price: 2999,
    mrp: 7999,
    discount: 63,
    rating: 4.5,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    category: "Electronics",
    inStock: true,
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Premium Cotton T-Shirt Pack of 3",
    slug: "cotton-tshirt-pack",
    price: 799,
    mrp: 1999,
    discount: 60,
    rating: 4.3,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    category: "Fashion",
    inStock: true,
    isNew: true,
  },
  {
    id: "3",
    name: "Smart Watch with Heart Rate Monitor",
    slug: "smart-watch-hr",
    price: 1499,
    mrp: 3999,
    discount: 63,
    rating: 4.4,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    category: "Electronics",
    inStock: true,
  },
  {
    id: "4",
    name: "Cozy Fleece Blanket - Extra Large",
    slug: "fleece-blanket-xl",
    price: 599,
    mrp: 1299,
    discount: 54,
    rating: 4.7,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    category: "Home",
    inStock: true,
    isBestSeller: true,
  },
];

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 23,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="w-12 h-12 rounded-xl bg-gradient-success flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-primary-foreground" />
            </motion.div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Deals of the Day
              </h2>
              <p className="text-muted-foreground">
                Grab these deals before they're gone!
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Ends in:</span>
            <div className="flex gap-2">
              <div className="bg-foreground text-card px-3 py-2 rounded-lg">
                <span className="text-lg font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">:</span>
              <div className="bg-foreground text-card px-3 py-2 rounded-lg">
                <span className="text-lg font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">:</span>
              <div className="bg-foreground text-card px-3 py-2 rounded-lg">
                <span className="text-lg font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {dealProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-goaalsi-blue text-goaalsi-blue hover:bg-goaalsi-blue hover:text-primary-foreground gap-2"
          >
            <Link to="/shop?deals=true">
              View All Deals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
