import fs from "fs";
import path from "path";
import { FACULTY_MEMBERS, Faculty } from "@/data/faculty";
import { RECENT_NEWS, UPCOMING_EVENTS, NewsItem, UpcomingEvent } from "@/data/newsEvents";
import { RESEARCH_TRACKS, ResearchTrack } from "@/data/research";
import { ACADEMIC_PROGRAMS, Program } from "@/data/programs";
import { TESTIMONIALS, Testimonial } from "@/data/testimonials";
import { SiteSettings, DEFAULT_SITE_SETTINGS } from "@/data/siteSettings";
import { supabaseUpsertStore } from "@/lib/supabase";

export interface DatabaseStore {
  faculty: Faculty[];
  news: NewsItem[];
  events: UpcomingEvent[];
  researchTracks: ResearchTrack[];
  programs: Program[];
  testimonials: Testimonial[];
  centers?: any[];
  gallery?: any[];
  siteSettings?: SiteSettings;
}

const DB_PATH = path.join(process.cwd(), "data", "store.json");

const DEFAULT_CENTERS = [
  {
    id: "center-1",
    code: "01",
    name: "Center for Advanced Bio-Imaging & Sensing",
    focus: "Non-invasive optical diagnostics, wearable telemetry, and microfluidic biosensors.",
    lead: "Dr. Animesh Halder",
    funding: "DST-SERB & ICMR",
    icon: "Activity",
    specs: ["High-speed digitizers", "Microfluidic printers", "Cleanroom suite"],
  },
  {
    id: "center-2",
    code: "02",
    name: "Tissue Engineering & Biomaterials Scaffold Hub",
    focus: "3D bioprinting bio-inks, polymeric bone scaffolds, and drug delivery nanocarriers.",
    lead: "Dr. Sayanti Chowdhury",
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

const DEFAULT_GALLERY = [
  {
    id: "g-1",
    title: "Neural Imaging & Bio-AI Analytics",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    caption: "Students analyzing high-speed electroencephalogram and neuro-imaging datasets using deep learning clusters.",
  },
  {
    id: "g-2",
    title: "Microfluidic Biosensor Fabrication",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    caption: "Cleanroom micro-lithography and microfluidic channel fabrication for point-of-care diagnostic chips.",
  },
  {
    id: "g-3",
    title: "3D Cellular Tissue Bioprinting",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    caption: "DST-SERB funded bio-ink extrusion bioprinter creating vascularized cardiac tissue constructs.",
  },
  {
    id: "g-4",
    title: "Neuro-Prosthetics & Rehabilitation",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    caption: "Electromyography (EMG) surface sensor calibration for bionic prosthetic limbs.",
  },
  {
    id: "g-5",
    title: "Confocal Fluorescence Microscopy",
    category: "Research Labs",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    caption: "High-resolution cellular imaging of fluorescently tagged biomaterial scaffold matrices.",
  },
  {
    id: "g-6",
    title: "EEG Signal Processing Workshop",
    category: "Events & Seminars",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    caption: "Hands-on signal acquisition workshop featuring multichannel brain-computer interface headsets.",
  },
  {
    id: "g-7",
    title: "Neonatal Incubator Prototyping",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    caption: "Student design team calibrating thermal sensors for low-cost infant incubators.",
  },
  {
    id: "g-8",
    title: "Hospital ICU Clinical Rotation",
    category: "Clinical Rotations",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    caption: "3rd-year B.Tech students performing diagnostic equipment audits in partner super-specialty hospitals.",
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
        gallery: DEFAULT_GALLERY,
        siteSettings: DEFAULT_SITE_SETTINGS,
      };
      fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2), "utf-8");
      return initialData;
    }
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    const data = JSON.parse(raw);
    let dirty = false;
    if (!data.centers) {
      data.centers = DEFAULT_CENTERS;
      dirty = true;
    }
    if (!data.gallery) {
      data.gallery = DEFAULT_GALLERY;
      dirty = true;
    }
    if (!data.siteSettings) {
      data.siteSettings = DEFAULT_SITE_SETTINGS;
      dirty = true;
    }
    if (dirty) {
      fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
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
      gallery: DEFAULT_GALLERY,
      siteSettings: DEFAULT_SITE_SETTINGS,
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
