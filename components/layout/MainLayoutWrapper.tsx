"use client";

import React from "react";

interface MainLayoutWrapperProps {
  children: React.ReactNode;
}

export const MainLayoutWrapper: React.FC<MainLayoutWrapperProps> = ({ children }) => {
  return (
    <main className="flex-grow text-[#103E3B] relative overflow-hidden">
      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default MainLayoutWrapper;
