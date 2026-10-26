import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

// Client-first order: what I build, proof (work), experience and strengths, how I work;
// then the short profile, FAQ and technologies (recruiters, SEO and AI search), and contact.
export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <Testimonials />
      <Process />
      <About />
      <Faq />
      <TechStack />
      <Contact />
    </SiteLayout>
  );
}
