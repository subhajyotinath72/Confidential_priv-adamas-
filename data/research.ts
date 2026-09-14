export interface ResearchTrack {
  id: "01" | "02" | "03";
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  keyLabs: string[];
  leadFacultyIds: string[];
  iconName: string;
  bgGradient: string;
  highlights: { label: string; value: string }[];
}

export const RESEARCH_TRACKS: ResearchTrack[] = [
  {
    id: "01",
    number: "01",
    title: "Biomedical Instrumentation & Signal Processing",
    subtitle: "Biosensors, Medical Imaging, Diagnostic Systems & Electrophysiology",
    description: "Focuses on designing next-generation electronic sensors, microfluidic chips, and advanced physiological signal processing algorithms. Researchers develop non-invasive diagnostic tools, wireless ECG/EEG monitoring systems, and optical biosensors for point-of-care disease screening.",
    tags: ["ECG / EEG / EMG Analytics", "Point-of-Care Biosensors", "Medical Ultrasound & MRI", "Lab-on-a-Chip Systems", "Optoelectronic Diagnostics", "Embedded Medical Systems"],
    keyLabs: ["Advanced Bio-Imaging & Sensing Lab", "Biosensor Development Suite", "Medical Electronics & Prototyping Workshop"],
    leadFacultyIds: ["fac-1", "fac-4", "fac-7"],
    iconName: "Activity",
    bgGradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
    highlights: [
      { label: "Active Patents", value: "11+" },
      { label: "Clinical Trials", value: "4 Ongoing" },
      { label: "Lab Equipment", value: "High-Speed Digitizers, Microfluidic Printers" }
    ]
  },
  {
    id: "02",
    number: "02",
    title: "Biomaterials & Tissue Engineering",
    subtitle: "3D Bioprinting, Regenerative Medicine, Implants & Drug Delivery",
    description: "Combines polymer science, cell biology, and 3D printing technology to fabricate bio-inspired materials for damaged organ repair, bone defect fillers, and patient-tailored prosthetic implants. Includes targeted nanomedicine for localized drug release with minimal side effects.",
    tags: ["3D Bioprinting & Bio-Inks", "Polymeric Scaffolds", "Targeted Drug Delivery", "Orthopedic & Dental Implants", "Antimicrobial Coatings", "Stem Cell Culture"],
    keyLabs: ["Tissue Engineering & Regenerative Medicine Suite", "Biomaterials Synthesis & Characterization Lab", "Biomechanics & Gait Analytics Hub"],
    leadFacultyIds: ["fac-2", "fac-5", "fac-8"],
    iconName: "Dna",
    bgGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    highlights: [
      { label: "Bioprinting Resolution", value: "10 Microns" },
      { label: "Industry MoUs", value: "3 Implant Makers" },
      { label: "Tissue Models", value: "Cartilage, Skin, Vascular" }
    ]
  },
  {
    id: "03",
    number: "03",
    title: "Health Informatics & AI in Medicine",
    subtitle: "Medical AI/ML, Telemedicine, Wearable Tech & Rehabilitation Robotics",
    description: "Leverages artificial intelligence, computer vision, and IoT connectivity to build intelligent diagnostic assistants, tele-ICU monitoring infrastructure, wearable stroke recovery bands, and assistive exoskeletons for neuro-rehabilitation.",
    tags: ["Deep Learning in Radiology", "Telemedicine Platforms", "Wearable Health Monitors", "Rehabilitation Robotics", "Clinical NLP & EHR Mining", "Edge-AI Medical Devices"],
    keyLabs: ["Healthcare AI & Neural Engineering Hub", "Clinical Informatics & Tele-Health Lab", "Assistive Robotics & Motion Analysis Studio"],
    leadFacultyIds: ["fac-3", "fac-6"],
    iconName: "Brain",
    bgGradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    highlights: [
      { label: "AI Datasets", value: "50,000+ Anonymized Scans" },
      { label: "Accuracy Rate", value: "98.4% on Diagnostic Models" },
      { label: "Tele-Health Reach", value: "25+ Rural Health Centers" }
    ]
  }
];

export interface ResearchCenter {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  headName: string;
  established: string;
  focusArea: string;
  icon: string;
}

export const RESEARCH_CENTERS: ResearchCenter[] = [
  {
    id: "center-1",
    name: "Center for Advanced Bio-Imaging & Sensing",
    shortDesc: "Developing ultra-sensitive biosensors, microfluidic chips, and non-invasive diagnostic imaging tools.",
    fullDesc: "Equipped with state-of-the-art optical spectroscopy, microfluidic lithography, and high-frequency ultrasound characterization suites.",
    headName: "Dr. Arindam Banerjee",
    established: "2021",
    focusArea: "Biomedical Instrumentation",
    icon: "Scan"
  },
  {
    id: "center-2",
    name: "Tissue Engineering & Regenerative Medicine Lab",
    shortDesc: "Synthesizing bio-inks, polymeric scaffolds, and patient-specific implant biomaterials.",
    fullDesc: "Housing Class-1000 cleanroom environments, multi-axis 3D bioprinters, and cell incubator facilities for regenerative medicine research.",
    headName: "Dr. Sunita Roy",
    established: "2020",
    focusArea: "Biomaterials",
    icon: "Layers"
  },
  {
    id: "center-3",
    name: "Healthcare AI & Neural Engineering Hub",
    shortDesc: "Pioneering computer vision and deep learning models for radiological screening and tele-health.",
    fullDesc: "Powered by high-performance GPU server clusters dedicated to training diagnostic neural networks on anonymized clinical datasets.",
    headName: "Dr. Bikramjit Das",
    established: "2022",
    focusArea: "Medical AI & Informatics",
    icon: "Cpu"
  },
  {
    id: "center-4",
    name: "Clinical Translation & Assistive Tech Cell",
    shortDesc: "Bridging laboratory innovations with clinical trials and patient rehabilitation devices.",
    fullDesc: "Works in close coordination with Kolkata regional hospitals to test wearable stroke rehab monitors and prosthetic devices.",
    headName: "Prof. Sourav Chakraborty",
    established: "2022",
    focusArea: "Clinical Engineering",
    icon: "HeartPulse"
  },
  {
    id: "center-5",
    name: "Biosensor R&D Prototyping Unit",
    shortDesc: "Rapid prototyping of wearable biosignal patches and lab-on-a-chip diagnostic cartridges.",
    fullDesc: "Supports student startups and industry sponsored research in medical device physical design and PCB layout.",
    headName: "Dr. Ananya Mukherjee",
    established: "2023",
    focusArea: "Medical Prototyping",
    icon: "Microscope"
  },
  {
    id: "center-6",
    name: "Implant Biomechanics & Motion Studio",
    shortDesc: "Analyzing human gait, joint kinematics, and finite element stress models for prosthetics.",
    fullDesc: "Features 8-camera motion capture infrared arrays, force plates, and computational FEA software for orthopedic biomechanics.",
    headName: "Dr. Debasis Ghosh",
    established: "2021",
    focusArea: "Biomechanics",
    icon: "Footprints"
  }
];
