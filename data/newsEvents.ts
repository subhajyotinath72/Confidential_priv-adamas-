export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "Achievement" | "Research" | "Event" | "MoU";
  summary: string;
  image: string;
  author: string;
  readTime: string;
}

export interface UpcomingEvent {
  id: string;
  day: string;
  month: string;
  year: string;
  time: string;
  title: string;
  location: string;
  speaker: string;
  category: "Seminar" | "Workshop" | "Webinar" | "Conference";
  registrationLink: string;
}

export const RECENT_NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Adamas Biomedical Engineering Faculty Secures DST-SERB Grant for 3D Bioprinting Research",
    date: "August 28, 2026",
    category: "Research",
    summary: "Dr. Sunita Roy and her research team have been awarded a prestigious ₹42 Lakh research grant by DST-SERB to develop vascularized 3D tissue constructs for cardiac repair.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    author: "Department R&D Cell",
    readTime: "3 min read"
  },
  {
    id: "news-2",
    title: "MoU Signed with Leading Super-Specialty Hospital Network for Student Clinical Rotations",
    date: "July 15, 2026",
    category: "MoU",
    summary: "School of Engineering & Technology, Adamas University has entered into a strategic collaboration with premier Kolkata hospitals to provide B.Tech students with hands-on hospital ICU and radiology equipment training.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    author: "Admissions & Placements Desk",
    readTime: "4 min read"
  },
  {
    id: "news-3",
    title: "Biomedical Students Win Top Honor at National Healthcare Hackathon 2026",
    date: "June 02, 2026",
    category: "Achievement",
    summary: "A 4-member student team from Adamas Department of Biomedical Engineering bagged the 1st prize for creating 'StethoAI' — a low-cost digital stethoscope with automated murmur detection.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    author: "Student Affairs Cell",
    readTime: "2 min read"
  }
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "evt-1",
    day: "28",
    month: "SEP",
    year: "2026",
    time: "10:30 AM - 1:00 PM",
    title: "International Webinar on AI-Driven Cancer Radiology Screening",
    location: "Auditorium Hall B & Online Zoom",
    speaker: "Dr. Marcus Vance (Johns Hopkins University)",
    category: "Webinar",
    registrationLink: "#"
  },
  {
    id: "evt-2",
    day: "14",
    month: "OCT",
    year: "2026",
    time: "09:00 AM - 04:30 PM",
    title: "Hands-On Workshop on Microfluidic Biosensor Fabrication",
    location: "SET Bio-Electronics Lab 302",
    speaker: "Dr. Ananya Mukherjee & Technical Specialists",
    category: "Workshop",
    registrationLink: "#"
  },
  {
    id: "evt-3",
    day: "05",
    month: "NOV",
    year: "2026",
    time: "11:00 AM - 03:00 PM",
    title: "Biomedical Industry-Academia Conclave & MedTech Expo 2026",
    location: "Adamas Convention Center",
    speaker: "Leaders from Siemens Healthineers, Philips & Medtronic",
    category: "Conference",
    registrationLink: "#"
  },
  {
    id: "evt-4",
    day: "20",
    month: "NOV",
    year: "2026",
    time: "02:00 PM - 04:00 PM",
    title: "Guest Lecture: ISO 13485 Medical Device Regulatory Pathways",
    location: "Seminar Room 104",
    speaker: "Prof. Sourav Chakraborty",
    category: "Seminar",
    registrationLink: "#"
  }
];
