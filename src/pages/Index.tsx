import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import CategoryStrip from "@/components/home/CategoryStrip";
import DealsSection from "@/components/home/DealsSection";
import ProductSlider from "@/components/home/ProductSlider";
import PromoBanner from "@/components/home/PromoBanner";
import { trendingProducts, under999Products, workFromBedProducts } from "@/data/mockProducts";

const Index = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>GoAalsi - Shopping for the Super Lazy | Best Deals Online</title>
        <meta
          name="description"
          content="GoAalsi brings you the best deals for lazy shoppers. Discover trending products, amazing discounts, and effortless delivery right to your doorstep."
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Category Strip */}
      <CategoryStrip />

      {/* Deals of the Day */}
      <DealsSection />

      {/* Trending Products */}
      <ProductSlider
        title="Trending Lazy Picks"
        subtitle="What the smart lazies are buying"
        products={trendingProducts}
        viewAllLink="/shop?sort=trending"
        bgColor="bg-card"
      />

      {/* Promo Banner 1 */}
      <PromoBanner
        title="Work From Bed? We Got You!"
        subtitle="Everything you need to be productive without leaving your cozy spot. Laptop stands, cozy blankets, and more."
        ctaText="Shop Work Essentials"
        ctaLink="/category/work-from-bed"
        image="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=600&q=80"
      />

      {/* Best Under ₹999 */}
      <ProductSlider
        title="Best Under ₹999"
        subtitle="Great finds that won't break the bank"
        products={under999Products}
        viewAllLink="/shop?maxPrice=999"
        bgColor="bg-background"
      />

      {/* Promo Banner 2 */}
      <PromoBanner
        title="New Season, New Lazy Essentials"
        subtitle="Refresh your loungewear collection with our latest arrivals. Comfort meets style."
        ctaText="Explore New Arrivals"
        ctaLink="/shop?sort=newest"
        image="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80"
        bgGradient="bg-gradient-to-r from-success to-success-light"
        reverse
      />

      {/* Work From Bed */}
      <ProductSlider
        title="Work From Bed Essentials"
        subtitle="Productivity without leaving your comfort zone"
        products={workFromBedProducts}
        viewAllLink="/category/work-from-bed"
        bgColor="bg-card"
      />

      {/* App Download CTA */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="bg-gradient-hero rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  Shop Even Lazier with Our App
                </h2>
                <p className="text-primary-foreground/80 mt-4 text-lg">
                  Get exclusive app-only deals, track orders, and shop with just one tap. 
                  Download now and get ₹100 off your first order!
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/270px-Google_Play_Store_badge_EN.svg.png"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/203px-Download_on_the_App_Store_Badge.svg.png"
                    alt="Download on App Store"
                    className="h-12"
                  />
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-foreground rounded-[40px] p-2 shadow-elevated">
                    <div className="w-full h-full bg-card rounded-[32px] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80"
                        alt="GoAalsi App"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-sunshine rounded-2xl flex items-center justify-center shadow-card">
                    <span className="text-2xl">📱</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
