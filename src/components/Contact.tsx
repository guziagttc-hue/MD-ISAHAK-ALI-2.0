
import { Mail, Check, Copy } from 'lucide-react';
import { motion } from "motion/react";
import { useState } from 'react';
import { useLanguage } from "../context/LanguageContext";

export const Contact = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = "mdesaislam74@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section 
      id="contact" 
      className="container mx-auto px-6 py-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-12 text-4xl font-bold text-white">{language === 'bn' ? "যোগাযোগ করুন" : "Contact Me"}</h2>
      <p className="mb-8 text-rose-200">{language === 'bn' ? "আপনার কোনো প্রজেক্টের আইডিয়া বা প্রশ্ন থাকলে নির্দ্বিধায় যোগাযোগ করুন।" : "If you have any project ideas or questions, feel free to contact me."}</p>
      <div className="flex justify-center text-rose-200">
        <button 
          onClick={handleCopy}
          className="flex items-center gap-2 hover:text-rose-400 transition-colors"
          title={language === 'bn' ? "ইমেইল কপি করুন" : "Copy Email"}
        >
          <Mail size={20} /> 
          {email}
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
      {copied && <p className="text-green-400 mt-2 text-sm">{language === 'bn' ? "ইমেইল কপি হয়েছে!" : "Email copied!"}</p>}
    </motion.section>
  );
};
