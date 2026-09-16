import fs from "fs";
import path from "path";
import { FACULTY_MEMBERS, Faculty } from "@/data/faculty";
import { RECENT_NEWS, UPCOMING_EVENTS, NewsItem, UpcomingEvent } from "@/data/newsEvents";
import { RESEARCH_TRACKS, ResearchTrack } from "@/data/research";
import { ACADEMIC_PROGRAMS, Program } from "@/data/programs";
import { TESTIMONIALS, Testimonial } from "@/data/testimonials";
import { supabaseUpsertStore } from "@/lib/supabase";

export interface DatabaseStore {
  faculty: Faculty[];
  news: NewsItem[];
  events: UpcomingEvent[];
  researchTracks: ResearchTrack[];
  programs: Program[];
  testimonials: Testimonial[];
  centers?: any[];
}

const DB_PATH = path.join(process.cwd(), "data", "store.json");

const DEFAULT_CENTERS = [
  {
    id: "center-1",
    code: "01",
    name: "Center for Advanced Bio-Imaging & Sensing",
    focus: "Non-invasive optical diagnostics, wearable telemetry, and microfluidic biosensors.",
    lead: "Dr. Arindam Banerjee",
    funding: "DST-SERB & ICMR",
    icon: "Activity",
    specs: ["High-speed digitizers", "Microfluidic printers", "Cleanroom suite"],
  },
  {
    id: "center-2",
    code: "02",
    name: "Tissue Engineering & Biomaterials Scaffold Hub",
    focus: "3D bioprinting bio-inks, polymeric bone scaffolds, and drug delivery nanocarriers.",
    lead: "Dr. Sunita Roy",
    funding: "CSIR & University Seed Grant",
    icon: "FlaskConical",
    specs: ["Dual-head extrusion bioprinter", "SEM imaging suite", "Biomechanics tester"],
  },
  {
    id: "center-3",
    code: "03",
    name: "Healthcare AI & Medical Robotics Lab",
    focus: "Deep learning for MRI/CT, tele-ICU monitoring, and surgical haptic manipulators.",
    lead: "Dr. Subhajit Roy",
    funding: "MeitY & Industry Partners",
    icon: "Cpu",
    specs: ["GPU acceleration cluster", "Haptic arm manipulators", "Telemetry suite"],
  },
];

/**
 * Helper to ensure the DB file exists, initializing it from default TS files if missing.
 */
export function getStoreData(): DatabaseStore {
  try {
    if (!fs.existsSync(DB_PATH)) {
      const initialData: DatabaseStore = {
        faculty: FACULTY_MEMBERS,
        news: RECENT_NEWS,
        events: UPCOMING_EVENTS,
        researchTracks: RESEARCH_TRACKS,
        programs: ACADEMIC_PROGRAMS,
        testimonials: TESTIMONIALS,
        centers: DEFAULT_CENTERS,
      };
      fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2), "utf-8");
      return initialData;
    }
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    const data = JSON.parse(raw);
    if (!data.centers) {
      data.centers = DEFAULT_CENTERS;
    }
    return data;
  } catch (err) {
    console.error("Error reading store.json, falling back to defaults:", err);
    return {
      faculty: FACULTY_MEMBERS,
      news: RECENT_NEWS,
      events: UPCOMING_EVENTS,
      researchTracks: RESEARCH_TRACKS,
      programs: ACADEMIC_PROGRAMS,
      testimonials: TESTIMONIALS,
      centers: DEFAULT_CENTERS,
    };
  }
}

/**
 * Saves updated store back to data/store.json and syncs with Supabase
 */
export function saveStoreData(data: DatabaseStore): void {
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
    
    // Sync to Supabase in background via REST
    supabaseUpsertStore(data).catch(() => {});
  } catch (err) {
    console.error("Error writing store.json:", err);
    throw new Error("Failed to save data store to disk.");
  }
}
