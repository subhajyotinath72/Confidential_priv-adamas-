"use client";

import React, { useState } from "react";
import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";

export const CustomMap: React.FC = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

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

      {/* Live Map Container with Instant Loading Skeleton */}
      <div className="relative w-full h-80 sm:h-96 rounded-xl bg-slate-900 border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center">
        
        {/* Instant Animated Loading Skeleton (Visible until iframe fires onLoad) */}
        {!isMapLoaded && (
          <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-white z-10 space-y-3 animate-pulse">
            <div className="p-3.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300">
              <Compass className="w-8 h-8 animate-spin" />
            </div>
            <div className="text-center space-y-1">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Loading Live Campus Map...
              </div>
              <div className="text-[10px] text-slate-400">
                Adamas University • Barasat, Kolkata (24 Parganas North)
              </div>
            </div>
          </div>
        )}

        <iframe
          title="Adamas University Live Campus Location Map"
          src={LIVE_MAP_EMBED_SRC}
          className={`w-full h-full border-0 rounded-xl transition-opacity duration-500 ${
            isMapLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          onLoad={() => setIsMapLoaded(true)}
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



