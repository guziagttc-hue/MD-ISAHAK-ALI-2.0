
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: language === 'bn' ? "আমার সম্পর্কে" : "About", href: "#about" },
    { name: language === 'bn' ? "দক্ষতা" : "Skills", href: "#skills" },
    { name: language === 'bn' ? "সিভি" : "Resume", href: "#resume" },
    { name: language === 'bn' ? "যোগাযোগ" : "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-rose-800 bg-rose-950/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        {/* Top Row: Name, Time, and Language Switcher */}
        <div className="flex items-center justify-between mb-4">
          <div className="rounded-md bg-rose-950 px-3 py-1 text-xl font-bold text-rose-400">MD. ISAHAK ALI</div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="bg-rose-800 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-rose-700"
            >
              {language === 'bn' ? 'English' : 'বাংলা'}
            </button>
            <div className="text-xs text-rose-300">
              {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Bottom Row: Navigation */}
        <nav className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap border-t border-rose-800/50 pt-3">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-rose-200 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
