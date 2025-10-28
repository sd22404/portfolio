import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/sub/GoLBackground';

export default function Home() {
  return (
      <div className="relative min-h-screen">
        <Background />
        <Header links={[
          { href: "#hero", label: "about", variant: "text" },
          { href: "#experience", label: "experience", variant: "text" },
          { href: "#projects", label: "projects", variant: "text" },
          { href: "#skills", label: "skills", variant: "text" },
          { href: "#awards", label: "awards", variant: "text" },
          { href: "#contact", label: "contact", variant: "text" },
        ]} />
        <Hero bg="bg-transparent" />
        <Education bg="bg-background-lighter border-t border-border/40" />
        <Experience bg="bg-background-lighter border-b border-border/40" />
        <Projects bg="bg-background" />
        <Skills bg="bg-background-lighter border-t border-border/40" />
        <Awards bg="bg-background-lighter border-b border-border/40" />
        <Contact bg="bg-background" />
        <Footer />
      </div>
  );
}
