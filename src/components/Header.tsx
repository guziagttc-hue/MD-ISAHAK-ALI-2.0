
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: language === 'bn' ? "আমার সম্পর্কে" : "About", href: "#about" },
    { name: language === 'bn' ? "দক্ষতা" : "Skills", href: "#skills" },
    { name: language === 'bn' ? "শিক্ষাগত যোগ্যতা" : "Education", href: "#education" },
    { name: language === 'bn' ? "সিভি" : "Resume", href: "#resume" },
    { name: language === 'bn' ? "যোগাযোগ" : "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-rose-800 bg-rose-950/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        {/* Top Row: Name and Time - Hidden when scrolled */}
        <div className={`flex items-center justify-between mb-4 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
          <div className="rounded-md bg-rose-950 px-3 py-1 text-xl font-bold text-rose-400">MD. ISAHAK ALI</div>
          <div className="text-xs text-rose-300">
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
          </div>
        </div>

        {/* Bottom Row: Navigation and Extras */}
        <nav className={`flex items-center justify-center gap-4 sm:gap-8 flex-wrap pt-3 transition-all duration-300 ${isScrolled ? 'border-t-0 pt-0' : 'border-t border-rose-800/50'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-rose-200 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-4 ml-4">
            <button 
              onClick={toggleLanguage}
              className="bg-rose-800 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-rose-700 transition-colors"
            >
              {language === 'bn' ? 'English' : 'বাংলা'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
