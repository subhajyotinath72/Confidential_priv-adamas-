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
  },
  {
    id: "mtech-bme",
    degree: "M.Tech",
    title: "M.Tech in Biomedical Engineering",
    level: "Postgraduate",
    duration: "2 Years (4 Semesters)",
    intake: "18 Seats",
    affiliation: "School of Engineering & Technology, Adamas University",
    shortDesc: "An advanced 2-year postgraduate program focused on high-level R&D in healthcare AI, medical diagnostic devices, microfluidics, and regenerative biomaterials.",
    fullDesc: "Designed for engineering and science graduates seeking specialized expertise in medical technology innovation. The M.Tech program offers research-driven tracks in Bio-Signal Analytics, AI Diagnostics, and Biomechanics, concluding with a year-long thesis aligned with funded research projects or hospital R&D labs.",
    highlights: [
      "1-Year Dedicated Master's Research Thesis",
      "Access to High-Performance GPU Computing & Cleanroom Facilities",
      "Opportunities for Co-Authored Journal Publications & Patents",
      "Financial Stipends for Eligible GATE-Qualified Candidates",
      "Direct Bridge to Ph.D. Programs at Adamas and International Universities"
    ],
    eligibility: "B.Tech / B.E. degree in Biomedical, Electrical, Electronics, Instrumentation, Computer Science, Biotechnology, or M.Sc. in Physics/Electronics with minimum 55% marks. GATE score preferred but AUAT score accepted.",
    careerOutcomes: [
      "Senior MedTech R&D Scientist",
      "Healthcare AI Research Engineer",
      "Principal Biosensor Design Engineer",
      "Assistant Professor / Academic Researcher",
      "Medical Device Quality & Regulatory Lead"
    ],
    curriculumOverview: [
      {
        yearOrSem: "Semester 1",
        courses: ["Advanced Medical Signal Processing", "Nanobiotechnology & Controlled Drug Release", "Pattern Recognition in Health Informatics", "Research Methodology & Bioethics"]
      },
      {
        yearOrSem: "Semester 2",
        courses: ["Advanced Bio-Imaging & Diagnostic AI", "Microfluidics & Point-of-Care Devices", "Specialization Elective I", "Specialization Elective II"]
      },
      {
        yearOrSem: "Semesters 3 & 4",
        courses: ["Comprehensive Seminar & Dissertation Phase I", "Major Master's Thesis & Viva-Voce (Phase II)", "Patent / Publication Submission"]
      }
    ],
    isFlagship: true
  },
  {
    id: "phd-bme",
    degree: "Ph.D.",
    title: "Ph.D. in Biomedical Engineering",
    level: "Doctoral",
    duration: "3 to 5 Years",
    intake: "Varies based on Research Openings",
    affiliation: "School of Engineering & Technology, Adamas University",
    shortDesc: "Rigorous doctoral research program preparing scholars for academic leadership and industrial R&D in cutting-edge biomedical science & engineering.",
    fullDesc: "Ph.D. candidates conduct independent, interdisciplinary research under senior faculty supervision, collaborating with regional medical colleges and global research centers. Research topics span biosensors, 3D bioprinting scaffolds, deep learning radiology assistants, and neuro-rehabilitation robotics.",
    highlights: [
      "Full-Time and Part-Time Doctoral Fellowships Available",
      "State-of-the-Art Research Labs & Seed Funding Support",
      "Travel Grants for International & National IEEE/Springer Conferences",
      "Interdisciplinary Co-Supervision with Medical Doctors"
    ],
    eligibility: "Master’s degree (M.Tech / M.E. / M.Sc. / M.S.) in relevant discipline with minimum 60% marks (55% for SC/ST). Selection based on Adamas University Research Entrance Test (RET) and Personal Interview.",
    careerOutcomes: [
      "Tenure-Track University Faculty",
      "Postdoctoral Research Fellow",
      "Director of R&D in MedTech Enterprises",
      "Government Research Scientist (CSIR, ICMR, DST)"
    ],
    curriculumOverview: [
      {
        yearOrSem: "Coursework (Semester 1)",
        courses: ["Advanced Research Methodology & Statistical Modeling", "Bioethics & Intellectual Property Rights", "Advanced Elective in Doctoral Domain", "Literature Review & Proposal Defense"]
      },
      {
        yearOrSem: "Research Phase (Years 2 - 4)",
        courses: ["Independent Experimental & Computational Research", "Bi-Annual Progress Presentations", "Journal Publication & Patent Filing", "Final Thesis Submission & Public Defense"]
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
