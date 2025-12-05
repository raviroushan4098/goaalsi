import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { SlidersHorizontal, Grid3X3, LayoutList, ChevronDown, X } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allProducts } from "@/data/mockProducts";

const categories = ["All", "Electronics", "Fashion", "Home", "Sports", "Kitchen", "Health"];
const priceRanges = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
  { label: "Above ₹2000", min: 2000, max: Infinity },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch =
      selectedPriceRange === null ||
      (product.price >= priceRanges[selectedPriceRange].min &&
        product.price <= priceRanges[selectedPriceRange].max);
    return categoryMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "discount":
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedPriceRange(null);
    setSortBy("relevance");
  };

  const activeFiltersCount =
    (selectedCategory !== "All" ? 1 : 0) + (selectedPriceRange !== null ? 1 : 0);

  return (
    <MainLayout>
      <Helmet>
        <title>Shop All Products | GoAalsi</title>
        <meta
          name="description"
          content="Browse our complete collection of products. Find the best deals on electronics, fashion, home essentials and more."
        />
      </Helmet>

      <div className="container-main py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span className="hover:text-foreground cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">Shop</span>
        </nav>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="card-elevated p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-foreground">Filters</h3>
                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-goaalsi-blue hover:text-goaalsi-blue-dark"
                  >
                    Clear All
                  </Button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? "bg-goaalsi-blue text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <button
                      key={range.label}
                      onClick={() =>
                        setSelectedPriceRange(selectedPriceRange === index ? null : index)
                      }
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedPriceRange === index
                          ? "bg-goaalsi-blue text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-foreground">All Products</h1>
                <Badge variant="secondary" className="text-muted-foreground">
                  {sortedProducts.length} products
                </Badge>
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <Button
                  variant="outline"
                  className="lg:hidden gap-2"
                  onClick={() => setShowFilters(true)}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge className="bg-goaalsi-blue text-primary-foreground ml-1">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-card border border-border rounded-lg px-4 py-2 pr-10 text-foreground focus:outline-none focus:ring-2 focus:ring-goaalsi-blue/30"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="discount">Biggest Discount</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {selectedCategory !== "All" && (
                  <Badge
                    variant="secondary"
                    className="gap-1 cursor-pointer hover:bg-destructive/10"
                    onClick={() => setSelectedCategory("All")}
                  >
                    {selectedCategory}
                    <X className="w-3 h-3" />
                  </Badge>
                )}
                {selectedPriceRange !== null && (
                  <Badge
                    variant="secondary"
                    className="gap-1 cursor-pointer hover:bg-destructive/10"
                    onClick={() => setSelectedPriceRange(null)}
                  >
                    {priceRanges[selectedPriceRange].label}
                    <X className="w-3 h-3" />
                  </Badge>
                )}
              </div>
            )}

            {/* Product Grid */}
            {sortedProducts.length > 0 ? (
              <ProductGrid products={sortedProducts} columns={3} />
            ) : (
              <div className="card-elevated p-12 text-center">
                <span className="text-6xl mb-4 block">🔍</span>
                <h3 className="text-xl font-bold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <Button onClick={clearFilters} className="bg-goaalsi-blue hover:bg-goaalsi-blue-dark">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/50 z-50 lg:hidden"
          onClick={() => setShowFilters(false)}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-card p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-foreground">Filters</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-medium text-foreground mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-goaalsi-blue text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium text-foreground mb-3">Price Range</h4>
              <div className="space-y-2">
                {priceRanges.map((range, index) => (
                  <button
                    key={range.label}
                    onClick={() =>
                      setSelectedPriceRange(selectedPriceRange === index ? null : index)
                    }
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedPriceRange === index
                        ? "bg-goaalsi-blue text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={clearFilters}
              >
                Clear All
              </Button>
              <Button
                className="flex-1 bg-goaalsi-blue hover:bg-goaalsi-blue-dark"
                onClick={() => setShowFilters(false)}
              >
                Apply
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </MainLayout>
  );
};

export default Shop;
