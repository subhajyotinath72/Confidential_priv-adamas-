export interface Program {
  id: string;
  degree: string;
  title: string;
  level: "Undergraduate" | "Postgraduate" | "Doctoral";
  duration: string;
  intake: string;
  affiliation: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  eligibility: string;
  careerOutcomes: string[];
  curriculumOverview: {
    yearOrSem: string;
    courses: string[];
  }[];
  isFlagship?: boolean;
}

export const ACADEMIC_PROGRAMS: Program[] = [
  {
    id: "btech-bme",
    degree: "B.Tech",
    title: "B.Tech in Biomedical Engineering",
    level: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    intake: "60 Seats",
    affiliation: "School of Engineering & Technology, Adamas University | AICTE Approved",
    shortDesc: "A flagship 4-year undergraduate program combining fundamental engineering principles with biology, medical instrumentation, biomaterials, and clinical healthcare systems.",
    fullDesc: "The B.Tech in Biomedical Engineering at Adamas University equips students with deep interdisciplinary training in electronic instrumentation, human physiology, medical imaging, 3D bioprinting, and bio-AI. Students gain extensive hands-on experience in state-of-the-art department laboratories and undertake clinical internships at leading super-specialty hospitals in Kolkata.",
    highlights: [
      "AICTE & UGC Recognized 4-Year Honors Degree",
      "Mandatory 6-Month Clinical / MedTech Industry Internship",
      "Specialization Tracks in Bio-AI, Instrumentation, and Biomaterials",
      "Hands-on Training with Medical Ultrasound, ECG/EEG, and 3D Bioprinters",
      "Preparation for GATE, GRE, and Global Higher Studies"
    ],
    eligibility: "Passed 10+2 examination with Physics, Mathematics, and Chemistry/Biology/Computer Science with minimum 50% marks (45% for reserved category). Valid score in WBJEE / JEE Main / Adamas University Engineering Admission Test (AUAT).",
    careerOutcomes: [
      "Biomedical Equipment Engineer (Siemens, Philips, GE Healthcare)",
      "Clinical Engineer in Multi-Specialty Hospitals",
      "R&D MedTech Product Designer",
      "Bio-Signal & AI Data Analyst",
      "Regulatory Affairs Specialist for Medical Devices",
      "Graduate Studies (MS / M.Tech) in Top Global Universities"
    ],
    curriculumOverview: [
      {
        yearOrSem: "Year 1 (Semesters 1 & 2)",
        courses: ["Engineering Mathematics I & II", "Basic Electrical & Bio-Electronics", "Human Anatomy & Physiology for Engineers", "Engineering Physics", "Python Programming for Engineers"]
      },
      {
        yearOrSem: "Year 2 (Semesters 3 & 4)",
        courses: ["Biomedical Sensors & Transducers", "Biophysical Signals & Systems", "Biomaterials & Biocompatibility", "Analog & Digital Circuits", "Biomechanics & Gait Analysis"]
      },
      {
        yearOrSem: "Year 3 (Semesters 5 & 6)",
        courses: ["Medical Imaging Systems (X-Ray, CT, MRI, Ultrasound)", "Biomedical Signal & Image Processing", "Tissue Engineering & 3D Bioprinting", "Healthcare AI & Machine Learning", "Medical Device Safety & Regulations"]
      },
      {
        yearOrSem: "Year 4 (Semesters 7 & 8)",
        courses: ["Clinical Engineering & Hospital Management", "Prosthetics & Rehabilitation Engineering", "Major Capstone Project I & II", "Hospital / Industry Internship", "Elective: Telemedicine & IoT"]
      }
    ],
    isFlagship: true
  }
];

export const SPECIALIZATION_CHIPS = [
  { name: "Medical Device Design", icon: "Stethoscope", desc: "Hardware & Sensor Systems" },
  { name: "Healthcare AI & Deep Learning", icon: "BrainCircuit", desc: "Diagnostic Algorithms" },
  { name: "Tissue Scaffolds & 3D Bio-Ink", icon: "Layers", desc: "Regenerative Medicine" },
  { name: "Clinical & Rehabilitation Tech", icon: "Activity", desc: "Assistive Exoskeletons" },
  { name: "Microfluidics & Lab-on-a-Chip", icon: "Microscope", desc: "Point-of-Care Testing" }
];
