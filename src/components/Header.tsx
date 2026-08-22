
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      clearInterval(timer);
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      
      let message = language === 'bn' 
        ? "অ্যাপটি ইন্সটল করতে:\n\n"
        : "To install the app:\n\n";

      if (isIOS) {
        message += language === 'bn' 
          ? "১. নিচের শেয়ার বাটনে ক্লিক করুন।\n২. 'Add to Home Screen' অপশনটি সিলেক্ট করুন।"
          : "1. Tap the Share button below.\n2. Select 'Add to Home Screen'.";
      } else if (isAndroid) {
        message += language === 'bn' 
          ? "১. ব্রাউজারের মেনু (⋮) বাটনে ক্লিক করুন।\n২. 'Install App' বা 'Add to Home screen' সিলেক্ট করুন।"
          : "1. Tap the browser menu (⋮).\n2. Select 'Install App' or 'Add to Home screen'.";
      } else {
        message += language === 'bn' 
          ? "আপনার ব্রাউজারের সেটিংস বা মেনু থেকে 'Install' অপশনটি খুঁজুন।"
          : "Look for the 'Install' option in your browser's menu or settings.";
      }
      
      alert(message);
    }
  };

  const navLinks = [
    { name: language === 'bn' ? "আমার সম্পর্কে" : "About", href: "#about" },
    { name: language === 'bn' ? "দক্ষতা" : "Skills", href: "#skills" },
    { name: language === 'bn' ? "সিভি" : "Resume", href: "#resume" },
    { name: language === 'bn' ? "যোগাযোগ" : "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-rose-800 bg-rose-950/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        {/* Top Row: Name and Time */}
        <div className="flex items-center justify-between mb-4">
          <div className="rounded-md bg-rose-950 px-3 py-1 text-xl font-bold text-rose-400">MD. ISAHAK ALI</div>
          <div className="text-xs text-rose-300">
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
          </div>
        </div>

        {/* Bottom Row: Navigation and Extras */}
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
          
          {/* Language Switcher and Install Button */}
          <div className="flex items-center gap-4 ml-4">
            <button 
              onClick={toggleLanguage}
              className="bg-rose-800 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-rose-700 transition-colors"
            >
              {language === 'bn' ? 'English' : 'বাংলা'}
            </button>
            <button 
              onClick={handleInstall}
              className="bg-rose-600 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-rose-500 transition-colors"
            >
              {language === 'bn' ? 'অ্যাপ ইন্সটল' : 'Install App'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
