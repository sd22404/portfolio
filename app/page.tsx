import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Footer from './components/Footer';
import Background from './components/sub/GoLBackground';
import Section from './components/ui/Section';

export default function Home() {
  return (
      <div className="relative min-h-screen">
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
      </div>
  );
}
