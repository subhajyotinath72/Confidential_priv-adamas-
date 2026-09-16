"use client";

import React, { useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

interface FrontVideoProps {
  /**
   * Replace this URL with your custom video file path (e.g., "/videos/intro.mp4" or a direct video link)
   */
  src?: string;
  poster?: string;
}

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
    <section className="w-full relative overflow-hidden bg-slate-900 border-b border-slate-200">
      {/* Full-bleed Edge-to-Edge Video Container */}
      <div className="relative w-full h-[45vh] sm:h-[60vh] lg:h-[75vh] bg-slate-950">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#103E3B]/70 via-transparent to-black/40 pointer-events-none" />

        {/* Top Floating Badge Bar */}
        <div className="absolute top-4 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-white uppercase">
                Welcome to Department of Biomedical Engineering
              </span>
            </div>

            <span className="text-[10px] font-bold tracking-widest text-[#F7D6C8] uppercase bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 hidden sm:inline-block">
              Adamas University Kolkata
            </span>
          </div>
        </div>

        {/* Bottom Floating Video Controls */}
        <div className="absolute bottom-6 right-6 z-10 flex items-center space-x-3">
          <button
            onClick={togglePlay}
            type="button"
            className="p-3 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-105 shadow-lg"
            title={isPlaying ? "Pause Video" : "Play Video"}
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          <button
            onClick={toggleMute}
            type="button"
            className="p-3 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-105 shadow-lg"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
            aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </section>
  );
};
