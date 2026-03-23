import Seo from "@/components/Seo";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import OrderSection from "@/components/sections/OrderSection";
import MenuSection from "@/components/sections/MenuSection";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

const homeTitle = "Makris Pizza & Love | Pizza napoletana a Lago Patria";
const homeDescription =
  "Pizza napoletana a Lago Patria con sala, asporto, consegna e ordini online. Scopri menu, contatti, orari e atmosfera di Makris Pizza & Love.";

export default function HomePage() {
  return (
    <>
      <Seo title={homeTitle} description={homeDescription} includeStructuredData />
      <main>
        <HeroSection />
        <AboutSection />
        <OrderSection />
        <MenuSection />
        <GallerySection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
    </>
  );
}
