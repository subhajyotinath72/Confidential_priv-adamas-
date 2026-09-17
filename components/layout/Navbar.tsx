"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Activity,
  Sparkles
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    {
      name: "Admission",
      href: "/admission",
      dropdown: [
        { name: "B.Tech in Biomedical Eng.", href: "/admission#btech-bme", desc: "4-Year Undergraduate Honors Program" },
      ],
    },
    {
      name: "People",
      href: "/people",
      dropdown: [
        { name: "Faculty Directory", href: "/people#faculty", desc: "Professors & Academic Leads" },
        { name: "Research Scholars", href: "/people#scholars", desc: "Ph.D. & M.Tech Researchers" },
        { name: "Technical & Lab Staff", href: "/people#staff", desc: "Cleanroom & Electronics Engineers" },
        { name: "Distinguished Alumni", href: "/people#alumni", desc: "MedTech & Academia Leaders" },
      ],
    },

    {
      name: "Research & Collaboration",
      href: "/research",
      dropdown: [
        { name: "Research Tracks & Centers", href: "/research", desc: "Biomedical R&D, 3D Bioprinting & AI" },
        { name: "Hospital Clinical MoUs", href: "/partnerships#hospitals", desc: "Super-Specialty Hospital Networks" },
        { name: "MedTech Industry Leaders", href: "/partnerships#industry", desc: "Siemens, GE, Philips & Medtronic" },
        { name: "MedTech Startup Incubator", href: "/partnerships#incubator", desc: "Seed Grants & Patenting Cell" },
      ],
    },
    { name: "News & Events", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Admin Portal", href: "/admin" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#103E3B]/95 text-[#F7D6C8] backdrop-blur-md shadow-xl py-2.5 border-b border-white/10"
          : "bg-[#103E3B] text-[#F7D6C8] py-3.5 border-b border-white/10"
        }`}
    >
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-2 lg:gap-4">

          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
            {/* Adamas NAAC Grade A Logo */}
            <div className="h-10 sm:h-12 px-2 rounded-md bg-white p-0.5 border border-[#F7D6C8]/40 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
              <img
                src="/adamas-naac-logo.png"
                alt="Adamas University NAAC Grade A Logo"
                className="h-full w-auto object-contain rounded-xs"
              />
            </div>


            <div className="flex flex-col">
              <span className="text-[12px] font-bold tracking-widest text-[#F7D6C8] uppercase leading-tight">
                ADAMAS UNIVERSITY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 flex-shrink">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center px-2 xl:px-3 py-1.5 rounded text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-colors whitespace-nowrap ${isActive
                          ? "text-[#103E3B] bg-[#F7D6C8]"
                          : "text-[#F7D6C8] hover:text-white hover:bg-white/10"
                        }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-2.5 h-2.5 ml-0.5 xl:ml-1 text-[#F7D6C8]" />
                    </Link>

                    {/* Mega-menu Dropdown */}
                    {activeDropdown === link.name && (
                      <div className="absolute left-0 top-full pt-2 w-72 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="bg-[#103E3B] border border-white/20 rounded-xl shadow-2xl p-2.5 backdrop-blur-xl">
                          <div className="text-[10px] font-bold text-[#F7D6C8] uppercase px-2 py-1 mb-1 border-b border-white/10">
                            {link.name} Options
                          </div>
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block p-2 rounded-lg hover:bg-white/10 transition-colors group"
                            >
                              <div className="text-xs font-bold text-white group-hover:text-[#F7D6C8]">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-[#F7D6C8]/70 line-clamp-1 mt-0.5">
                                {item.desc}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2 xl:px-3 py-1.5 rounded text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-colors whitespace-nowrap ${isActive
                      ? "text-[#103E3B] bg-[#F7D6C8]"
                      : "text-[#F7D6C8] hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-3 xl:px-4 py-1.5 text-[11px] xl:text-xs font-bold tracking-wider text-[#103E3B] bg-[#F7D6C8] hover:bg-[#FCECE4] rounded-full shadow-md uppercase transition-all whitespace-nowrap"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F7D6C8] hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#103E3B] border-b border-white/10 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-bold text-white hover:bg-white/10 uppercase tracking-wider"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="pl-4 space-y-1 mt-1 border-l border-white/10 ml-2">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1 rounded-md text-xs text-[#F7D6C8]/80 hover:text-[#F7D6C8]"
                    >
                      • {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-2.5 text-xs font-bold text-[#103E3B] bg-[#F7D6C8] rounded-full shadow-md uppercase tracking-wider"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
