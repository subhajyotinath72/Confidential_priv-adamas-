"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Activity,
  Sparkles
} from "lucide-react";
import { useSiteSettings } from "@/components/providers/SiteSettingsContext";

export const Navbar: React.FC = () => {
  const { settings } = useSiteSettings();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const universityName = settings?.general?.universityName || "Adamas University, Kolkata";
  const departmentName = settings?.general?.departmentName || "Department of Biomedical Engineering";

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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

  // Proactively prefetch tab routes so tab switching is instantaneous with zero delay
  useEffect(() => {
    const routesToPrefetch = [
      "/",
      "/programs",
      "/admission",
      "/people",
      "/people/alumni",
      "/research",
      "/partnerships",
      "/news",
      "/gallery",
      "/admin",
      "/contact"
    ];
    routesToPrefetch.forEach((route) => {
      try {
        router.prefetch(route);
      } catch {
        // ignore
      }
    });
  }, [router]);

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
        { name: "Distinguished Alumni", href: "/people/alumni", desc: "MedTech & Academia Leaders" },
      ],
    },

    {
      name: "Research & Collaboration",
      href: "/research",
      dropdown: [
        { name: "Research Tracks & Centers", href: "/research", desc: "Biomedical R&D, 3D Bioprinting & AI" },
        { name: "Hospital Partners", href: "/partnerships", desc: "Super-Specialty Clinical & Healthcare Networks" },
      ],
    },
    { name: "News & Events", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Admin Portal", href: "/admin" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? "text-white backdrop-blur-md shadow-xl py-1 border-b border-white/10"
        : "text-white py-1.5 border-b border-white/10"
        }`}
      style={{ backgroundColor: "var(--color-primary, #4A1525)" }}
    >
      {/* 2.5px Interactive Scroll Progress Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#D4AF37] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />
      <div className="w-full px-2 sm:px-3 lg:px-2.5 xl:px-4 2xl:px-6">
        <div className="flex items-center justify-between gap-1 xl:gap-2">

          {/* Brand Logo */}
          <Link href="/" prefetch={true} className="flex items-center space-x-1.5 xl:space-x-2 group flex-shrink-0">
            {/* Adamas NAAC Grade A Logo */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-[38px] md:h-[38px] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/adamas-round-logo.png"
                alt="Adamas University NAAC Grade A Logo"
                className="w-full h-full object-contain aspect-square"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs lg:text-[11px] xl:text-[12px] 2xl:text-[13.5px] font-extrabold tracking-tight text-white uppercase leading-tight whitespace-nowrap">
                {departmentName}
              </span>
              <span className="text-[7px] sm:text-[8px] lg:text-[7.5px] xl:text-[8.5px] 2xl:text-[9px] font-bold tracking-wider text-[#F7D6C8] uppercase leading-none whitespace-nowrap">
                {universityName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 flex-shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      setActiveDropdown(link.name);
                      router.prefetch(link.href);
                    }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      prefetch={true}
                      className={`flex items-center px-1 lg:px-1.5 xl:px-2 py-1 xl:py-1.5 rounded-lg text-[9px] lg:text-[9.5px] xl:text-[10.5px] 2xl:text-[11.5px] font-bold tracking-tight xl:tracking-normal uppercase transition-all duration-200 whitespace-nowrap ${isActive
                        ? "text-white bg-white/20 backdrop-blur-md border border-white/30 shadow-xs"
                        : "text-white/90 hover:text-white hover:bg-white/15 hover:backdrop-blur-md border border-transparent hover:border-white/20"
                        }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-2.5 h-2.5 ml-0.5 text-white/80 group-hover:text-white" />
                    </Link>

                    {/* Mega-menu Dropdown */}
                    {activeDropdown === link.name && (
                      <div className="absolute left-0 top-full pt-2 w-72 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div
                          className="border border-white/20 rounded-xl shadow-2xl p-2.5 backdrop-blur-xl"
                          style={{
                            backgroundColor:
                              "rgba(var(--color-nav-dropdown-rgb, 51, 14, 26), 0.96)",
                          }}
                        >
                          <div className="text-[10px] font-bold text-white uppercase px-2 py-1 mb-1 border-b border-white/10">
                            {link.name} Options
                          </div>
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              prefetch={true}
                              onClick={() => setActiveDropdown(null)}
                              className="block p-2 rounded-lg hover:bg-white/15 hover:backdrop-blur-md transition-all duration-200 group border border-transparent hover:border-white/15"
                            >
                              <div className="text-xs font-bold text-white group-hover:text-white">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-white/80 line-clamp-1 mt-0.5">
                                {item.desc}
                              </div>
                            </Link>
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
                  prefetch={true}
                  onMouseEnter={() => router.prefetch(link.href)}
                  className={`px-1 lg:px-1.5 xl:px-2 py-1 xl:py-1.5 rounded-lg text-[9px] lg:text-[9.5px] xl:text-[10.5px] 2xl:text-[11.5px] font-bold tracking-tight xl:tracking-normal uppercase transition-all duration-200 whitespace-nowrap ${isActive
                    ? "text-white bg-white/20 backdrop-blur-md border border-white/30 shadow-xs"
                    : "text-white/90 hover:text-white hover:bg-white/15 hover:backdrop-blur-md border border-transparent hover:border-white/20"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              prefetch={true}
              onMouseEnter={() => router.prefetch("/contact")}
              className="shine-sweep inline-flex items-center justify-center px-2.5 xl:px-3 py-1 xl:py-1.5 text-[9px] lg:text-[9.5px] xl:text-[10.5px] 2xl:text-[11px] font-bold tracking-normal xl:tracking-wider text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 hover:border-white/40 rounded-full shadow-md uppercase transition-all duration-200 whitespace-nowrap hover:shadow-lg hover:scale-[1.02]"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/15 hover:backdrop-blur-md border border-transparent hover:border-white/20 transition-all duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200"
          style={{
            backgroundColor:
              "rgba(var(--color-nav-dropdown-rgb, 51, 14, 26), 0.96)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name}>
                <Link
                  href={link.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-200 ${isActive
                    ? "text-white bg-white/20 backdrop-blur-md border border-white/30"
                    : "text-white/90 hover:text-white hover:bg-white/15 hover:backdrop-blur-md border border-transparent hover:border-white/20"
                    }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 space-y-1 mt-1 border-l border-white/10 ml-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        prefetch={true}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1 rounded-md text-xs text-white/80 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm transition-colors"
                      >
                        • {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/contact"
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-2.5 text-xs font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 hover:border-white/40 rounded-full shadow-md uppercase tracking-wider transition-all duration-200"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
