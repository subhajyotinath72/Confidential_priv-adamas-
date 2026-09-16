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
    {
      name: "Admission",
      href: "/admission",
      dropdown: [
        { name: "B.Tech in Biomedical Eng.", href: "/admission#btech-bme", desc: "4-Year Undergraduate Honors" },
        { name: "M.Tech in Biomedical Eng.", href: "/admission#mtech-bme", desc: "2-Year Postgraduate R&D" },
        { name: "Ph.D. Doctoral Fellowships", href: "/admission#phd-bme", desc: "Research Doctorate Fellowships" },
        { name: "AUAT Admission 2026", href: "https://adamasuniversity.ac.in/adamas-university/#", desc: "Official Online Application Portal" },
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
      name: "Opportunities",
      href: "/opportunities",
      dropdown: [
        { name: "Student Fellowships & Grants", href: "/opportunities#fellowships", desc: "DST & University Seed Grants" },
        { name: "Clinical Internships", href: "/opportunities#internships", desc: "Kolkata Hospital Rotations" },
        { name: "Career & Research Openings", href: "/opportunities#careers", desc: "RA, JRF & Postdoc Positions" },
      ],
    },
    {
      name: "Collaboration",
      href: "/collaboration",
      dropdown: [
        { name: "Hospital Clinical MoUs", href: "/partnerships#hospitals", desc: "Super-Specialty Hospital Networks" },
        { name: "MedTech Industry Leaders", href: "/partnerships#industry", desc: "Siemens, GE, Philips & Medtronic" },
        { name: "MedTech Startup Incubator", href: "/partnerships#incubator", desc: "Seed Grants & Patenting Cell" },
      ],
    },
    {
      name: "Research",
      href: "/research",
      dropdown: [
        { name: "01 Instrumentation & Biosensors", href: "/research#01", desc: "ECG/EEG, Biosensors, Imaging" },
        { name: "02 Biomaterials & Tissue Eng.", href: "/research#02", desc: "3D Bioprinting, Implants, Scaffolds" },
        { name: "03 Health Informatics & AI", href: "/research#03", desc: "Medical AI, Tele-ICU, Wearable Tech" },
        { name: "Interdisciplinary Centers", href: "/research#centers", desc: "6 Specialized R&D Facilities" },
      ],
    },
    { name: "Grievances", href: "/grievances" },
    { name: "News & Events", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1B365D]/95 text-white backdrop-blur-md shadow-xl py-2.5"
          : "bg-[#1B365D] text-white py-3.5 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="w-9 h-9 rounded-md bg-[#C59B27]/20 p-1 border border-[#C59B27]/50 flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#1B365D] rounded flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#C59B27]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold tracking-widest text-[#C59B27] uppercase">
                ADAMAS UNIVERSITY
              </span>
              <span className="text-sm font-serif font-semibold text-white tracking-tight leading-tight group-hover:text-[#C59B27] transition-colors">
                Department of Biomedical Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
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
                      className={`flex items-center px-3 py-1.5 rounded text-[11px] font-bold tracking-wider uppercase transition-colors ${
                        isActive
                          ? "text-[#C59B27] bg-white/10"
                          : "text-slate-200 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3 h-3 ml-1 text-slate-300" />
                    </Link>

                    {/* Mega-menu Dropdown */}
                    {activeDropdown === link.name && (
                      <div className="absolute left-0 top-full pt-2 w-72 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-[#1B365D] border border-white/20 rounded-xl shadow-2xl p-2.5 backdrop-blur-xl">
                          <div className="text-[10px] font-bold text-[#C59B27] uppercase px-2 py-1 mb-1 border-b border-white/10">
                            {link.name} Options
                          </div>
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block p-2 rounded-lg hover:bg-white/10 transition-colors group"
                            >
                              <div className="text-xs font-bold text-white group-hover:text-[#C59B27]">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">
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
                  className={`px-3 py-1.5 rounded text-[11px] font-bold tracking-wider uppercase transition-colors ${
                    isActive
                      ? "text-[#C59B27] bg-white/10"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-bold tracking-wider text-[#1B365D] bg-[#C59B27] hover:bg-[#D4AF37] rounded-full shadow-sm uppercase transition-all"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1B365D] border-b border-white/10 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
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
                      className="block px-3 py-1 rounded-md text-xs text-slate-200 hover:text-[#C59B27]"
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
              className="w-full text-center block py-2.5 text-xs font-bold text-[#1B365D] bg-[#C59B27] rounded-full shadow-md uppercase tracking-wider"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
