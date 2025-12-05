import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  ShoppingCart,
  Zap,
  Truck,
  Shield,
  RotateCcw,
  Minus,
  Plus,
  ChevronRight,
  Share2,
} from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductSlider from "@/components/home/ProductSlider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trendingProducts } from "@/data/mockProducts";

const productImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
  "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&q=80",
];

const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Navy", value: "#1a365d" },
  { name: "Gray", value: "#718096" },
];

const ProductDetail = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data
  const product = {
    name: "Premium Wireless Noise Cancelling Headphones",
    price: 2999,
    mrp: 7999,
    discount: 63,
    rating: 4.5,
    reviews: 2341,
    inStock: true,
    seller: "LazyTech Official",
  };

  return (
    <MainLayout>
      <Helmet>
        <title>{product.name} | GoAalsi</title>
        <meta
          name="description"
          content={`Buy ${product.name} at the best price. ₹${product.price} (${product.discount}% off). Free delivery available.`}
        />
      </Helmet>

      <div className="container-main py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-card rounded-2xl overflow-hidden card-elevated"
            >
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    selectedImage === index
                      ? "border-goaalsi-blue"
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {product.name}
                </h1>
                <div className="flex gap-2 shrink-0">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={isWishlisted ? "text-destructive border-destructive" : ""}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-success/10 text-success">
                  <span className="font-semibold">{product.rating}</span>
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-muted-foreground">
                  {product.reviews.toLocaleString()} Reviews
                </span>
                <Badge className="bg-sunshine text-accent-foreground">Bestseller</Badge>
              </div>
            </div>

            {/* Price */}
            <div className="bg-secondary/50 rounded-xl p-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ₹{product.mrp.toLocaleString()}
                </span>
                <Badge className="bg-success text-primary-foreground">
                  {product.discount}% OFF
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Inclusive of all taxes
              </p>
            </div>

            {/* Offers */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Available Offers</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3 text-sm">
                  <Badge variant="outline" className="shrink-0 text-success border-success">
                    Offer
                  </Badge>
                  <span className="text-muted-foreground">
                    Bank Offer: 10% off on HDFC Bank Cards
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Badge variant="outline" className="shrink-0 text-success border-success">
                    Offer
                  </Badge>
                  <span className="text-muted-foreground">
                    Extra ₹100 off on first GoAalsi App order
                  </span>
                </div>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Color: <span className="font-normal text-muted-foreground">{selectedColor}</span>
              </h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? "border-goaalsi-blue ring-2 ring-goaalsi-blue/30"
                        : "border-border hover:border-muted-foreground"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Size: <span className="font-normal text-muted-foreground">{selectedSize}</span>
              </h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border font-medium transition-all ${
                      selectedSize === size
                        ? "border-goaalsi-blue bg-goaalsi-blue text-primary-foreground"
                        : "border-border text-foreground hover:border-goaalsi-blue"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                size="lg"
                className="flex-1 bg-goaalsi-blue hover:bg-goaalsi-blue-dark gap-2 h-14 text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-sunshine hover:bg-sunshine-dark text-accent-foreground gap-2 h-14 text-lg"
              >
                <Zap className="w-5 h-5" />
                Buy Now
              </Button>
            </div>

            {/* Delivery & Services */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <Truck className="w-6 h-6 mx-auto text-goaalsi-blue mb-2" />
                <p className="text-xs text-muted-foreground">Free Delivery</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <RotateCcw className="w-6 h-6 mx-auto text-goaalsi-blue mb-2" />
                <p className="text-xs text-muted-foreground">7 Day Returns</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <Shield className="w-6 h-6 mx-auto text-goaalsi-blue mb-2" />
                <p className="text-xs text-muted-foreground">1 Year Warranty</p>
              </div>
            </div>

            {/* Seller Info */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-border">
              <div>
                <p className="text-sm text-muted-foreground">Sold by</p>
                <p className="font-semibold text-foreground">{product.seller}</p>
              </div>
              <Badge variant="outline" className="text-success border-success">
                4.8 ★ Seller Rating
              </Badge>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-12 card-elevated p-6 md:p-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Product Details</h2>
          <div className="prose prose-sm text-muted-foreground max-w-none">
            <p>
              Experience premium sound quality with our wireless noise-cancelling headphones. 
              Featuring advanced ANC technology, 30-hour battery life, and ultra-comfortable 
              ear cushions for all-day wear.
            </p>
            <ul className="mt-4 space-y-2">
              <li>Active Noise Cancellation with Transparency Mode</li>
              <li>30 hours battery life (ANC on), 40 hours (ANC off)</li>
              <li>Hi-Res Audio certified with LDAC support</li>
              <li>Multipoint connection - connect 2 devices simultaneously</li>
              <li>Touch controls and voice assistant support</li>
              <li>Premium protein leather ear cushions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <ProductSlider
        title="Similar Products"
        subtitle="You might also like these"
        products={trendingProducts}
        viewAllLink="/shop"
      />
    </MainLayout>
  );
};

export default ProductDetail;
