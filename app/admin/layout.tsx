"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Activity,
  Users,
  Newspaper,
  FlaskConical,
  Image as ImageIcon,
  LogOut,
  LayoutDashboard,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // Skip layout wrapper for login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      setLoggingOut(false);
    }
  };

  const navItems = [
    { name: "Dashboard Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Faculty & Staff Directory", href: "/admin/faculty", icon: Users },
    { name: "News, Events & MoUs", href: "/admin/news", icon: Newspaper },
    { name: "Research & Labs", href: "/admin/research", icon: FlaskConical },
    { name: "Image & Media Gallery", href: "/admin/media", icon: ImageIcon },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-slate-800 flex flex-col font-sans">
      
      {/* Top Admin Bar */}
      <header className="bg-[#1B365D] text-white border-b border-white/10 sticky top-0 z-40 px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link href="/admin" className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#C59B27]/20 border border-[#C59B27]/50 flex items-center justify-center">
                <Activity className="w-4 h-4 text-[#C59B27]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-[#C59B27] uppercase tracking-wider">
                  ADAMAS BME ADMIN
                </span>
                <span className="text-xs font-serif font-bold text-white leading-tight">
                  Website Control Center
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-300 hover:text-[#C59B27] transition-colors"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </Link>

            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 mr-1.5" />
              <span>{loggingOut ? "Signing Out..." : "Sign Out"}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="flex-grow flex max-w-7xl w-full mx-auto px-4 py-6 gap-6">
        
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm sticky top-20 space-y-6">
            
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
                Navigation
              </div>
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? "bg-[#1B365D] text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? "text-[#C59B27]" : "text-slate-400"}`} />
                        <span>{item.name}</span>
                      </div>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4 border-t border-slate-100 px-3 space-y-1 text-slate-500 text-[11px]">
              <div className="font-semibold text-slate-700">Adamas University</div>
              <div>School of Eng. & Tech</div>
              <div className="text-[10px] text-slate-400 mt-2">Logged in as Administrator</div>
            </div>

          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex">
            <div className="bg-white w-72 h-full p-5 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-bold text-[#1B365D] uppercase tracking-wider">
                  Admin Menu
                </span>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="space-y-1.5">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileSidebarOpen(false)}
                      className={`flex items-center space-x-3 px-3.5 py-3 rounded-xl text-xs font-bold ${
                        isActive
                          ? "bg-[#1B365D] text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#C59B27]" : "text-slate-400"}`} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-grow w-full min-w-0">{children}</main>

      </div>

    </div>
  );
}
