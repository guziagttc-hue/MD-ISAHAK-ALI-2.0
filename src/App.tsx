import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Affiliation } from './components/Affiliation';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { SocialLinks } from './components/SocialLinks';
import { Gallery } from './components/Gallery';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { InstallButton } from './components/InstallButton';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent PrintScreen, Ctrl+C, Ctrl+V, Ctrl+P, Ctrl+S
      if (
        e.key === 'PrintScreen' ||
        (e.ctrlKey && ['c', 'v', 'p', 's', 'x', 'a', 'u'].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    };
    const handleDragStart = (e: DragEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-rose-950 text-rose-100">
        <Header />
        <main>
          <Hero />
          <About />
          <Affiliation />
          <Education />
          <Skills />
          <SocialLinks />
          <Gallery />
          <Resume />
          <Contact />
        </main>
        <InstallButton />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
