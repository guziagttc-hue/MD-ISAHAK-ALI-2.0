
import { Linkedin, Github, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="border-t border-rose-800 bg-rose-900 py-8 text-center text-rose-200">
      <div className="container mx-auto px-6">
        <p>&copy; 2026 ISAHAK ALI. {language === 'bn' ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}</p>
      </div>
    </footer>
  );
};
