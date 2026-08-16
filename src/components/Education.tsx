
import { Circle } from 'lucide-react';
import { motion } from "motion/react";

export const Education = () => {
  const educationData = [
    {
      name: "Griyar Para Primary School",
      bn: "(গড়িয়ার পাড়া সরকারি প্রাথমিক বিদ্যালয়)",
      details: "Completed Primary Education up to class V."
    },
    {
      name: "Barail Bakson High School",
      bn: "(বরাইল বাকশন উচ্চ বিদ্যালয়)",
      details: "Completed Secondary School Certificate (SSC) - Class VIII & X."
    },
    {
      name: "Daridaha Technical and BM College",
      bn: "(দারিদহ টেকনিক্যাল অ্যান্ড বিএম কলেজ)",
      details: "Completed Higher Secondary Certificate (HSC)."
    }
  ];

  return (
    <motion.section
      id="education"
      className="flex items-center justify-center p-6 bg-gradient-to-br from-blue-950 via-red-950 to-yellow-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl w-full backdrop-blur-md bg-white/10 p-10 rounded-3xl border border-white/20 shadow-2xl">
        <h2 className="text-5xl font-extrabold text-white text-center mb-12 uppercase tracking-widest">
          Education
        </h2>
        <div className="space-y-10">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-0 top-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Circle size={12} className="text-yellow-950" />
              </div>
              {/* Connecting line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-3 top-7 bottom-[-40px] w-0.5 bg-white/30" />
              )}
              <h3 className="text-2xl font-bold text-white mb-1">
                {item.name}
                <span className="text-sm text-gray-300 italic block mt-1">
                  {item.bn}
                </span>
              </h3>
              <p className="text-gray-100 bg-white/5 p-4 rounded-lg mt-3 text-lg leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
