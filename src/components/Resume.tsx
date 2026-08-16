import { motion } from "motion/react";
import { FileText } from 'lucide-react';

export const Resume = () => (
  <motion.section 
    id="resume" 
    className="container mx-auto px-6 py-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="mb-16 text-center text-4xl font-bold text-white">আমার সিভি</h2>
    <div className="flex flex-col items-center">
      <div className="mb-8 rounded-xl border border-rose-800 bg-rose-900 p-6 shadow-lg">
        <p className="mb-4 text-center text-rose-200">সিভি দেখার জন্য নিচে ক্লিক করুন:</p>
        <a 
          href="https://drive.google.com/file/d/1wiwKrc7_nX3ktmDmL2e3DEj8XFDntoB_/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 font-bold text-neutral-950 hover:bg-rose-500"
        >
          <FileText className="mr-2" /> সিভি ডাউনলোড/দেখুন
        </a>
      </div>
      <p className="text-center text-sm text-rose-400">দ্রষ্টব্য: সিভি দেখার জন্য উপরের বাটনে ক্লিক করুন। (এটি নতুন ট্যাবে খুলবে)</p>
    </div>
  </motion.section>
);
