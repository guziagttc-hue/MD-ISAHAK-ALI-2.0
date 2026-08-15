import { motion } from "motion/react";

export const Affiliation = () => (
  <motion.section 
    id="affiliation" 
    className="container mx-auto px-6 py-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="rounded-lg border border-rose-800 bg-rose-900 p-8 text-center shadow-lg">
      <h2 className="mb-4 text-3xl font-bold text-white">Current Affiliation</h2>
      <p className="text-xl text-rose-200">
        Currently associated with Guzia Technical Training Center, pursuing technical skills and practical work.
      </p>
    </div>
  </motion.section>
);
