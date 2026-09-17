"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Sparkles, Camera } from "lucide-react";

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Research Labs" | "Clinical Rotations" | "Events & Seminars" | "Student Life";
  image: string;
  caption?: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g-1",
    title: "Neural Imaging & Bio-AI Analytics",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    caption: "Students analyzing high-speed electroencephalogram and neuro-imaging datasets using deep learning clusters."
  },
  {
    id: "g-2",
    title: "Microfluidic Biosensor Fabrication",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    caption: "Cleanroom micro-lithography and microfluidic channel fabrication for point-of-care diagnostic chips."
  },
  {
    id: "g-3",
    title: "3D Cellular Tissue Bioprinting",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    caption: "DST-SERB funded bio-ink extrusion bioprinter creating vascularized cardiac tissue constructs."
  },
  {
    id: "g-4",
    title: "Neuro-Prosthetics & Rehabilitation",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    caption: "Electromyography (EMG) surface sensor calibration for bionic prosthetic limbs."
  },
  {
    id: "g-5",
    title: "Confocal Fluorescence Microscopy",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    caption: "High-resolution cellular imaging of fluorescently tagged biomaterial scaffold matrices."
  },
  {
    id: "g-6",
    title: "EEG Signal Processing Workshop",
    category: "Events & Seminars",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    caption: "Hands-on signal acquisition workshop featuring multichannel brain-computer interface headsets."
  },
  {
    id: "g-7",
    title: "Neonatal Incubator Prototyping",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    caption: "Student design team calibrating thermal sensors for low-cost infant incubators."
  },
  {
    id: "g-8",
    title: "Hospital ICU Clinical Rotation",
    category: "Clinical Rotations",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    caption: "3rd-year B.Tech students performing diagnostic equipment audits in partner super-specialty hospitals."
  },
  {
    id: "g-9",
    title: "Biomaterials Polymer Synthesis",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    caption: "Polymer scaffold synthesis for drug delivery nanocarriers."
  },
  {
    id: "g-10",
    title: "Prosthetic Arm EMG Calibration",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    caption: "Biomedical hardware lab setup for multi-channel sensor digitizing."
  },
  {
    id: "g-11",
    title: "MedTech Hackathon & Expo",
    category: "Events & Seminars",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    caption: "Annual MedTech innovation competition showcasing student healthcare prototypes."
  },
  {
    id: "g-12",
    title: "Radiology Equipment Calibration",
    category: "Clinical Rotations",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    caption: "Clinical rotation training at CT & MRI imaging centers."
  }
];

export const GalleryGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = ["All", "Research Labs", "Clinical Rotations", "Events & Seminars", "Student Life"];

  const filteredPhotos = activeCategory === "All"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

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
