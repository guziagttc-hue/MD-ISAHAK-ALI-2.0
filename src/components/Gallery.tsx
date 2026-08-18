import { motion } from "motion/react";
import { Image, Cpu, Video } from 'lucide-react';

const photos: string[] = ["https://res.cloudinary.com/djginu4oz/image/upload/v1786851749/9f8f9bc4e6d4441ab55f47f5a34b9778_zmetmy.jpg"];

const softwares: { title: string; description: string; link: string }[] = [
  { title: "Namaj Shikkha", description: "A project for learning Namaj in an easy way.", link: "https://namaj-shikkha-nc8p.vercel.app/" },
  { title: "Image to Link Converter", description: "A tool to convert images to links.", link: "https://image-to-link-convatar.vercel.app/" },
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
    <h2 className="mb-16 text-center text-4xl font-bold text-white">Gallery</h2>

    {/* Photo Gallery */}
    <div className="mb-20">
      <h3 className="mb-8 flex items-center justify-center text-2xl font-bold text-rose-300">
        <Image className="mr-3" /> Photo Gallery
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
        <Cpu className="mr-3" /> Software Gallery
      </h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {softwares.map((sw, i) => (
          <div key={i} className="rounded-xl border border-rose-800 bg-rose-900 p-6 shadow-lg">
            <h4 className="mb-2 text-xl font-bold text-white">{sw.title}</h4>
            <p className="mb-4 text-rose-200">{sw.description}</p>
            <a href={sw.link} className="text-rose-400 hover:underline">View Details</a>
          </div>
        ))}
      </div>
    </div>

    {/* Video Gallery */}
    <div>
      <h3 className="mb-8 flex items-center justify-center text-2xl font-bold text-rose-300">
        <Video className="mr-3" /> Video Gallery
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
