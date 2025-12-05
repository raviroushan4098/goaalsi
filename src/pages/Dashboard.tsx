import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Package,
  Heart,
  MapPin,
  User,
  ChevronRight,
  ShoppingBag,
  Clock,
  Star,
} from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductSlider from "@/components/home/ProductSlider";
import { trendingProducts } from "@/data/mockProducts";

const quickLinks = [
  { name: "Orders", icon: Package, href: "/dashboard/orders", color: "bg-blue-100 text-blue-600" },
  { name: "Wishlist", icon: Heart, href: "/dashboard/wishlist", color: "bg-pink-100 text-pink-600" },
  { name: "Addresses", icon: MapPin, href: "/dashboard/addresses", color: "bg-amber-100 text-amber-600" },
  { name: "Profile", icon: User, href: "/dashboard/profile", color: "bg-green-100 text-green-600" },
];

const recentOrders = [
  {
    id: "ORD-12345",
    date: "Dec 1, 2024",
    status: "Delivered",
    total: 2999,
    items: [
      { name: "Wireless Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80" },
    ],
  },
  {
    id: "ORD-12344",
    date: "Nov 28, 2024",
    status: "Shipped",
    total: 1198,
    items: [
      { name: "Fleece Blanket", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100&q=80" },
      { name: "Memory Pillow", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=100&q=80" },
    ],
  },
];

const Dashboard = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Dashboard | GoAalsi</title>
        <meta name="description" content="Manage your GoAalsi account, orders, and preferences" />
      </Helmet>

      <div className="container-main py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-hero rounded-2xl p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Hi, Lazy Shopper! 😴
              </h1>
              <p className="text-primary-foreground/80 mt-1">
                Ready to be lazy today? Here's your shopping summary.
              </p>
            </div>
            <Button
              asChild
              className="bg-sunshine text-accent-foreground hover:bg-sunshine-dark w-fit"
            >
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-primary-foreground/10 rounded-xl p-4">
              <ShoppingBag className="w-6 h-6 text-primary-foreground mb-2" />
              <p className="text-2xl font-bold text-primary-foreground">12</p>
              <p className="text-sm text-primary-foreground/70">Total Orders</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4">
              <Heart className="w-6 h-6 text-primary-foreground mb-2" />
              <p className="text-2xl font-bold text-primary-foreground">8</p>
              <p className="text-sm text-primary-foreground/70">Wishlist Items</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4">
              <Star className="w-6 h-6 text-primary-foreground mb-2" />
              <p className="text-2xl font-bold text-primary-foreground">₹4,200</p>
              <p className="text-sm text-primary-foreground/70">Total Saved</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4">
              <Clock className="w-6 h-6 text-primary-foreground mb-2" />
              <p className="text-2xl font-bold text-primary-foreground">2</p>
              <p className="text-sm text-primary-foreground/70">Active Orders</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className="card-elevated card-hover p-6 flex flex-col items-center text-center group"
              >
                <div className={`w-14 h-14 rounded-2xl ${link.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-7 h-7" />
                </div>
                <span className="font-medium text-foreground">{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-elevated p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Recent Orders</h2>
            <Button asChild variant="ghost" className="text-goaalsi-blue gap-1">
              <Link to="/dashboard/orders">
                View All
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {recentOrders.map((order) => (
              <Link
                key={order.id}
                to={`/dashboard/orders/${order.id}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-goaalsi-blue/50 hover:bg-secondary/50 transition-all"
              >
                <div className="flex -space-x-3">
                  {order.items.slice(0, 2).map((item, i) => (
                    <img
                      key={i}
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover border-2 border-card"
                    />
                  ))}
                  {order.items.length > 2 && (
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-sm font-medium border-2 border-card">
                      +{order.items.length - 2}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <div className="text-right">
                  <Badge
                    className={
                      order.status === "Delivered"
                        ? "bg-success/10 text-success"
                        : "bg-goaalsi-blue/10 text-goaalsi-blue"
                    }
                  >
                    {order.status}
                  </Badge>
                  <p className="font-semibold text-foreground mt-1">₹{order.total.toLocaleString()}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recommendations */}
      <ProductSlider
        title="Lazy Recommendations"
        subtitle="Picked just for you"
        products={trendingProducts}
        viewAllLink="/shop"
      />
    </MainLayout>
  );
};

export default Dashboard;
