import React from "react";
import { Phone, Mail, MapPin, ExternalLink, Award } from "lucide-react";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0D3330] text-[#F7D6C8] text-xs py-2 px-4 border-b border-white/10 hidden md:block font-sans">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left: Institution context & location */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center text-[#F7D6C8] font-bold">
            <Award className="w-3.5 h-3.5 mr-1.5 text-[#F7D6C8]" />
            Adamas University — School of Engineering & Technology
          </span>
          <span className="flex items-center text-[#F7D6C8]/80 font-medium">
            <MapPin className="w-3.5 h-3.5 mr-1 text-[#F7D6C8]" />
            Kolkata, West Bengal
          </span>
        </div>

        {/* Right: Quick Links & Contact */}
        <div className="flex items-center space-x-6 font-medium">
          <a
            href="tel:18004197423"
            className="flex items-center hover:text-white transition-colors text-[#F7D6C8]"
          >
            <Phone className="w-3.5 h-3.5 mr-1 text-[#F7D6C8]" />
            Toll Free: 012436986
          </a>
          <a
            href="mailto:biomedical@adamasuniversity.ac.in"
            className="flex items-center hover:text-white transition-colors text-[#F7D6C8]"
          >
            <Mail className="w-3.5 h-3.5 mr-1 text-[#F7D6C8]" />
            biomedical@adamasuniversity.ac.in
          </a>
          <a
            href="https://adamasuniversity.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#F7D6C8] hover:underline font-bold"
          >
            Adamas University Portal
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
