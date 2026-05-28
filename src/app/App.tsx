import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CaseStudy } from './components/CaseStudy';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add Contentsquare analytics script
    const script = document.createElement('script');
    script.src = 'https://t.contentsquare.net/uxa/76ca2a76fdd06.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (selectedProject) {
    return (
      <>
        <ScrollProgress />
        <Navigation onBack={() => setSelectedProject(null)} showBack isScrolled={isScrolled} />
        <CaseStudy projectId={selectedProject} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <ScrollProgress />
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Skills />
      <Projects onSelectProject={setSelectedProject} />
      <Testimonials />
      <Footer />
    </>
  );
}