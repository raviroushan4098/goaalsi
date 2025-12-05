import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sunshine rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-success rounded-full blur-3xl" />
      </div>

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px] lg:min-h-[600px] py-12 lg:py-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>New Season Sale Live</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight"
            >
              Shopping for the
              <span className="block text-sunshine mt-2">Super Lazy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-primary-foreground/80 mt-6 max-w-lg mx-auto lg:mx-0"
            >
              Why work hard when you can shop smart? Discover amazing deals, 
              lazy-approved products, and effortless delivery right to your couch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-sunshine text-accent-foreground font-bold hover:bg-sunshine-dark px-8 h-14 text-lg gap-2"
              >
                <Link to="/shop">
                  Start Shopping
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-14 text-lg gap-2"
              >
                <Link to="/shop?deals=true">
                  <Zap className="w-5 h-5" />
                  View Deals
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-8 mt-12"
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary-foreground">50K+</p>
                <p className="text-sm text-primary-foreground/70">Happy Lazies</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary-foreground">10K+</p>
                <p className="text-sm text-primary-foreground/70">Products</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary-foreground">24hr</p>
                <p className="text-sm text-primary-foreground/70">Delivery</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-sunshine rounded-2xl flex items-center justify-center shadow-elevated"
              >
                <span className="text-3xl">😴</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-success rounded-2xl flex items-center justify-center shadow-elevated"
              >
                <span className="text-4xl">🛋️</span>
              </motion.div>

              {/* Main Image Container */}
              <div className="w-full aspect-square bg-primary-foreground/10 rounded-3xl overflow-hidden backdrop-blur-sm border border-primary-foreground/20">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                  alt="Happy shopping"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Discount Badge */}
              <motion.div
                initial={{ rotate: -12 }}
                animate={{ rotate: [-12, -8, -12] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-8 -right-6 bg-card px-4 py-2 rounded-full shadow-elevated"
              >
                <span className="text-lg font-bold text-success">Up to 70% OFF</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
