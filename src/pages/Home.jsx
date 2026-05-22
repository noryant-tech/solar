import Navbar from '../components/sections/Navbar';
import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import BrandStrip from '../components/sections/BrandStrip';
import AboutSection from '../components/sections/AboutSection';
import FeatureImage from '../components/sections/FeatureImage';
import ServicesSection from '../components/sections/ServicesSection';
import ProductsSection from '../components/sections/ProductsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import BlogSection from '../components/sections/BlogSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import FAQSection from '../components/sections/FAQSection';
import FooterCTA from '../components/sections/FooterCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <BrandStrip />
      <AboutSection />
      <FeatureImage />
      <ServicesSection />
      <ProductsSection />
      <ProjectsSection />
      <BlogSection />
      <TestimonialSection />
      <FAQSection />
      <FooterCTA />
    </div>
  );
}