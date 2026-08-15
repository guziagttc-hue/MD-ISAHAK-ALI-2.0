
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "ওয়েব ডেভেলপার এবং সফটওয়্যার ইঞ্জিনিয়ার";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
  <motion.section
    id="home"
    className="relative flex h-[80vh] items-center justify-center bg-cover bg-center text-center"
    style={{
      backgroundImage: "url('https://res.cloudinary.com/djginu4oz/image/upload/v1786778595/network-mesh-wire-digital-technology-background_1017-27428_jccflf.avif')"
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="absolute inset-0 bg-rose-900/60" />
    <div className="container relative mx-auto px-6">
      <h1 className="mb-4 text-5xl font-bold text-white">হ্যালো, আমি <span className="text-rose-400">MD. ISAHAK ALI</span></h1>
      <motion.div
        className="h-1 w-24 bg-rose-400 mx-auto mb-8"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <p className="mb-8 text-xl text-rose-200 h-8">{text}</p>
      <a href="#portfolio" className="inline-block rounded-full bg-rose-600 px-8 py-3 font-bold text-neutral-950 hover:bg-rose-500">
        আমার কাজ দেখুন
      </a>
    </div>
  </motion.section>
  );
};
