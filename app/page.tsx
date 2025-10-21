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

export default function Home() {
  return (
      <div className="relative">
        <Background />
        <Header />
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
