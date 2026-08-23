import { motion } from "motion/react";
import { Image, Cpu, Video } from 'lucide-react';

import { motion } from "motion/react";
import { Image, Cpu, Video } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from "../context/LanguageContext";

const photos: string[] = [
  "https://res.cloudinary.com/djginu4oz/image/upload/v1786851749/9f8f9bc4e6d4441ab55f47f5a34b9778_zmetmy.jpg", 
  "https://res.cloudinary.com/djginu4oz/image/upload/v1787394349/Image_1_oohhaf.png"
];

const softwares: { title: string; description: string; link: string }[] = [
  { title: "Namaj Shikkha", description: "A project for learning Namaj in an easy way.", link: "https://namaj-shikkha-nc8p.vercel.app/" },
  { title: "Image to Link Converter", description: "A tool to convert images to links.", link: "https://image-to-link-convatar.vercel.app/" },
];

const videos: string[] = [];

export const Gallery = () => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const visiblePhotos = showAll ? photos : photos.slice(0, 4);

  return (
    <motion.section 
      id="gallery" 
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-16 text-center text-4xl font-bold text-white">{language === 'bn' ? "গ্যালারি" : "Gallery"}</h2>

      {/* Photo Gallery */}
      <div className="mb-20">
        <h3 className="mb-8 flex items-center justify-center text-2xl font-bold text-rose-300">
          <Image className="mr-3" /> {language === 'bn' ? "ফটো গ্যালারি" : "Photo Gallery"}
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visiblePhotos.map((photo, i) => (
            <img key={i} src={photo} alt={`Photo ${i + 1}`} className="rounded-xl shadow-lg w-full h-64 object-cover" />
          ))}
        </div>
        {photos.length > 4 && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="bg-rose-600 text-white px-6 py-2 rounded-full font-bold hover:bg-rose-500 transition-colors"
            >
              {showAll 
                ? (language === 'bn' ? "কম দেখুন" : "Show Less") 
                : (language === 'bn' ? "আরও দেখুন" : "See More")}
            </button>
          </div>
        )}
      </div>

      {/* Software Gallery */}
      <div className="mb-20">
        <h3 className="mb-8 flex items-center justify-center text-2xl font-bold text-rose-300">
          <Cpu className="mr-3" /> {language === 'bn' ? "সফটওয়্যার গ্যালারি" : "Software Gallery"}
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {softwares.map((sw, i) => (
            <div key={i} className="rounded-xl border border-rose-800 bg-rose-900 p-6 shadow-lg">
              <h4 className="mb-2 text-xl font-bold text-white">{sw.title}</h4>
              <p className="mb-4 text-rose-200">{sw.description}</p>
              <a href={sw.link} className="text-rose-400 hover:underline">{language === 'bn' ? "বিস্তারিত দেখুন" : "View Details"}</a>
            </div>
          ))}
        </div>
      </div>

      {/* Video Gallery */}
      <div>
        <h3 className="mb-8 flex items-center justify-center text-2xl font-bold text-rose-300">
          <Video className="mr-3" /> {language === 'bn' ? "ভিডিও গ্যালারি" : "Video Gallery"}
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {videos.map((video, i) => (
            <iframe 
              key={i}
              src={video} 
              className="aspect-video w-full rounded-xl shadow-lg"
              allowFullScreen
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
