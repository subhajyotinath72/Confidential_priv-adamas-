"use client";

import React, { useState, useEffect } from "react";
import {
  Palette,
  Type,
  Building,
  Phone,
  Layers,
  Sparkles,
  Save,
  RefreshCw,
  CheckCircle2,
  ExternalLink,
  Plus,
  Trash2,
  User,
  Video,
  Eye,
  Sliders,
} from "lucide-react";
import { SiteSettings, DEFAULT_SITE_SETTINGS, HeroSlide } from "@/data/siteSettings";
import { useSiteSettings } from "@/components/providers/SiteSettingsContext";

const FONT_OPTIONS_HEADING = [
  "Outfit",
  "Playfair Display",
  "Inter",
  "Montserrat",
  "Poppins",
  "Merriweather",
  "Cinzel",
  "Space Grotesk",
  "Lora",
  "Cormorant Garamond",
];

const FONT_OPTIONS_BODY = [
  "Inter",
  "Roboto",
  "Plus Jakarta Sans",
  "Poppins",
  "Open Sans",
  "Lato",
  "Nunito",
];

const PRESET_PALETTES = [
  {
    name: "Adamas Burgundy & Gold",
    primary: "#4A1525",
    primaryDark: "#330E1A",
    accent: "#D4AF37",
    accentLight: "#E8C860",
    bg: "#FCFBF7",
    text: "#330E1A",
    heading: "#4A1525",
  },
  {
    name: "Royal Navy & Bronze",
    primary: "#0E2954",
    primaryDark: "#0A1D3A",
    accent: "#C59B27",
    accentLight: "#E5BA48",
    bg: "#FAFCFF",
    text: "#0E2954",
    heading: "#0E2954",
  },
  {
    name: "Deep Forest & Coral",
    primary: "#1A3C34",
    primaryDark: "#122A24",
    accent: "#E07A5F",
    accentLight: "#F28E73",
    bg: "#FBFDFB",
    text: "#1A3C34",
    heading: "#1A3C34",
  },
  {
    name: "Midnight & Cyan Tech",
    primary: "#0F172A",
    primaryDark: "#020617",
    accent: "#06B6D4",
    accentLight: "#22D3EE",
    bg: "#FFFFFF",
    text: "#0F172A",
    heading: "#0F172A",
  },
  {
    name: "Burgundy & Warm Sand",
    primary: "#4A1525",
    primaryDark: "#330E1A",
    accent: "#D4AF37",
    accentLight: "#E8C860",
    bg: "#FCFBF7",
    text: "#330E1A",
    heading: "#4A1525",
  },
];

