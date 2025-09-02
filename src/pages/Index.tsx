import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppScreenshotSection from "@/components/AppScreenshotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppScreenshotSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;