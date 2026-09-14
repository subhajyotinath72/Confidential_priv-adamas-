export interface Faculty {
  id: string;
  name: string;
  designation: string;
  trackId: "01" | "02" | "03";
  degrees: string;
  almaMater: string;
  specialization: string;
  email: string;
  phone: string;
  room: string;
  bio: string;
  researchFocus: string[];
  publicationsCount: number;
  patentsCount: number;
  avatar: string;
  featuredPublications: string[];
}

export const FACULTY_MEMBERS: Faculty[] = [
  {
    id: "fac-1",
    name: "Dr. Arindam Banerjee",
    designation: "Professor & Head of Department",
    trackId: "01",
    degrees: "Ph.D. in Biomedical Instrumentation, M.Tech (IIT Kharagpur)",
    almaMater: "Adamas University / Formerly Research Fellow at IISc",
    specialization: "Biosensors, Non-Invasive Diagnostics, Neural Signal Processing",
    email: "arindam.banerjee@adamasuniversity.ac.in",
    phone: "+91 (033) 2587-9001",
    room: "SET Building, Room 302",
    bio: "Dr. Arindam Banerjee has over 18 years of academic and clinical research experience in biomedical signal processing and wearable biosensor systems. He leads the Center for Advanced Bio-Imaging & Sensing at Adamas University.",
    researchFocus: ["Cardiovascular Signal Analytics", "Wearable ECG & EEG Sensors", "Point-of-Care Diagnostics"],
    publicationsCount: 68,
    patentsCount: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    featuredPublications: [
      "Banerjee, A. et al. (2025). High-Resolution Wearable ECG Sensing Array for Early Arrhythmia Detection. IEEE Trans. Biomed. Eng.",
      "Banerjee, A. & Roy, S. (2024). Wavelet-Based Denoising Algorithms for Ambulatory EEG Monitoring. Biosensors Journal."
    ]
  },
  {
    id: "fac-2",
    name: "Dr. Sunita Roy",
    designation: "Associate Professor",
    trackId: "02",
    degrees: "Ph.D. in Biomaterials Engineering (NITH), M.S. (Calcutta Univ)",
    almaMater: "Adamas University / Former Scientist at CSIR-CGCRI",
    specialization: "Bioceramics, 3D Bioprinting Scaffolds, Controlled Drug Delivery",
    email: "sunita.roy@adamasuniversity.ac.in",
    phone: "+91 (033) 2587-9002",
    room: "SET Building, Room 305",
    bio: "Dr. Sunita Roy specializes in tissue scaffolding for orthopedic repair and bio-ink formulation for 3D bioprinting. She collaborates extensively with leading hospitals in Kolkata for clinical translational studies.",
    researchFocus: ["Polymeric Tissue Scaffolds", "Nanomedicine & Targeted Delivery", "Bio-Ink Synthesis"],
    publicationsCount: 45,
    patentsCount: 3,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    featuredPublications: [
      "Roy, S. et al. (2025). Chitosan-Hydroxyapatite Nanocomposite Scaffolds for Bone Regeneration. Biomaterials Science.",
      "Roy, S. & Das, P. (2023). Injectable Hydrogels for Localized Chemotherapy Delivery. ACS Applied Bio Materials."
    ]
  },
  {
    id: "fac-3",
    name: "Dr. Bikramjit Das",
    designation: "Associate Professor",
    trackId: "03",
    degrees: "Ph.D. in Computer Science & Medical AI, M.Tech (Jadavpur Univ)",
    almaMater: "Adamas University",
    specialization: "Deep Learning in Radiology, Predictive Healthcare Analytics, Telemedicine",
    email: "bikramjit.das@adamasuniversity.ac.in",
    phone: "+91 (033) 2587-9003",
    room: "SET Building, Room 310",
    bio: "Dr. Bikramjit Das pioneers research in vision transformers for chest X-ray and MRI segmentation. He directs the Healthcare AI & Neural Engineering Hub at the department.",
    researchFocus: ["Medical Image Segmentation", "AI-Driven Tele-ICU Platforms", "Multimodal Clinical Predictive Models"],
    publicationsCount: 52,
    patentsCount: 4,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    featuredPublications: [
      "Das, B. et al. (2025). Transformer-Based Multi-Class Brain Tumor Segmentation from Multi-Modal MRI. Medical Image Analysis.",
      "Das, B. & Mukhopadhyay, T. (2024). Edge-AI Architecture for Rural Tele-Diagnostic Screening. Healthcare Tech Letters."
    ]
  },
  {
    id: "fac-4",
    name: "Dr. Ananya Mukherjee",
    designation: "Assistant Professor",
    trackId: "01",
    degrees: "Ph.D. in Bio-Electronics (IIEST Shibpur)",
    almaMater: "Adamas University",
    specialization: "Microfluidic Biosensors, Lab-on-a-Chip, Optoelectronic Diagnostics",
    email: "ananya.mukherjee@adamasuniversity.ac.in",
    phone: "+91 (033) 2587-9004",
    room: "SET Building, Room 312",
    bio: "Dr. Ananya Mukherjee develops low-cost microfluidic chips for rapid pathogen identification and blood biomarker quantification, aiming for rural point-of-care utility.",
    researchFocus: ["Lab-on-a-Chip Architecture", "Optical Biosensors", "Immunoassay Automation"],
    publicationsCount: 28,
    patentsCount: 2,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    featuredPublications: [
      "Mukherjee, A. et al. (2024). Portable Microfluidic Chip for Rapid Sepsis Biomarker Detection. Biosensors & Bioelectronics."
    ]
  },
  {
    id: "fac-5",
    name: "Dr. Debasis Ghosh",
    designation: "Assistant Professor",
    trackId: "02",
    degrees: "Ph.D. in Bio-Materials & Implants (IIT Kharagpur)",
    almaMater: "Adamas University",
    specialization: "Prosthetic Design, Implant Biomechanics, Motion Analysis",
    email: "debasis.ghosh@adamasuniversity.ac.in",
    phone: "+91 (033) 2587-9005",
    room: "SET Building, Room 315",
    bio: "Dr. Debasis Ghosh bridges biomechanical modeling with clinical rehabilitation. He works on patient-customized joint prostheses and gait biomechanics assessment.",
    researchFocus: ["Orthopedic Implant Design", "Finite Element Biomechanics", "Lower-Limb Assistive Exoskeletons"],
    publicationsCount: 34,
    patentsCount: 2,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    featuredPublications: [
      "Ghosh, D. et al. (2025). Topology Optimization of Patient-Specific Hip Implants. Journal of Biomechanical Engineering."
    ]
  },
  {
    id: "fac-6",
    name: "Dr. Priya Sen",
    designation: "Assistant Professor",
    trackId: "03",
    degrees: "Ph.D. in Health Informatics (Manipal Univ)",
    almaMater: "Adamas University",
    specialization: "Electronic Health Records Mining, Wearable Biosignal Analytics, Rehabilitation AI",
    email: "priya.sen@adamasuniversity.ac.in",
    phone: "+91 (033) 2587-9006",
    room: "SET Building, Room 318",
    bio: "Dr. Priya Sen leads research in intelligent rehabilitation games and wearable stroke-recovery monitors, working closely with clinical physical therapists.",
    researchFocus: ["Rehabilitation Robotics & VR", "Stroke Recovery Analytics", "Wearable Inertial Sensor Processing"],
    publicationsCount: 22,
    patentsCount: 1,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    featuredPublications: [
      "Sen, P. et al. (2024). Inertial Sensor Fusion for Quantitative Upper-Limb Rehabilitation. IEEE Trans. Neural Syst. Rehabil. Eng."
    ]
  },
  {
    id: "fac-7",
    name: "Prof. Sourav Chakraborty",
    designation: "Professor of Practice",
    trackId: "01",
    degrees: "M.Tech in Medical Electronics, 20+ Yrs Industry Experience",
    almaMater: "Formerly Vice President R&D, Healthcare MedTech Devices",
    specialization: "Medical Device Regulatory Standards (ISO 13485, US-FDA), Clinical Engineering",
    email: "sourav.chakraborty@adamasuniversity.ac.in",
    phone: "+91 (033) 2587-9007",
    room: "SET Building, Room 320",
    bio: "Prof. Sourav Chakraborty brings 20 years of medical device commercialization experience to Adamas University, mentoring students in device prototyping, clinical trial protocol, and regulatory compliance.",
    researchFocus: ["Medical Device Commercialization", "CE & FDA Compliance Pathways", "Clinical Risk Assessment"],
    publicationsCount: 15,
    patentsCount: 6,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    featuredPublications: [
      "Chakraborty, S. (2023). Regulatory Strategy for AI-Enabled Software as a Medical Device (SaMD) in South Asia. Healthcare Regulation Standard."
    ]
  },
  {
    id: "fac-8",
    name: "Dr. Ritu Chatterji",
    designation: "Assistant Professor",
    trackId: "02",
    degrees: "Ph.D. in Nanobiotechnology (Calcutta Univ)",
    almaMater: "Adamas University",
    specialization: "Nanoparticle Therapeutics, Biosensors, Biomimetic Surfaces",
    email: "ritu.chatterji@adamasuniversity.ac.in",
    phone: "+91 (033) 2587-9008",
    room: "SET Building, Room 322",
    bio: "Dr. Ritu Chatterji researches antimicrobial nanocoatings for surgical implants and targeted drug carriers for oncological applications.",
    researchFocus: ["Antimicrobial Nanocoatings", "Targeted Cancer Nanomedicine", "Bio-Surface Functionalization"],
    publicationsCount: 30,
    patentsCount: 2,
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
    featuredPublications: [
      "Chatterji, R. et al. (2024). Silver Nanoparticle Functionalized Titanium Implants for Bacterial Biofilm Inhibition. Journal of Nanobiotechnology."
    ]
  }
];
