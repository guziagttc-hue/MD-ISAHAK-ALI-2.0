
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { AgeCounter } from "./AgeCounter";

export const About = () => {
  const { language } = useLanguage();

  const content = {
    bn: {
      title: "আমার সম্পর্কে",
      name: "আমি মোঃ ইসহাক আলী",
      role: "নিবেদিতপ্রাণ শিক্ষার্থী ও উচ্চাকাঙ্ক্ষী।",
      address: "ঠিকানা:",
      addressVal: "শিবগঞ্জ, বগুড়া, রাজশাহী, বাংলাদেশ।",
      desc: "আমি বর্তমানে আমার বি.এ (B.A) সম্পন্ন করছি এবং ভবিষ্যতে বাংলাদেশ সিভিল সার্ভিস (BCS) পরীক্ষার জন্য নিজেকে প্রস্তুত করছি। নতুন কিছু শেখার আগ্রহ এবং চ্যালেঞ্জ গ্রহণ করার মানসিকতা আমার কাজের অন্যতম চালিকাশক্তি।"
    },
    en: {
      title: "About Me",
      name: "I am Md. Isahak Ali",
      role: "Dedicated student and aspirant.",
      address: "Address:",
      addressVal: "Shibganj, Bogura, Rajshahi, Bangladesh.",
      desc: "I am currently pursuing my B.A degree and preparing myself for the Bangladesh Civil Service (BCS) examination in the future. My passion for learning new things and willingness to accept challenges are the main driving forces behind my work."
    }
  };

  const t = content[language];

  return (
    <motion.section 
      id="about" 
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <AgeCounter />
      <div className="bg-rose-950/50 border border-rose-800 rounded-3xl p-10 shadow-2xl backdrop-blur-sm">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">{t.title}</h2>
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-semibold text-white">{t.name}</h3>
            <p className="text-xl text-rose-300 font-medium">{t.role}</p>
            <div className="space-y-3 text-rose-100">
              <p><strong>{t.address}</strong> {t.addressVal}</p>
              <p className="leading-relaxed">
                {t.desc}
              </p>
            </div>
          </div>
          <div className="flex-1 text-center">
            <img 
              src="https://res.cloudinary.com/djginu4oz/image/upload/v1786780152/WhatsApp_Image_2026-08-15_at_1.47.56_PM_x8kfin.jpg" 
              alt={t.name} 
              className="mx-auto w-64 h-64 object-cover rounded-3xl border-4 border-rose-800 shadow-xl" 
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
