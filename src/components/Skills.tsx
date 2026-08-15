
import { motion } from "motion/react";

export const Skills = () => {
  const skills = [
    {
      title: "Software & Web Development",
      items: ["HTML", "CSS", "JavaScript", "Supabase API", "Web Application Management"]
    },
    {
      title: "Computer Office Applications",
      items: ["MS Word", "MS Excel", "MS PowerPoint", "MS Access"]
    },
    {
      title: "Electrical Engineering",
      items: ["Electrical House Wiring", "Handling Hand Tools", "Operating Power Tools"]
    },
    {
      title: "Digital Content Creation",
      items: ["Graphic Design", "YouTube Channel Management", "Audio/Video Content Creation"]
    },
    {
      title: "Other Skills",
      items: ["Motorbike Driving", "Car Driving", "Photography"]
    }
  ];

  return (
    <motion.section 
      id="skills" 
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">Technical & Practical Skills</h2>
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
    </motion.section>
  );
};
