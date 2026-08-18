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

export default function App() {
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
        <Footer />
      </div>
    </LanguageProvider>
  );
}
