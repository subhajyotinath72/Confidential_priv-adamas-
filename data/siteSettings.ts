export interface SiteTheme {
  primaryColor: string;
  primaryDarkColor: string;
  accentColor: string;
  accentLightColor: string;
  backgroundColor: string;
  textColor: string;
  headingColor: string;
  fontHeading: string;
  fontBody: string;
  navDropdownColor?: string;
}

export interface SiteGeneral {
  departmentName: string;
  universityName: string;
  schoolName: string;
  tagline: string;
  portalUrl: string;
}

export interface SiteContact {
  email: string;
  phone: string;
  admissionHelpline: string;
  address: string;
  hours: string;
  mapUrl: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  tag: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface FrontVideoSettings {
  url: string;
  poster: string;
  title: string;
  subtitle: string;
}

export interface HodSettings {
  name: string;
  designation: string;
  qualifications: string;
  photo: string;
  quote: string;
  message: string;
}

export interface SiteSettings {
  theme: SiteTheme;
  general: SiteGeneral;
  contact: SiteContact;
  ticker: string[];
  heroSlides: HeroSlide[];
  frontVideo: FrontVideoSettings;
  hod: HodSettings;
}

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  theme: {
    primaryColor: "#4A1525",
    primaryDarkColor: "#330E1A",
    accentColor: "#D4AF37",
    accentLightColor: "#E8C860",
    backgroundColor: "#FCFBF7",
    textColor: "#330E1A",
    headingColor: "#4A1525",
    fontHeading: "Outfit",
    fontBody: "Inter",
  },
  general: {
    departmentName: "Department of Biomedical Engineering",
    universityName: "Adamas University, Kolkata",
    schoolName: "School of Engineering & Technology",
    tagline: "Where Biomedical Innovation Meets Human Impact",
    portalUrl: "https://adamasuniversity.ac.in",
  },
  contact: {
    email: "biomedical@adamasuniversity.ac.in",
    phone: "+91 33 6811 4500 (Ext. 248)",
    admissionHelpline: "18004197423",
    address: "Floor 3, School of Engineering, Adamas University Campus, Barasat, Kolkata 700126, India.",
    hours: "Monday – Friday, 09:30 AM – 05:30 PM IST",
    mapUrl: "https://www.bing.com/maps/search?name=Adamas+University&trfc=&mepi=0%7E%7EEmbedded%7ELargeMapLink&FORM=MPSRPL&style=r&ss=id.ypid%3AYNB328D7AD71F2FCAD&q=Adamas+University&ppois=22.73830795288086_88.45661926269531_Adamas+University&cp=22.738308%7E88.456619&lvl=15",
  },
  ticker: [
    "INNOVATION • RESEARCH • TRANSLATIONAL MEDICINE",
    "AI-POWERED DIAGNOSTICS & TELE-ICU",
    "CELLULAR 3D BIOPRINTING & TISSUE SCAFFOLDS",
    "MICROFLUIDIC LAB-ON-A-CHIP BIOSENSORS",
    "SUPER-SPECIALTY CLINICAL HOSPITAL ROTATIONS",
    "ROBOTIC PROSTHETICS & NEURO-ENGINEERING",
  ],
  heroSlides: [
    {
      id: 1,
      title: "Engineering the Future of Healthcare",
      subtitle: "Where Biomedical Innovation Meets Human Impact",
      description: "Pioneering non-invasive medical diagnostic devices, smart biosensors, 3D bioprinting scaffolds, and healthcare artificial intelligence at Adamas University, Kolkata.",
      bgImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920",
      tag: "School of Engineering & Technology",
      primaryCtaText: "Explore Research Tracks",
      primaryCtaLink: "/research",
      secondaryCtaText: "View Academic Programs",
      secondaryCtaLink: "/admission",
    },
    {
      id: 2,
      title: "Advanced 3D Bioprinting & Tissue Engineering",
      subtitle: "Cellular Scaffolds & Regenerative Medicine",
      description: "Developing biomimetic polymer matrices, bio-inks, and customized orthopedic implants in collaboration with Kolkata's leading clinical research networks.",
      bgImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1920",
      tag: "02 Biomaterials & Scaffolds",
      primaryCtaText: "Biomaterials Lab",
      primaryCtaLink: "/research#02",
      secondaryCtaText: "Faculty Profiles",
      secondaryCtaLink: "/people",
    },
    {
      id: 3,
      title: "AI-Powered Diagnostics & Medical Imaging",
      subtitle: "Deep Learning for Radiological Excellence",
      description: "Training neural vision models for automated MRI segmentation, tele-ICU patient monitoring, and low-cost rural screening tools.",
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920",
      tag: "03 Health Informatics & AI",
      primaryCtaText: "Explore Bio-AI Track",
      primaryCtaLink: "/research#03",
      secondaryCtaText: "Apply Now 2026",
      secondaryCtaLink: "https://adamasuniversity.ac.in/adamas-university/#",
    },
  ],
  frontVideo: {
    url: "/adamas-virtual-tour.mp4",
    poster: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920",
    title: "Experience Adamas University",
    subtitle: "Virtual Tour & Advanced Research Facilities",
  },
  hod: {
    name: "Dr. Semanti Chakraborty",
    designation: "Head, Department of Biomedical Engineering",
    qualifications: "Ph.D., IIT Kharagpur | Senior Member, IEEE EMBS",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    quote: "Biomedical Engineering is not merely a technical discipline — it is a sacred contract with humanity to ease clinical suffering through scientific precision.",
    message: "Our curriculum bridges clinical hospital reality with cutting-edge micro-engineering, empowering our students to design life-saving diagnostics, prosthetics, and tissue-engineered implants for India and the world.",
  },
};