export default function AdminSettingsPage() {
  const { refreshSettings } = useSiteSettings();
  const [activeTab, setActiveTab] = useState<"theme" | "general" | "hero" | "hod" | "contact">("theme");
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SITE_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch current settings from /api/admin/content
  const loadSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/content");
      if (res.ok) {
        const data = await res.json();
        if (data.siteSettings) {
          setSettings(data.siteSettings);
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to load settings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  // Save updated settings
  const handleSave = async () => {
    setSaving(true);
    setSaveSuccess(false);
    setErrorMsg("");
    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteSettings: settings }),
      });
      if (!res.ok) throw new Error("Could not save settings");
      setSaveSuccess(true);
      await refreshSettings();
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred while saving.");
    } finally {
      setSaving(false);
    }
  };

  const applyPalette = (p: typeof PRESET_PALETTES[0]) => {
    setSettings((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        primaryColor: p.primary,
        primaryDarkColor: p.primaryDark,
        accentColor: p.accent,
        accentLightColor: p.accentLight,
        backgroundColor: p.bg,
        textColor: p.text,
        headingColor: p.heading,
        navDropdownColor: p.primaryDark,
      },
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center space-x-3 text-slate-500 text-sm">
          <RefreshCw className="w-5 h-5 animate-spin text-[#D4AF37]" />
          <span>Loading Site Settings & Theme...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Header Banner */}
      <div className="bg-[#1B365D] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold text-[#C59B27]">
            <Sliders className="w-3.5 h-3.5" />
            <span>NO-CODE WEBSITE CUSTOMIZER</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Site Appearance & Global Content
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
            Change colors, background tones, typography fonts, homepage hero slides, announcements, and contact details directly without changing source code.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
          >
            <Eye className="w-4 h-4 mr-1.5" />
            <span>View Live Site</span>
            <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />
          </a>

          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#C59B27] hover:bg-[#D4AF37] shadow-lg transition-all cursor-pointer disabled:opacity-50"
          >
            {saving ? (
              <RefreshCw className="w-4 h-4 mr-1.5 animate-spin" />
            ) : (
              <Save className="w-4 h-4 mr-1.5" />
            )}
            <span>{saving ? "Saving Changes..." : "Save & Publish Changes"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-2xl flex items-center space-x-3 text-sm animate-in fade-in duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <div>
            <strong>Published Successfully!</strong> Your website theme, colors, fonts, and content details have been saved and applied across the entire site.
          </div>
        </div>
      )}

      {errorMsg && (
        <div className="p-4 bg-rose-50 border border-rose-300 text-rose-800 rounded-2xl text-sm">
          {errorMsg}
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 overflow-x-auto gap-2 text-xs sm:text-sm font-bold">
        {[
          { id: "theme", label: "🎨 Colors & Fonts", icon: Palette },
          { id: "general", label: "🏛️ Identity & Ticker", icon: Building },
          { id: "hero", label: "🚀 Hero & Video", icon: Layers },
          { id: "hod", label: "👤 Office of HoD", icon: User },
          { id: "contact", label: "📞 Contact & Helpline", icon: Phone },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "border-[#1B365D] text-[#1B365D] bg-white rounded-t-xl shadow-xs"
                  : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: THEME, COLORS & FONTS */}
      {activeTab === "theme" && (
        <div className="space-y-8">
          
          {/* Quick Preset Palettes */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  Quick Color Presets
                </h3>
                <p className="text-xs text-slate-500">
                  Apply a harmonized luxury palette with one click, or customize each color below.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PRESET_PALETTES.map((p) => (
                <button
                  key={p.name}
                  onClick={() => applyPalette(p)}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-slate-400 bg-slate-50/50 hover:bg-white text-left transition-all group cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600">
                      {p.name}
                    </span>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: p.primary }} />
                      <div className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: p.accent }} />
                      <div className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: p.bg }} />
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-700">
                    Apply
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Color Customizers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Primary Brand Color */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                Primary Brand Color
              </label>
              <p className="text-[11px] text-slate-500">
                Navbar, header banners, primary buttons, and institutional cards.
              </p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.theme.primaryColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, primaryColor: e.target.value },
                    })
                  }
                  className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0 shadow-sm"
                />
                <input
                  type="text"
                  value={settings.theme.primaryColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, primaryColor: e.target.value },
                    })
                  }
                  className="flex-grow px-3 py-2 border border-slate-200 rounded-xl text-xs font-mono uppercase font-bold text-slate-700"
                />
              </div>
            </div>

            {/* Accent / Gold Color */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                Accent / Gold Color
              </label>
              <p className="text-[11px] text-slate-500">
                Badges, active states, progress indicators, and highlight titles.
              </p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.theme.accentColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, accentColor: e.target.value },
                    })
                  }
                  className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0 shadow-sm"
                />
                <input
                  type="text"
                  value={settings.theme.accentColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, accentColor: e.target.value },
                    })
                  }
                  className="flex-grow px-3 py-2 border border-slate-200 rounded-xl text-xs font-mono uppercase font-bold text-slate-700"
                />
              </div>
            </div>

            {/* Page Background Color */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                Page Background Color
              </label>
              <p className="text-[11px] text-slate-500">
                Main canvas background color across public pages.
              </p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.theme.backgroundColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, backgroundColor: e.target.value },
                    })
                  }
                  className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0 shadow-sm"
                />
                <input
                  type="text"
                  value={settings.theme.backgroundColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, backgroundColor: e.target.value },
                    })
                  }
                  className="flex-grow px-3 py-2 border border-slate-200 rounded-xl text-xs font-mono uppercase font-bold text-slate-700"
                />
              </div>
            </div>

            {/* Heading Text Color */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                Heading Text Color
              </label>
              <p className="text-[11px] text-slate-500">
                Used for all H1, H2, H3, and major section headlines.
              </p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.theme.headingColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, headingColor: e.target.value },
                    })
                  }
                  className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0 shadow-sm"
                />
                <input
                  type="text"
                  value={settings.theme.headingColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, headingColor: e.target.value },
                    })
                  }
                  className="flex-grow px-3 py-2 border border-slate-200 rounded-xl text-xs font-mono uppercase font-bold text-slate-700"
                />
              </div>
            </div>

            {/* Main Body Text Color */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                Body Text Color
              </label>
              <p className="text-[11px] text-slate-500">
                Main paragraph text color across descriptions and tables.
              </p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.theme.textColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, textColor: e.target.value },
                    })
                  }
                  className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0 shadow-sm"
                />
                <input
                  type="text"
                  value={settings.theme.textColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, textColor: e.target.value },
                    })
                  }
                  className="flex-grow px-3 py-2 border border-slate-200 rounded-xl text-xs font-mono uppercase font-bold text-slate-700"
                />
              </div>
            </div>

            {/* Primary Dark Shade */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                Dark Bar / Footer Shade
              </label>
              <p className="text-[11px] text-slate-500">
                TopBar, deep footer layers, and rolling ticker background.
              </p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.theme.primaryDarkColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, primaryDarkColor: e.target.value },
                    })
                  }
                  className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0 shadow-sm"
                />
                <input
                  type="text"
                  value={settings.theme.primaryDarkColor}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, primaryDarkColor: e.target.value },
                    })
                  }
                  className="flex-grow px-3 py-2 border border-slate-200 rounded-xl text-xs font-mono uppercase font-bold text-slate-700"
                />
              </div>
            </div>

            {/* Navbar Dropdown / Menu Color */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                Navbar Dropdown / Menu Color
              </label>
              <p className="text-[11px] text-slate-500">
                Navbar dropdown menus (Admission, People, Research) and mobile drawer background.
              </p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.theme.navDropdownColor || settings.theme.primaryDarkColor || settings.theme.primaryColor || "#103E3B"}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, navDropdownColor: e.target.value },
                    })
                  }
                  className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0 shadow-sm"
                />
                <input
                  type="text"
                  value={settings.theme.navDropdownColor || settings.theme.primaryDarkColor || settings.theme.primaryColor || "#103E3B"}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, navDropdownColor: e.target.value },
                    })
                  }
                  className="flex-grow px-3 py-2 border border-slate-200 rounded-xl text-xs font-mono uppercase font-bold text-slate-700"
                />
              </div>
            </div>

          </div>

          {/* Typography Customization */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <Type className="w-4 h-4 text-[#D4AF37]" />
                <span>Typography & Font Families</span>
              </h3>
              <p className="text-xs text-slate-500">
                Select your preferred fonts for headings and body paragraphs. Loaded dynamically from Google Fonts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Headings Font
                </label>
                <select
                  value={settings.theme.fontHeading}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, fontHeading: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800"
                >
                  {FONT_OPTIONS_HEADING.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-400">
                  Applied to H1, H2, H3 titles and cards.
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Body Text Font
                </label>
                <select
                  value={settings.theme.fontBody}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: { ...settings.theme, fontBody: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800"
                >
                  {FONT_OPTIONS_BODY.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-400">
                  Applied to paragraphs, lists, and menu items.
                </span>
              </div>
            </div>
          </div>

          {/* Real-time Theme Preview Card */}
          <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-4" style={{ backgroundColor: settings.theme.backgroundColor }}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Live Theme Preview
            </span>
            <div
              className="p-6 sm:p-8 rounded-2xl shadow-lg space-y-4 transition-all"
              style={{ backgroundColor: settings.theme.primaryColor }}
            >
              <div
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: settings.theme.accentColor,
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Department Preview Badge</span>
              </div>
              <h2
                className="text-2xl sm:text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: settings.theme.fontHeading }}
              >
                Engineering the Future of Healthcare
              </h2>
              <p
                className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed"
                style={{ fontFamily: settings.theme.fontBody }}
              >
                This preview illustrates how your primary brand color, heading typography, and accent highlights interact.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <button
                  className="px-4 py-2 rounded-xl text-xs font-bold shadow-md"
                  style={{
                    backgroundColor: settings.theme.accentColor,
                    color: "#ffffff",
                  }}
                >
                  Accent Action Button
                </button>
                <button className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 border border-white/20">
                  Secondary Button
                </button>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: IDENTITY & ANNOUNCEMENTS */}
      {activeTab === "general" && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-slate-800">
              Institutional Identity & Names
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Department Name</label>
                <input
                  type="text"
                  value={settings.general.departmentName}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      general: { ...settings.general, departmentName: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">University Name</label>
                <input
                  type="text"
                  value={settings.general.universityName}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      general: { ...settings.general, universityName: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">School / Faculty Name</label>
                <input
                  type="text"
                  value={settings.general.schoolName}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      general: { ...settings.general, schoolName: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Tagline / Mission</label>
                <input
                  type="text"
                  value={settings.general.tagline}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      general: { ...settings.general, tagline: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                />
              </div>
            </div>
          </div>

          {/* Rolling Ticker Announcements */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  Rolling Infinite Text Ticker
                </h3>
                <p className="text-xs text-slate-500">
                  Highlighted slogans and announcements rolling across the top of the homepage.
                </p>
              </div>
              <button
                onClick={() =>
                  setSettings({
                    ...settings,
                    ticker: [...settings.ticker, "NEW ANNOUNCEMENT ITEM"],
                  })
                }
                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 mr-1" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-3">
              {settings.ticker.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="w-6 text-center text-xs font-bold text-slate-400">
                    {idx + 1}.
                  </span>
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const updated = [...settings.ticker];
                      updated[idx] = e.target.value;
                      setSettings({ ...settings, ticker: updated });
                    }}
                    className="flex-grow px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                  />
                  <button
                    onClick={() => {
                      const updated = settings.ticker.filter((_, i) => i !== idx);
                      setSettings({ ...settings, ticker: updated });
                    }}
                    className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg"
                    title="Remove Item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: HERO SLIDES & VIDEO */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          
          {/* Front Video Settings */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <Video className="w-4 h-4 text-[#D4AF37]" />
              <span>Front Auto-Playing Video Section</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Video File URL / MP4 Path</label>
                <input
                  type="text"
                  value={settings.frontVideo.url}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      frontVideo: { ...settings.frontVideo, url: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Video Poster Image URL</label>
                <input
                  type="text"
                  value={settings.frontVideo.poster}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      frontVideo: { ...settings.frontVideo, poster: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
                />
              </div>
            </div>
          </div>

          {/* Hero Carousel Slides */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  Homepage Hero Slides ({settings.heroSlides.length})
                </h3>
                <p className="text-xs text-slate-500">
                  Edit slides with background images, titles, descriptions, and CTA links.
                </p>
              </div>
              <button
                onClick={() => {
                  const newSlide: HeroSlide = {
                    id: Date.now(),
                    title: "New Biomedical Track",
                    subtitle: "Innovation for Clinical Healthcare",
                    description: "Pioneering state-of-the-art medical engineering solutions.",
                    bgImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920",
                    tag: "School of Engineering",
                    primaryCtaText: "Learn More",
                    primaryCtaLink: "/research",
                    secondaryCtaText: "Admissions",
                    secondaryCtaLink: "/admission",
                  };
                  setSettings({
                    ...settings,
                    heroSlides: [...settings.heroSlides, newSlide],
                  });
                }}
                className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 cursor-pointer shadow-sm"
              >
                <Plus className="w-3.5 h-3.5 mr-1" />
                <span>Add Hero Slide</span>
              </button>
            </div>

            <div className="space-y-4">
              {settings.heroSlides.map((slide, idx) => (
                <div
                  key={slide.id || idx}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Slide #{idx + 1}
                    </span>
                    <button
                      onClick={() => {
                        const updated = settings.heroSlides.filter((_, i) => i !== idx);
                        setSettings({ ...settings, heroSlides: updated });
                      }}
                      className="text-xs font-bold text-rose-500 hover:text-rose-700 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove Slide</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Slide Headline (Title)</label>
                      <input
                        type="text"
                        value={slide.title}
                        onChange={(e) => {
                          const updated = [...settings.heroSlides];
                          updated[idx].title = e.target.value;
                          setSettings({ ...settings, heroSlides: updated });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Subtitle / Tagline</label>
                      <input
                        type="text"
                        value={slide.subtitle}
                        onChange={(e) => {
                          const updated = [...settings.heroSlides];
                          updated[idx].subtitle = e.target.value;
                          setSettings({ ...settings, heroSlides: updated });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-bold text-slate-700">Paragraph Description</label>
                      <textarea
                        rows={2}
                        value={slide.description}
                        onChange={(e) => {
                          const updated = [...settings.heroSlides];
                          updated[idx].description = e.target.value;
                          setSettings({ ...settings, heroSlides: updated });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-bold text-slate-700">Background Image URL</label>
                      <input
                        type="text"
                        value={slide.bgImage}
                        onChange={(e) => {
                          const updated = [...settings.heroSlides];
                          updated[idx].bgImage = e.target.value;
                          setSettings({ ...settings, heroSlides: updated });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Primary Button Label</label>
                      <input
                        type="text"
                        value={slide.primaryCtaText}
                        onChange={(e) => {
                          const updated = [...settings.heroSlides];
                          updated[idx].primaryCtaText = e.target.value;
                          setSettings({ ...settings, heroSlides: updated });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Primary Button Link</label>
                      <input
                        type="text"
                        value={slide.primaryCtaLink}
                        onChange={(e) => {
                          const updated = [...settings.heroSlides];
                          updated[idx].primaryCtaLink = e.target.value;
                          setSettings({ ...settings, heroSlides: updated });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: HOD SECTION */}
      {activeTab === "hod" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <User className="w-4 h-4 text-[#D4AF37]" />
            <span>Head of Department (HoD) Profile & Quote</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">HoD Full Name</label>
              <input
                type="text"
                value={settings.hod.name}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    hod: { ...settings.hod, name: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Official Designation</label>
              <input
                type="text"
                value={settings.hod.designation}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    hod: { ...settings.hod, designation: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
              />
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Qualifications & Affiliations</label>
              <input
                type="text"
                value={settings.hod.qualifications}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    hod: { ...settings.hod, qualifications: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
              />
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-700">HoD Portrait Photo URL</label>
              <input
                type="text"
                value={settings.hod.photo}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    hod: { ...settings.hod, photo: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
              />
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Featured Philosophy Quote</label>
              <textarea
                rows={3}
                value={settings.hod.quote}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    hod: { ...settings.hod, quote: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-serif italic"
              />
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-700">HoD Message / Vision Statement</label>
              <textarea
                rows={4}
                value={settings.hod.message}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    hod: { ...settings.hod, message: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs leading-relaxed"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: CONTACT & MAP */}
      {activeTab === "contact" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Official Contact, Admission Helpline & Location</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Official Department Email</label>
              <input
                type="email"
                value={settings.contact.email}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    contact: { ...settings.contact, email: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Department Telephone</label>
              <input
                type="text"
                value={settings.contact.phone}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    contact: { ...settings.contact, phone: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Admissions Toll-Free Helpline</label>
              <input
                type="text"
                value={settings.contact.admissionHelpline}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    contact: { ...settings.contact, admissionHelpline: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Office Working Hours</label>
              <input
                type="text"
                value={settings.contact.hours}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    contact: { ...settings.contact, hours: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
              />
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Physical Campus Address</label>
              <textarea
                rows={2}
                value={settings.contact.address}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    contact: { ...settings.contact, address: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
              />
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Campus Maps Link / Embed URL</label>
              <input
                type="text"
                value={settings.contact.mapUrl}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    contact: { ...settings.contact, mapUrl: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Save Bar */}
      <div className="sticky bottom-4 z-40 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-xl flex items-center justify-between">
        <div className="text-xs text-slate-600 font-medium">
          Ready to apply your customization across the live website?
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#4A1525] hover:bg-[#330E1A] shadow-md transition-all cursor-pointer disabled:opacity-50"
        >
          {saving ? (
            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          <span>{saving ? "Publishing Changes..." : "Save & Publish All Changes"}</span>
        </button>
      </div>

    </div>
  );
}
