import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { id, name, slug, price, mrp, discount, rating, reviews, image, inStock, isNew, isBestSeller } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group card-elevated card-hover overflow-hidden"
    >
      <Link to={`/product/${slug}`}>
        {/* Image Container */}
        <div className="relative aspect-square bg-secondary/50 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discount > 0 && (
              <Badge className="bg-success text-primary-foreground font-semibold">
                {discount}% OFF
              </Badge>
            )}
            {isNew && (
              <Badge className="bg-goaalsi-blue text-primary-foreground">
                NEW
              </Badge>
            )}
            {isBestSeller && (
              <Badge className="bg-sunshine text-accent-foreground">
                BESTSELLER
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-card transition-all shadow-soft">
            <Heart className="w-5 h-5" />
          </button>

          {/* Quick Add Button */}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button className="w-full bg-goaalsi-blue text-primary-foreground hover:bg-goaalsi-blue-dark gap-2">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${slug}`}>
          <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-goaalsi-blue transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-success/10 text-success text-sm font-medium">
            <span>{rating}</span>
            <Star className="w-3 h-3 fill-current" />
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-3">
          <span className="text-lg font-bold text-foreground">₹{price.toLocaleString()}</span>
          {mrp > price && (
            <>
              <span className="text-sm text-muted-foreground line-through">₹{mrp.toLocaleString()}</span>
              <span className="text-sm font-medium text-success">{discount}% off</span>
            </>
          )}
        </div>

        {!inStock && (
          <p className="text-sm text-destructive mt-2">Out of Stock</p>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
