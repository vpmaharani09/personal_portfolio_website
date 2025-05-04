import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
