"use client";

import React from "react";
import dynamic from "next/dynamic";

const InteractiveBlockGrid = dynamic(
  () => import("@/components/ui/InteractiveBlockGrid"),
  { ssr: false }
);

interface MainLayoutWrapperProps {
  children: React.ReactNode;
}

export const MainLayoutWrapper: React.FC<MainLayoutWrapperProps> = ({ children }) => {
  return (
    <main className="flex-grow text-[#103E3B] relative overflow-hidden">
      {/* Interactive 3D Cursor-Elevation Block Grid for Main Body across all tabs */}
      <InteractiveBlockGrid />
      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default MainLayoutWrapper;
