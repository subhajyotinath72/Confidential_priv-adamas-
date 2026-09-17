"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export const CustomMap: React.FC = () => {
  const BING_MAP_URL =
    "https://www.bing.com/maps/search?name=Adamas+University&trfc=&mepi=0%7E%7EEmbedded%7ELargeMapLink&FORM=MPSRPL&style=r&ss=id.ypid%3AYNB328D7AD71F2FCAD&q=Adamas+University&ppois=22.73830795288086_88.45661926269531_Adamas+University&cp=22.738308%7E88.456619&lvl=15";

  // Fast Google Maps embed for coordinates 22.738308, 88.456619 (Adamas University)
  const LIVE_MAP_EMBED_SRC =
    "https://maps.google.com/maps?q=22.738308,88.456619&hl=en&z=15&output=embed";

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-4 sm:p-6 relative text-slate-900">
      
      {/* Map Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-4">
        <div>
          <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest block mb-0.5">
            Campus Live Location
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0" />
            Adamas University Campus • Barasat, Kolkata
          </h3>
        </div>

        <a
          href={BING_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-bold px-3.5 py-2 rounded-xl bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100 transition-colors shadow-2xs self-start sm:self-auto"
        >
          <span>Open in Bing Maps</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
        </a>
      </div>

      {/* Direct Native Live Map Display */}
      <div className="relative w-full h-80 sm:h-96 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shadow-inner">
        <iframe
          title="Adamas University Live Campus Location Map"
          src={LIVE_MAP_EMBED_SRC}
          className="w-full h-full border-0 rounded-xl"
          allowFullScreen
        />
      </div>

      {/* Address & Direction Info Footer */}
      <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>Barasat–Barrackpore Road, Barbaria, P.O Jagannathpur, Kolkata – 700126, West Bengal</span>
        </div>
        <div className="flex items-center space-x-1 text-teal-800 font-semibold">
          <Navigation className="w-3.5 h-3.5" />
          <span>15km from Netaji Subhash Chandra Bose Int'l Airport</span>
        </div>
      </div>

    </div>
  );
};




