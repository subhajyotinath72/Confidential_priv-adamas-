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
    <section className="w-full relative overflow-hidden bg-[#103E3B] border-b border-white/10">
      {/* 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        
        {/* Left Half: Video Player Container */}
        <div className="relative w-full h-[45vh] sm:h-[60vh] lg:h-[75vh] bg-slate-950 overflow-hidden border-r border-white/10">
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

          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#103E3B]/70 via-transparent to-black/30 pointer-events-none" />

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

        {/* Right Half: Blank Space */}
        <div className="hidden lg:block w-full h-[75vh] bg-[#103E3B]" />

      </div>
    </section>
  );
};
