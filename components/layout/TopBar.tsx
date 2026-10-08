"use client";

import React from "react";
import { Phone, Mail, MapPin, ExternalLink, Award } from "lucide-react";
import { useSiteSettings } from "@/components/providers/SiteSettingsContext";

export const TopBar: React.FC = () => {
  const { settings } = useSiteSettings();

  const universityName = settings?.general?.universityName || "Adamas University";
  const schoolName = settings?.general?.schoolName || "School of Engineering & Technology";
  const helpline = settings?.contact?.admissionHelpline || "18004197423";
  const email = settings?.contact?.email || "biomedical@adamasuniversity.ac.in";
  const portalUrl = settings?.general?.portalUrl || "https://adamasuniversity.ac.in";

  return (
    <div
      className="relative z-30 text-[#ffffff] text-xs py-2 border-b border-white/10 hidden md:block font-sans transition-colors"
      style={{ backgroundColor: "var(--color-primary-dark, #330E1A)" }}
    >
      <div className="w-full px-2 sm:px-4 lg:px-6 flex flex-wrap items-center justify-between gap-4">
        {/* Left: Institution context & location */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center text-[#ffffff] font-bold">
            <Award className="w-3.5 h-3.5 mr-1.5 text-[#ffffff]" />
            {universityName} — {schoolName}
          </span>
          <span className="flex items-center text-[#ffffff]/80 font-medium">
            <MapPin className="w-3.5 h-3.5 mr-1 text-[#ffffff]" />
            Kolkata, West Bengal
          </span>
        </div>

        {/* Right: Quick Links & Contact */}
        <div className="flex items-center space-x-6 font-medium">
          <a
            href={`tel:${helpline.replace(/[^0-9+]/g, "")}`}
            className="flex items-center hover:text-yellow-100 transition-colors text-[#ffffff]"
          >
            <Phone className="w-3.5 h-3.5 mr-1 text-[#ffffff]" />
            Toll Free: {helpline}
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center hover:text-yellow-100 transition-colors text-[#ffffff]"
          >
            <Mail className="w-3.5 h-3.5 mr-1 text-[#ffffff]" />
            {email}
          </a>
          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline transition-colors text-[#ffffff] font-bold"
          >
            University Portal
            <ExternalLink className="w-3 h-3 ml-1 text-[#ffffff]" />
          </a>
        </div>
      </div>
    </div>
  );
};
