import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Link from './components/ui/Link';

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
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
        <Footer />
      </div>
  );
}
