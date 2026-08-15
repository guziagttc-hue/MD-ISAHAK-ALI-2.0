import { motion } from "motion/react";
import { Image, Cpu, Video } from 'lucide-react';

const photos: string[] = [];

const softwares: { title: string; description: string; link: string }[] = [
  { title: "নামাজ শিক্ষা", description: "সহজ উপায়ে নামাজ শিক্ষা করার একটি প্রজেক্ট।", link: "https://namaj-shikkha-nc8p.vercel.app/" },
];

const videos: string[] = [];

export const Gallery = () => (
  <motion.section 
    id="gallery" 
    className="container mx-auto px-6 py-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="mb-16 text-center text-4xl font-bold text-white">গ্যালারি</h2>

    {/* Photo Gallery */}
    <div className="mb-20">
      <h3 className="mb-8 flex items-center justify-center text-2xl font-bold text-rose-300">
        <Image className="mr-3" /> ফটো গ্যালারি
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <img key={i} src={photo} alt={`Photo ${i + 1}`} className="rounded-xl shadow-lg" />
        ))}
      </div>
    </div>

    {/* Software Gallery */}
    <div className="mb-20">
      <h3 className="mb-8 flex items-center justify-center text-2xl font-bold text-rose-300">
        <Cpu className="mr-3" /> সফটওয়্যার গ্যালারি
      </h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {softwares.map((sw, i) => (
          <div key={i} className="rounded-xl border border-rose-800 bg-rose-900 p-6 shadow-lg">
            <h4 className="mb-2 text-xl font-bold text-white">{sw.title}</h4>
            <p className="mb-4 text-rose-200">{sw.description}</p>
            <a href={sw.link} className="text-rose-400 hover:underline">বিস্তারিত দেখুন</a>
          </div>
        ))}
      </div>
    </div>

    {/* Video Gallery */}
    <div>
      <h3 className="mb-8 flex items-center justify-center text-2xl font-bold text-rose-300">
        <Video className="mr-3" /> ভিডিও গ্যালারি
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
