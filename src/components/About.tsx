
import { motion } from "motion/react";

export const About = () => (
  <motion.section 
    id="about" 
    className="container mx-auto px-6 py-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="mb-12 text-center text-4xl font-bold text-white">আমার সম্পর্কে</h2>
    <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
      <div className="flex-1">
        <h3 className="mb-4 text-2xl font-semibold text-white">কে আমি?</h3>
        <p className="mb-2 text-white font-bold text-xl">Name: Md. Isahak Ali</p>
        <p className="mb-2 text-rose-200">Address: Shibganj, Bogura, Rajshahi, Bangladesh.</p>
        <p className="mb-6 text-rose-200 leading-relaxed">
          My goal is to complete my Honors degree and prepare for the Bangladesh Civil Service (BCS) examination.
        </p>
      </div>
      <div className="flex-1 text-center">
        <img src="https://res.cloudinary.com/djginu4oz/image/upload/v1786780152/WhatsApp_Image_2026-08-15_at_1.47.56_PM_x8kfin.jpg" alt="প্রোফাইল ছবি" className="mx-auto rounded-full border-4 border-rose-800 shadow-lg" />
      </div>
    </div>
  </motion.section>
);
