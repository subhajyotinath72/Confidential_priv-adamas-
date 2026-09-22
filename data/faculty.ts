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
    name: "Dr. Animesh Halder",
    designation: "Associate Professor",
    trackId: "01",
    degrees: "Ph.D. in Biomedical Applications, M.Tech (Tezpur Univ)",
    almaMater: "Adamas University / Formerly Research Fellow at IISc",
    specialization: "Biosensors, Non-Invasive Diagnostics, Neural Signal Processing",
    email: "animesh.halder@adamasuniversity.ac.in",
    phone: "+91 (033) 2587-9001",
    room: "SET Building, Room 302",
    bio: "Dr. Animesh Halder has extensive academic and clinical research experience in biomedical signal processing and wearable biosensor systems. He leads the Center for Advanced Bio-Imaging & Sensing at Adamas University.",
    researchFocus: ["Cardiovascular Signal Analytics", "Wearable ECG & EEG Sensors", "Point-of-Care Diagnostics"],
    publicationsCount: 68,
    patentsCount: 5,
    avatar: "/faculty/animesh-halder.jpg",
    featuredPublications: [
      "Halder, A. et al. (2025). High-Resolution Wearable ECG Sensing Array for Early Arrhythmia Detection. IEEE Trans. Biomed. Eng.",
      "Halder, A. & Roy, S. (2024). Wavelet-Based Denoising Algorithms for Ambulatory EEG Monitoring. Biosensors Journal."
    ]
  },
  {
    id: "fac-2",
    name: "Dr. Sayanti Chowdhury",
    designation: "Associate Professor",
    trackId: "02",
    degrees: "Ph.D. in Signal Processing (Jadavpur Univ), M.Tech (Calcutta Univ)",
    almaMater: "Adamas University / Formerly Jadavpur University",
    specialization: "Bioceramics, 3D Bioprinting Scaffolds, Controlled Drug Delivery",
    email: "sayanti.chowdhury@adamasuniversity.ac.in",
    phone: "+91 (033) 2587-9002",
    room: "SET Building, Room 305",
    bio: "Dr. Sayanti Chowdhury specializes in biomedical engineering, signal processing, and medical instrumentation. She collaborates extensively with researchers and clinical partners on translational health technologies.",
    researchFocus: ["Biomedical Signal Processing", "Medical Image AI", "Point-of-Care Diagnostics"],
    publicationsCount: 45,
    patentsCount: 3,
    avatar: "/faculty/sayanti-chowdhury.jpg",
    featuredPublications: [
      "Chowdhury, S. et al. (2025). Advanced Signal Analytics for Non-Invasive Clinical Monitoring. IEEE Trans. Biomed. Eng.",
      "Chowdhury, S. & Halder, A. (2024). Wavelet-Based Biosignal Feature Extraction for Diagnostic Screening. Biosensors Journal."
    ]
  }
];
