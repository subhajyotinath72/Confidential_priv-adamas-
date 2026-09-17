"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Volume2, VolumeX, Play, Pause, ChevronRight, ArrowRight } from "lucide-react";

interface FrontVideoProps {
  src?: string;
  poster?: string;
}

const LATEST_ANNOUNCEMENTS = [
  {
    id: "news-1",
    title: "Adamas BME Faculty Secures ₹42 Lakh DST-SERB Research Grant for 3D Bioprinting",
    isNew: true,
  },
  {
    id: "news-2",
    title: "MoU Signed with Premier Kolkata Hospitals for B.Tech Student Clinical Rotations",
    isNew: true,
  },
  {
    id: "news-3",
    title: "Biomedical Students Win Top Honor at National Healthcare Hackathon 2026 for 'StethoAI'",
    isNew: false,
  },
  {
    id: "evt-1",
    title: "International Webinar on AI-Driven Cancer Radiology (Johns Hopkins University)",
    isNew: true,
  },
  {
    id: "evt-2",
    title: "Hands-On Workshop on Microfluidic Biosensor Fabrication in SET Cleanroom Suite",
    isNew: false,
  },
  {
    id: "evt-3",
    title: "Biomedical Industry-Academia Conclave & MedTech Expo 2026 (Siemens & GE Health)",
    isNew: false,
  },
];

export const FrontVideo: React.FC<FrontVideoProps> = ({
  src = "/adamas-virtual-tour.mp4",
  poster = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full relative overflow-hidden bg-[#103E3B] border-b border-white/10">
      {/* 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center">
        
        {/* Left Half: Video Player Container */}
        <div className="relative w-full aspect-video bg-black overflow-hidden border-r border-white/10 flex items-center justify-center">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />

          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#103E3B]/60 via-transparent to-black/30 pointer-events-none" />

          {/* Floating Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-white uppercase">
                Department of Biomedical Engineering
              </span>
            </div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center space-x-2">
            <button
              onClick={togglePlay}
              type="button"
              className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-105 shadow-lg cursor-pointer"
              title={isPlaying ? "Pause Video" : "Play Video"}
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            <button
              onClick={toggleMute}
              type="button"
              className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-105 shadow-lg cursor-pointer"
              title={isMuted ? "Unmute Sound" : "Mute Sound"}
              aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Right Half: NTA-Style LATEST @ BME Ticker Box */}
        <div className="w-full aspect-video bg-[#0D3330] p-3 sm:p-5 flex flex-col justify-between relative overflow-hidden border-l border-white/10">
          
          <div className="bg-white rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden border border-slate-200">
            
            {/* Header Banner */}
            <div className="bg-[#0B2A28] text-white px-5 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#F7D6C8]">
                  LATEST @ BME
                </h3>
              </div>
              <span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider hidden sm:inline">
                Live Announcements
              </span>
            </div>

            {/* Vertical Ticker Scroll Window */}
            <div className="flex-1 overflow-hidden relative p-4 group">
              <div className="animate-vertical-ticker space-y-4">
                {[...LATEST_ANNOUNCEMENTS, ...LATEST_ANNOUNCEMENTS].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-800 border-b border-slate-100 pb-3">
                    <ChevronRight className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 leading-snug">
                      <span className="font-semibold text-slate-800">
                        {item.title}
                      </span>
                      <Link
                        href="/news"
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-bold ml-2 underline transition-colors whitespace-nowrap"
                      >
                        <span>Read More</span>
                      </Link>
                      {item.isNew && (
                        <span className="bg-amber-500 text-white text-[8.5px] font-extrabold px-1.5 py-0.5 rounded ml-1.5 uppercase tracking-wide inline-block animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action Button */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[10px] text-slate-500 font-medium hidden sm:inline">Hover ticker to pause scroll</span>
              <Link
                href="/news"
                className="inline-flex items-center px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-[#103E3B] hover:bg-[#0C2E2C] transition-colors shadow-sm ml-auto"
              >
                <span>ARCHIVE / VIEW ALL</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 text-amber-300" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
