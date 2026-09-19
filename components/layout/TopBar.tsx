import React from "react";
import { Phone, Mail, MapPin, ExternalLink, Award } from "lucide-react";

export const TopBar: React.FC = () => {
  return (
    <div className="relative z-30 bg-[#0D3330] text-[#ffffff] text-xs py-2 border-b border-white/10 hidden md:block font-sans">
      <div className="w-full px-2 sm:px-4 lg:px-6 flex flex-wrap items-center justify-between gap-4">
        {/* Left: Institution context & location */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center text-[#ffffff] font-bold">
            <Award className="w-3.5 h-3.5 mr-1.5 text-[#ffffff]" />
            Adamas University — School of Engineering & Technology
          </span>
          <span className="flex items-center text-[#ffffff]/80 font-medium">
            <MapPin className="w-3.5 h-3.5 mr-1 text-[#ffffff]" />
            Kolkata, West Bengal
          </span>
        </div>

        {/* Right: Quick Links & Contact */}
        <div className="flex items-center space-x-6 font-medium">
          <a
            href="tel:18004197423"
            className="flex items-center hover:text-yellow-100 transition-colors text-[#ffffff]"
          >
            <Phone className="w-3.5 h-3.5 mr-1 text-[#ffffff]" />
            Toll Free: 18004197423
          </a>
          <a
            href="mailto:biomedical@adamasuniversity.ac.in"
            className="flex items-center hover:text-yellow-100 transition-colors text-[#ffffff]"
          >
            <Mail className="w-3.5 h-3.5 mr-1 text-[#ffffff]" />
            biomedical@adamasuniversity.ac.in
          </a>
          <a
            href="https://adamasuniversity.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline transition-colors text-[#ffffff] font-bold"
          >
            Adamas University Portal
            <ExternalLink className="w-3 h-3 ml-1 text-[#ffffff]" />
          </a>
        </div>
      </div>
    </div>
  );
};
