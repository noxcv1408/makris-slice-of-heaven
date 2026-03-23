import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import MenuSection from "./components/sections/MenuSection";
import GallerySection from "./components/sections/GallerySection";
import ReviewsSection from "./components/sections/ReviewsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
