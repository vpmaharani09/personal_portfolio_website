import Grid from "@/components/Grid";
import { AboutComponent } from "../components/AboutComponent";
import { SectionHeader } from "@/components/SectionHeader";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 mt-36" id="about">
      <SectionHeader eyebrow="A Bit About How I Roll" title="About Me" />
      <Grid />
      <AboutComponent />
    </section>
  );
};

export default AboutSection;
