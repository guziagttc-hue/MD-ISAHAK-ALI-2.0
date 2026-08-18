import { motion } from "motion/react";
import { FileText } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";

export const Resume = () => {
  const { language } = useLanguage();
  return (
    <motion.section 
      id="resume" 
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-16 text-center text-4xl font-bold text-white">{language === 'bn' ? "আমার সিভি" : "My Resume"}</h2>
      <div className="flex flex-col items-center">
        <div className="mb-8 rounded-xl border border-rose-800 bg-rose-900 p-6 shadow-lg">
          <p className="mb-4 text-center text-rose-200">{language === 'bn' ? "সিভি দেখার জন্য নিচে ক্লিক করুন:" : "Click below to view my CV:"}</p>
          <a 
            href="https://drive.google.com/file/d/1wiwKrc7_nX3ktmDmL2e3DEj8XFDntoB_/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 font-bold text-neutral-950 hover:bg-rose-500"
          >
            <FileText className="mr-2" /> {language === 'bn' ? "সিভি ডাউনলোড/দেখুন" : "View/Download CV"}
          </a>
        </div>
        <p className="text-center text-sm text-rose-400">{language === 'bn' ? "দ্রষ্টব্য: সিভি দেখার জন্য উপরের বাটনে ক্লিক করুন। (এটি নতুন ট্যাবে খুলবে)" : "Note: Click the button above to view my CV. (Opens in a new tab)"}</p>
      </div>
    </motion.section>
  );
};
