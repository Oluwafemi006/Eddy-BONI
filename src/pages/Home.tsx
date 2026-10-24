import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Sectors } from "@/components/sections/Sectors";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Faq } from "@/components/sections/Faq";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

// Client-first order: what I do, proof, who for, how; then the profile for recruiters, technologies last.
export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Projects />
      <Sectors />
      <Process />
      <Testimonials />
      <About />
      <Experience />
      <Faq />
      <TechStack />
      <Contact />
    </SiteLayout>
  );
}
