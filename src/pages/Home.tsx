import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Sectors } from "@/components/sections/Sectors";
import { WhyMe } from "@/components/sections/WhyMe";
import { CtaBand } from "@/components/sections/CtaBand";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Faq } from "@/components/sections/Faq";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

// Client-first order: what I do, proof, why me, who for, how, call to action; then the profile for recruiters, technologies last.
export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Projects />
      <WhyMe />
      <Sectors />
      <Process />
      <CtaBand />
      <Testimonials />
      <About />
      <Experience />
      <Faq />
      <TechStack />
      <Contact />
    </SiteLayout>
  );
}
