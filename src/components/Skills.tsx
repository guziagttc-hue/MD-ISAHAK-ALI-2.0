
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export const Skills = () => {
  const { language } = useLanguage();

  const skillsData = {
    bn: [
      { title: "সফটওয়্যার ও ওয়েব ডেভেলপমেন্ট", items: ["HTML", "CSS", "JavaScript", "Supabase API", "Web Application Management"] },
      { title: "কম্পিউটার অফিস অ্যাপ্লিকেশন", items: ["MS Word", "MS Excel", "MS PowerPoint", "MS Access"] },
      { title: "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং", items: ["Electrical House Wiring", "Handling Hand Tools", "Operating Power Tools"] },
      { title: "ডিজিটাল কন্টেন্ট ক্রিয়েশন", items: ["Graphic Design", "YouTube Channel Management", "Audio/Video Content Creation"] },
      { title: "অন্যান্য দক্ষতা", items: ["Motorbike Driving", "Car Driving", "Photography"] }
    ],
    en: [
      { title: "Software & Web Development", items: ["HTML", "CSS", "JavaScript", "Supabase API", "Web Application Management"] },
      { title: "Computer Office Applications", items: ["MS Word", "MS Excel", "MS PowerPoint", "MS Access"] },
      { title: "Electrical Engineering", items: ["Electrical House Wiring", "Handling Hand Tools", "Operating Power Tools"] },
      { title: "Digital Content Creation", items: ["Graphic Design", "YouTube Channel Management", "Audio/Video Content Creation"] },
      { title: "Other Skills", items: ["Motorbike Driving", "Car Driving", "Photography"] }
    ]
  };

  const skills = skillsData[language];

  return (
    <section id="skills" className="relative py-20 bg-[#080808] overflow-hidden">
      {/* Dynamic Weather/Nature Animation Container */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => {
          const month = new Date().getMonth() + 1; // 1-12
          let icon = "🌸";
          let color = "text-pink-300";

          // Snow: Dec(12), Jan(1), Feb(2)
          if (month === 12 || month === 1 || month === 2) {
            icon = "❄️";
            color = "text-white";
          }
          // Rain: Jun(6), Jul(7), Aug(8)
          else if (month >= 6 && month <= 8) {
            icon = "💧";
            color = "text-blue-300";
          }
          // Default: Flowers
          else {
            icon = i % 2 === 0 ? "🌸" : "✧";
            color = "text-pink-300";
          }

          return (
            <motion.div
              key={i}
              className={`absolute ${color} opacity-70`}
              initial={{ top: "-10%" }}
              animate={{ 
                top: "110%", 
                rotate: month >= 6 && month <= 8 ? 0 : 360,
                x: month >= 6 && month <= 8 ? 0 : [0, 20, 0]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
              style={{ left: `${Math.random() * 100}%` }}
            >
              {icon}
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Experience Card */}
        <div className="flex justify-center mb-20">
          <div className="bg-white/5 backdrop-blur-lg border border-yellow-500/30 p-10 rounded-3xl text-center shadow-2xl">
            <div className="text-[120px] font-bold bg-gradient-to-br from-yellow-400 to-white bg-clip-text text-transparent leading-none mb-2">
              5+
            </div>
            <div className="text-3xl text-gray-200 tracking-widest uppercase">
              {language === 'bn' ? "বছরের বাস্তব অভিজ্ঞতা" : "Years of Experience"}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            {language === 'bn' ? "কারিগরি ও ব্যবহারিক দক্ষতা" : "Technical & Practical Skills"}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-rose-950 border border-rose-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-rose-300 mb-4">{skillGroup.title}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-100 flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
