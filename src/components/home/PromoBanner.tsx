import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PromoBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  bgGradient?: string;
  reverse?: boolean;
}

const PromoBanner = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
  bgGradient = "bg-gradient-hero",
  reverse = false,
}: PromoBannerProps) => {
  return (
    <section className={`${bgGradient} overflow-hidden`}>
      <div className="container-main">
        <div
          className={`grid md:grid-cols-2 gap-8 items-center py-12 md:py-16 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-center md:text-left ${reverse ? "md:order-2" : ""}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
              {title}
            </h2>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              {subtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-sunshine text-accent-foreground font-bold hover:bg-sunshine-dark gap-2"
            >
              <Link to={ctaLink}>
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${reverse ? "md:order-1" : ""}`}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sunshine/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-foreground/10 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
