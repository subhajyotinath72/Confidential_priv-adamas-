"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { SiteSettings, DEFAULT_SITE_SETTINGS } from "@/data/siteSettings";

interface SiteSettingsContextType {
  settings: SiteSettings;
  updateLocalSettings: (newSettings: Partial<SiteSettings>) => void;
  refreshSettings: () => Promise<void>;
  loading: boolean;
}

const SiteSettingsContext = createContext<SiteSettingsContextType>({
  settings: DEFAULT_SITE_SETTINGS,
  updateLocalSettings: () => {},
  refreshSettings: async () => {},
  loading: true,
});

const hexToRgb = (hex?: string, fallback: string = "16, 62, 59"): string => {
  if (!hex) return fallback;
  const cleanHex = hex.replace("#", "").trim();
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return `${r}, ${g}, ${b}`;
  }
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  }
  return fallback;
};

export const SiteSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SITE_SETTINGS);
  const [loading, setLoading] = useState(true);

  const applyThemeToDOM = (theme: SiteSettings["theme"]) => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;

    const primary = theme.primaryColor || "#103E3B";
    const primaryDark = theme.primaryDarkColor || "#0D3330";
    const heading = theme.headingColor || primary;
    const accent = theme.accentColor || "#B58A28";
    const textMain = theme.textColor || "#103E3B";

    root.style.setProperty("--color-primary", primary);
    root.style.setProperty("--color-primary-dark", primaryDark);
    root.style.setProperty("--color-primary-rgb", hexToRgb(primary, "16, 62, 59"));
    root.style.setProperty("--color-primary-dark-rgb", hexToRgb(primaryDark, "13, 51, 48"));
    root.style.setProperty("--color-accent", accent);
    root.style.setProperty("--color-accent-light", theme.accentLightColor || "#C59B27");
    root.style.setProperty("--color-accent-rgb", hexToRgb(accent, "181, 138, 40"));
    root.style.setProperty("--color-bg-page", theme.backgroundColor || "#ffffff");
    root.style.setProperty("--color-text-main", textMain);
    root.style.setProperty("--color-heading", heading);
    root.style.setProperty("--color-heading-rgb", hexToRgb(heading, hexToRgb(primary, "16, 62, 59")));
    root.style.setProperty("--font-heading-family", `"${theme.fontHeading || 'Outfit'}", serif`);
    root.style.setProperty("--font-body-family", `"${theme.fontBody || 'Inter'}", sans-serif`);

    // Dynamically inject Google Fonts for the selected typography
    const fonts = [theme.fontHeading, theme.fontBody].filter(Boolean);
    const uniqueFonts = Array.from(new Set(fonts));
    const fontParams = uniqueFonts
      .map((f) => `family=${encodeURIComponent(f)}:wght@300;400;500;600;700;800;900`)
      .join("&");

    const linkId = "adamas-dynamic-google-fonts";
    let link = document.getElementById(linkId) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    link.href = `https://fonts.googleapis.com/css2?${fontParams}&display=swap`;
  };

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/content");
      if (res.ok) {
        const data = await res.json();
        if (data.siteSettings) {
          setSettings(data.siteSettings);
          applyThemeToDOM(data.siteSettings.theme);
        }
      }
    } catch (err) {
      console.error("Could not fetch site settings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  useEffect(() => {
    if (settings?.theme) {
      applyThemeToDOM(settings.theme);
    }
  }, [settings.theme]);

  const updateLocalSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => {
      const merged = { ...prev, ...newSettings };
      if (newSettings.theme) {
        merged.theme = { ...prev.theme, ...newSettings.theme };
        applyThemeToDOM(merged.theme);
      }
      return merged;
    });
  };

  return (
    <SiteSettingsContext.Provider
      value={{
        settings,
        updateLocalSettings,
        refreshSettings: fetchSettings,
        loading,
      }}
    >
      {children}
    </SiteSettingsContext.Provider>
  );
};

export const useSiteSettings = () => useContext(SiteSettingsContext);
