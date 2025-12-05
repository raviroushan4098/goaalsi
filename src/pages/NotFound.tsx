import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Page Not Found | GoAalsi</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="container-main py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* Animated Emoji */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-8xl mb-6"
          >
            😴
          </motion.div>

          {/* 404 Text */}
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-7xl md:text-9xl font-extrabold text-goaalsi-blue mb-4"
          >
            404
          </motion.h1>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Even We Got Lazy!
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            Looks like we were too lazy to create this page, or it decided to take a nap somewhere else. 
            Let's get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-goaalsi-blue hover:bg-goaalsi-blue-dark gap-2"
            >
              <Link to="/">
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Link to="/shop">
                <Search className="w-5 h-5" />
                Browse Products
              </Link>
            </Button>
          </div>

          {/* Back Link */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 mt-8 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back to previous page
          </button>

          {/* Fun Suggestions */}
          <div className="mt-12 p-6 bg-secondary/50 rounded-2xl">
            <p className="font-medium text-foreground mb-4">
              While you're here, why not explore:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/shop?deals=true"
                className="px-4 py-2 rounded-full bg-sunshine/20 text-sunshine-dark text-sm font-medium hover:bg-sunshine/30 transition-colors"
              >
                Today's Deals
              </Link>
              <Link
                to="/category/electronics"
                className="px-4 py-2 rounded-full bg-goaalsi-blue/10 text-goaalsi-blue text-sm font-medium hover:bg-goaalsi-blue/20 transition-colors"
              >
                Electronics
              </Link>
              <Link
                to="/category/fashion"
                className="px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium hover:bg-success/20 transition-colors"
              >
                Fashion
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
