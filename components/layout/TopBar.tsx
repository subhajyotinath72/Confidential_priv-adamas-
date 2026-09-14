"use client";

import React from "react";
import { Phone, Mail, MapPin, ExternalLink, Award } from "lucide-react";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-adamas-navy-dark text-slate-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left: Institution context & location */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center text-adamas-gold font-medium">
            <Award className="w-3.5 h-3.5 mr-1.5 text-adamas-gold" />
            Adamas University — School of Engineering & Technology
          </span>
          <span className="flex items-center text-slate-400">
            <MapPin className="w-3.5 h-3.5 mr-1 text-adamas-teal-accent" />
            Kolkata, West Bengal
          </span>
        </div>

        {/* Right: Quick Links & Contact */}
        <div className="flex items-center space-x-6">
          <a
            href="tel:18004197423"
            className="flex items-center hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1 text-adamas-teal-accent" />
            Toll Free: 1800-419-7423
          </a>
          <a
            href="mailto:biomedical@adamasuniversity.ac.in"
            className="flex items-center hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 mr-1 text-adamas-teal-accent" />
            biomedical@adamasuniversity.ac.in
          </a>
          <a
            href="https://adamasuniversity.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-adamas-gold hover:underline font-medium"
          >
            Adamas University Portal
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
