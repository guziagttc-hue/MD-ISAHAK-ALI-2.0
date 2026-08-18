import { motion } from "motion/react";
import { Facebook, Send, MessageCircle, MessageSquare, Youtube, ExternalLink } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";

export const SocialLinks = () => {
  const { language } = useLanguage();

  const socialLinks = [
    { name: language === 'bn' ? 'ফেসবুক প্রোফাইল' : 'Facebook Profile', href: 'https://www.facebook.com/mdesahak.esa.5', icon: Facebook, color: 'text-blue-600' },
    { name: language === 'bn' ? 'টেলিগ্রাম চ্যানেল বা গ্রুপ' : 'Telegram Channel/Group', href: 'https://t.me/+cr_4pVi6R2llMTM9', icon: Send, color: 'text-sky-500' },
    { name: language === 'bn' ? 'মেসেঞ্জার চ্যানেল' : 'Messenger Channel', href: 'https://www.messenger.com/channel/mdesahak.esa.5', icon: MessageCircle, color: 'text-blue-500' },
    { name: language === 'bn' ? 'হোয়াটসঅ্যাপ গ্রুপ চ্যাট' : 'WhatsApp Group Chat', href: 'https://chat.whatsapp.com/KEtuFzh4oyn37iTR86O8DK', icon: MessageSquare, color: 'text-green-500' },
    { name: language === 'bn' ? 'ইউটিউব চ্যানেল' : 'YouTube Channel', href: 'https://youtube.com/@ottcottc?si=3Xlg0MBaedASVHEJ', icon: Youtube, color: 'text-red-600' },
    { name: language === 'bn' ? 'ফাইভার প্রোফাইল' : 'Fiverr Profile', href: 'https://fiverr.com/s/9d2dVaD', icon: ExternalLink, color: 'text-green-600' },
  ];

  return (
    <motion.section 
      id="social-links" 
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-xl rounded-3xl border border-rose-200 bg-white p-10 text-center shadow-xl">
        <h2 className="mb-10 text-3xl font-bold text-neutral-900">{language === 'bn' ? "সোশ্যাল মিডিয়া লিঙ্কসমূহ" : "Social Media Links"}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-xl border border-neutral-100 bg-neutral-50 p-4 text-neutral-800 transition-all hover:border-rose-200 hover:bg-rose-50 hover:shadow-md"
            >
              <div className={`mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ${link.color}`}>
                <link.icon size={20} />
              </div>
              <span className="text-sm font-semibold">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
