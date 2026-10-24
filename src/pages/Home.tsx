import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Services />
      <Process />
      <Faq />
      <Contact />
    </SiteLayout>
  );
}
