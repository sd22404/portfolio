import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Awards from './components/sections/Awards';
import Footer from './components/sections/Footer';
import Background from './components/sub/GoLBackground';
import Section from './components/ui/Section';

export default function Home() {
  return (
      <main className="relative min-h-screen">
        <Background />
        <Header links={[
          { href: "#hero", label: "about", variant: "text" },
          { href: "#education", label: "background", variant: "text" },
          { href: "#projects", label: "projects", variant: "text" },
          { href: "#skills", label: "achievements", variant: "text" },
        ]} />
        <Hero bg="bg-transparent" />
        <Education bg="bg-background-lighter border-t border-border/40 pb-20 sm:pb-24" />
        <Experience bg="bg-background-lighter border-b border-border/40" />
        <Projects bg="bg-background py-20 sm:py-24" />
        <Skills bg="bg-background-lighter border-t border-border/40 pb-20 sm:pb-24" />
        <Awards bg="bg-background-lighter border-b border-border/40" />
        <Section id="blank" bgClass='bg-background pb-20 sm:pb-24'> </Section>
        <Footer />
      </main>
  );
}
