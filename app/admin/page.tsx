"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  Newspaper,
  FlaskConical,
  Image as ImageIcon,
  Plus,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  RefreshCw,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/content");
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const stats = [
    {
      title: "Faculty Members",
      count: data?.faculty?.length || 0,
      icon: Users,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      href: "/admin/faculty",
      action: "Manage Directory",
    },
    {
      title: "News & Events",
      count: (data?.news?.length || 0) + (data?.events?.length || 0),
      icon: Newspaper,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      href: "/admin/news",
      action: "Manage Updates",
    },
    {
      title: "Research Centers & Areas",
      count: (data?.researchAreas?.length || 0) + (data?.centers?.length || 0),
      icon: FlaskConical,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      href: "/admin/research",
      action: "Manage Research",
    },
    {
      title: "Media Gallery",
      count: "Uploads",
      icon: ImageIcon,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      href: "/admin/media",
      action: "Open Media Hub",
    },
  ];

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-[#1B365D] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold text-[#C59B27]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ADAMAS BME ADMIN CONTROL CENTER</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Welcome to Website Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
            Easily update faculty directory entries, post upcoming events and MoUs, update research projects, and upload image assets dynamically.
          </p>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <Link
                  href={stat.href}
                  className="text-xs font-bold text-slate-500 hover:text-[#1B365D] flex items-center space-x-1"
                >
                  <span>{stat.action}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>

              <div>
                <div className="text-2xl font-bold text-slate-900 font-serif">
                  {loading ? "..." : stat.count}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">
                  {stat.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Action Shortcuts */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center">
            <Sparkles className="w-4 h-4 mr-2 text-[#C59B27]" />
            Quick Admin Shortcuts
          </h2>
          <button
            onClick={fetchContent}
            className="text-xs text-slate-500 hover:text-[#1B365D] flex items-center space-x-1"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Sync Data</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <Link
            href="/admin/faculty"
            className="p-4 rounded-xl border border-slate-200 hover:border-[#1B365D] bg-slate-50/50 hover:bg-slate-50 transition-all group flex items-center space-x-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1B365D] text-[#C59B27] flex items-center justify-center font-bold">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-[#1B365D]">
                Add Faculty Member
              </div>
              <div className="text-[11px] text-slate-500">
                Post new professor or staff bio
              </div>
            </div>
          </Link>

          <Link
            href="/admin/news"
            className="p-4 rounded-xl border border-slate-200 hover:border-[#1B365D] bg-slate-50/50 hover:bg-slate-50 transition-all group flex items-center space-x-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1B365D] text-[#C59B27] flex items-center justify-center font-bold">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-[#1B365D]">
                Post News / Event
              </div>
              <div className="text-[11px] text-slate-500">
                Announce grants, MoUs & seminars
              </div>
            </div>
          </Link>

          <Link
            href="/admin/media"
            className="p-4 rounded-xl border border-slate-200 hover:border-[#1B365D] bg-slate-50/50 hover:bg-slate-50 transition-all group flex items-center space-x-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1B365D] text-[#C59B27] flex items-center justify-center font-bold">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-[#1B365D]">
                Upload Website Image
              </div>
              <div className="text-[11px] text-slate-500">
                Upload new photos to gallery
              </div>
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
}
