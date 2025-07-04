import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import RecentProjects from "@/sections/RecentProjects";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero/Hero";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <RecentProjects />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
}
