
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import CreatorSection from "@/components/CreatorSection";
import AboutFooter from "@/components/AboutFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductGrid />
      <CreatorSection />
      <AboutFooter />
    </div>
  );
};

export default Index;
