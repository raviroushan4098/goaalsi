import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Trash2, Minus, Plus, Tag, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import EmptyState from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  mrp: number;
  quantity: number;
  size?: string;
  color?: string;
  seller: string;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Premium Wireless Noise Cancelling Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
    price: 2999,
    mrp: 7999,
    quantity: 1,
    color: "Black",
    seller: "LazyTech Official",
  },
  {
    id: "2",
    name: "Cozy Fleece Blanket - Extra Large",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80",
    price: 599,
    mrp: 1299,
    quantity: 2,
    size: "XL",
    color: "Gray",
    seller: "Home Comfort Store",
  },
  {
    id: "3",
    name: "Memory Foam Pillow - Cervical Support",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=200&q=80",
    price: 699,
    mrp: 1499,
    quantity: 1,
    seller: "Sleep Better Co.",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalMrp = cartItems.reduce((sum, item) => sum + item.mrp * item.quantity, 0);
  const discount = totalMrp - subtotal;
  const deliveryFee = subtotal > 499 ? 0 : 40;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <MainLayout>
        <Helmet>
          <title>Cart | GoAalsi</title>
        </Helmet>
        <div className="container-main py-12">
          <EmptyState
            emoji="😴"
            title="Your lazy cart is empty"
            description="Looks like you haven't added anything yet. Let's find something awesome for you!"
            actionText="Start Shopping"
            actionLink="/shop"
          />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Helmet>
        <title>Cart ({cartItems.length} items) | GoAalsi</title>
        <meta name="description" content="Review your shopping cart and proceed to checkout." />
      </Helmet>

      <div className="container-main py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Cart</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Shopping Cart <span className="text-muted-foreground">({cartItems.length} items)</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-4 md:p-6"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-secondary">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold text-foreground line-clamp-2 hover:text-goaalsi-blue transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    
                    <p className="text-sm text-muted-foreground mt-1">
                      Seller: {item.seller}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.size && (
                        <Badge variant="secondary">Size: {item.size}</Badge>
                      )}
                      {item.color && (
                        <Badge variant="secondary">Color: {item.color}</Badge>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="text-lg font-bold text-foreground">
                        ₹{item.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{item.mrp.toLocaleString()}
                      </span>
                      <span className="text-sm font-medium text-success">
                        {Math.round(((item.mrp - item.price) / item.mrp) * 100)}% off
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-elevated p-6 sticky top-24">
              <h2 className="font-bold text-lg text-foreground mb-4">Order Summary</h2>

              {/* Coupon */}
              <div className="flex gap-2 mb-6">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="input-field pl-10 text-sm"
                  />
                </div>
                <Button variant="outline" className="shrink-0">
                  Apply
                </Button>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
                  <span className="text-foreground">₹{totalMrp.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-success">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className={deliveryFee === 0 ? "text-success" : "text-foreground"}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-sm text-success font-medium mt-4">
                You're saving ₹{discount.toLocaleString()} on this order!
              </p>

              <Button
                asChild
                size="lg"
                className="w-full mt-6 bg-goaalsi-blue hover:bg-goaalsi-blue-dark gap-2 h-14"
              >
                <Link to="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground">
                <div className="flex items-center gap-1 text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <Truck className="w-4 h-4" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
