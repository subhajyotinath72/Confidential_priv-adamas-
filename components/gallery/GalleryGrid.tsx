"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Sparkles, Camera } from "lucide-react";

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Research Labs" | "Practical Training" | "Events & Seminars" | "Student Life";
  image: string;
  caption?: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // Research Labs (4)
  {
    id: "g-1",
    title: "Biomedical Engineering Laboratory",
    category: "Research Labs",
    image: "/Biomedical Engineering Laboratory.jpeg",
    caption: "State-of-the-art biomedical engineering laboratory for research and innovation."
  },
  {
    id: "g-4",
    title: "Advanced Laboratory Facilities",
    category: "Research Labs",
    image: "/Advanced Laboratory Facilities.jpeg",
    caption: "Advanced laboratory facilities supporting cutting-edge clinical research."
  },
  {
    id: "g-5",
    title: "Biomedical Laboratory Environment",
    category: "Research Labs",
    image: "/Biomedical Laboratory Environment.jpeg",
    caption: "Modern biomedical laboratory environment for academic excellence."
  },
  {
    id: "g-6",
    title: "Research & Instrumentation Laboratory",
    category: "Research Labs",
    image: "/Research & Instrumentation Laboratory.jpeg",
    caption: "Comprehensive research and instrumentation laboratory."
  },
  
  // Practical Training (4)
  {
    id: "g-8",
    title: "Hands-on Biomedical Training",
    category: "Practical Training",
    image: "/Hands-on Biomedical Training.jpeg",
    caption: "Hands-on biomedical training with advanced clinical equipment."
  },
  {
    id: "g-9",
    title: "Biomedical Engineering Practical",
    category: "Practical Training",
    image: "/Biomedical Engineering Practical.jpeg",
    caption: "Biomedical engineering practical sessions for skill development."
  },
  {
    id: "g-10",
    title: "Laboratory Practical Session",
    category: "Practical Training",
    image: "/Laboratory Practical Session.jpeg",
    caption: "Interactive laboratory practical session under faculty guidance."
  },

  // Events & Seminars (4)
  {
    id: "g-12",
    title: "Academic Seminar",
    category: "Events & Seminars",
    image: "/Academic Seminar.jpeg",
    caption: "Departmental academic seminar featuring industry experts."
  },
  {
    id: "g-13",
    title: "Departmental Academic Session",
    category: "Events & Seminars",
    image: "/Departmental Academic Session.jpeg",
    caption: "Interactive departmental academic session and presentation."
  },
  {
    id: "g-14",
    title: "Academic Event",
    category: "Events & Seminars",
    image: "/Academic Event.jpeg",
    caption: "Annual academic event showcasing research and innovation."
  },
  {
    id: "g-15",
    title: "Departmental Seminar",
    category: "Events & Seminars",
    image: "/Departmental Seminar.jpeg",
    caption: "Departmental seminar on emerging biomedical technologies."
  },

  // Student Life (3)
  {
    id: "g-16",
    title: "Student Collaboration",
    category: "Student Life",
    image: "/Student Collaboration.jpeg",
    caption: "Students collaborating on innovative biomedical projects."
  },
  {
    id: "g-17",
    title: "Student Academic Activity",
    category: "Student Life",
    image: "/Student Academic Activity.jpeg",
    caption: "Engaging student academic activity within the campus."
  },
  {
    id: "g-18",
    title: "Student Participation",
    category: "Student Life",
    image: "/Student Participation.jpeg",
    caption: "Active student participation in departmental events."
  }
];

export const GalleryGrid: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(GALLERY_PHOTOS);
  const [shuffledAll, setShuffledAll] = useState<GalleryPhoto[]>(GALLERY_PHOTOS);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  React.useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.gallery && Array.isArray(data.gallery) && data.gallery.length > 0) {
          setPhotos(data.gallery);
        }
      })
      .catch((err) => console.error("Could not fetch live gallery:", err));
  }, []);

  React.useEffect(() => {
    // Shuffle photos randomly whenever the underlying photos array changes
    setShuffledAll([...photos].sort(() => Math.random() - 0.5));
  }, [photos]);

  const categories = ["All", "Research Labs", "Practical Training", "Events & Seminars", "Student Life"];

  const filteredPhotos = activeCategory === "All"
    ? shuffledAll
    : photos.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      
      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === cat
                ? "bg-[#103E3B] text-white shadow-md scale-105"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 12 Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative h-64 rounded-2xl overflow-hidden bg-slate-100 border border-[#E2DDD3] shadow-xs cursor-pointer"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#103E3B]/90 via-[#103E3B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end space-y-2">
              <span className="self-start px-2.5 py-0.5 rounded-full text-[9px] font-bold text-[#F7D6C8] bg-white/20 backdrop-blur-md uppercase tracking-wider">
                {photo.category}
              </span>
              <h4 className="text-sm font-serif font-bold text-white leading-snug">
                {photo.title}
              </h4>
              <div className="flex items-center text-[10px] text-slate-200 font-sans pt-1">
                <span>Click to expand</span>
                <Maximize2 className="w-3 h-3 ml-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Modal Image */}
                <div className="lg:w-2/3 max-h-[70vh] bg-black flex items-center justify-center">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="max-h-[70vh] w-full object-contain"
                  />
                </div>

                {/* Modal Description */}
                <div className="lg:w-1/3 p-6 sm:p-8 space-y-4 text-white flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-amber-300 bg-amber-500/20 border border-amber-500/30 uppercase tracking-wider">
                      {selectedPhoto.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white leading-snug">
                      {selectedPhoto.title}
                    </h3>
                    {selectedPhoto.caption && (
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {selectedPhoto.caption}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                    Adamas University — Department of Biomedical Engineering Gallery
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
