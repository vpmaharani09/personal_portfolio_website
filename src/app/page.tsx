import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <AboutSection />
    </div>
  );
}
