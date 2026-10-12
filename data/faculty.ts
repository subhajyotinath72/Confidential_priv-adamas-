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
    designation: "Assistant Professor - III",
    trackId: "01",
    degrees: "Ph.D. in Applied Optics & Photonics (Calcutta Univ), M.Tech in Bioelectronics (Tezpur Univ)",
    almaMater: "Calcutta University | Former Scientist C, S.N. Bose Centre | Ex Project Manager, C-DAC",
    specialization: "Biomedical Instrumentation, Non-Invasive Medical Devices, Applied Optics & Bio-AI",
    email: "animesh.halder@adamasuniversity.ac.in",
    phone: "+91 8744080141",
    room: "SET Building, Room 302",
    bio: "Dr. Animesh Halder is an accomplished academic and technologist with over 14 years of experience bridging higher education, applied research, and national-level technology initiatives. He serves as the Program-In-Charge of the Biomedical Engineering Program and Assistant Professor-III at Adamas University, and is the Founder of the BioAlgorithm Lab, where he advances affordable, data-driven medical devices and connected healthcare solutions. Previously, he served as Scientist C at the S.N. Bose National Centre for Basic Sciences and Project Manager / Senior Project Engineer at C-DAC New Delhi, leading translational health projects, patented non-invasive point-of-care devices (such as neonatal bilirubinometers and fluid electrolyte monitors), and successful technology transfers to clinical and industrial stakeholders. He holds a Ph.D. in Applied Optics & Photonics from the University of Calcutta and an M.Tech in Bioelectronics from Tezpur University.",
    researchFocus: [
      "Biomedical Instrumentation & Medical Electronics",
      "Non-Invasive Point-of-Care Diagnostics",
      "Applied Optics & Photonic Sensing",
      "Bio-AI, Machine Learning & Clinical Data Analysis",
      "Brain-Computer Interfaces (BCI)"
    ],
    publicationsCount: 26,
    patentsCount: 1,
    avatar: "/faculty/animesh-halder.jpg",
    featuredPublications: [
      "Halder, A. et al. (2020). Large scale Validation of a New Non-Invasive and Non-Contact Bilirubinometer in Neonates with Risk Factors. Scientific Reports, 10, 11149.",
      "Halder, A. et al. (2019). A Novel Whole Spectrum-based Non-invasive Screening Device for Neonatal Hyperbilirubinemia. IEEE Journal of Biomedical and Health Informatics, 23(6), 2347.",
      "Mazumdar, H., Das, S., Khondakar, K. R., Halder, A., & Kaushik, A. (2026). Enhancing point-of-care diagnosis through brain–computer interaction and IoT. In Artificial Intelligence and Brain-Computer Interfaces in Healthcare (pp. 205-217). Academic Press.",
      "Halder, A. et al. (2019). NaLiK, a Self-developed Device for Rapid, Reliable and Simultaneous Assessment of Sodium, Lithium and Potassium for Management of Fluid Balance and Bipolar Disorder. Journal of Analytical Atomic Spectrometry, 34, 1875."
    ]
  },
  {
    id: "fac-2",
    name: "Dr. Sayanti Chaudhuri",
    designation: "Assistant Professor - I",
    trackId: "01",
    degrees: "Ph.D. in Electrical Engg (Jadavpur Univ), M.E. in Biomedical Engg (Jadavpur Univ)",
    almaMater: "Jadavpur University | Calcutta Institute of Engg & Management (WBUT)",
    specialization: "Acoustic Signal Processing, Digital Signal Processing (DSP), Bio-Signals & Embedded Systems",
    email: "sayanti.chaudhuri@adamasuniversity.ac.in",
    phone: "+91 9432470022",
    room: "SET Building, Room 305",
    bio: "Dr. Sayanti Chaudhuri is an Assistant Professor in the Department of Biomedical Engineering at Adamas University, Kolkata. With over a decade of combined academic, research, and laboratory mentoring experience, her expertise centers on digital signal processing (DSP), acoustic signal processing, embedded systems, and AI/ML algorithms for audio and bio-signal enhancement. She holds a Ph.D. in Electrical Engineering and an M.E. in Biomedical Engineering from Jadavpur University, along with a B.Tech in Instrumentation & Control Engineering. Previously, she served as a doctoral researcher and teaching assistant at Jadavpur University, and as a Senior Research Fellow at the National Institute for the Orthopaedically Handicapped (NIOH), Kolkata, where she developed an indigenous pressure-sensing gait analyzer. Her research has been published in high-impact international journals including IEEE Transactions on Industrial Informatics, Measurement, and Biomedical Engineering Letters.",
    researchFocus: [
      "Digital Signal Processing (DSP) & Acoustic Measurements",
      "Bio-Signal Acquisition & Denoising Algorithms",
      "Embedded Systems & Microcontroller Interfacing",
      "AI/ML for Audio & Biomedical Applications",
      "Room Acoustic Equalization & Binaural Hearing Support"
    ],
    publicationsCount: 6,
    patentsCount: 0,
    avatar: "/faculty/sayanti-chowdhury.jpg",
    featuredPublications: [
      "Ganguly, B., Chaudhuri, S. et al. (2020). Wavelet kernel-based convolutional neural network for localization of partial discharge sources within a power apparatus. IEEE Transactions on Industrial Informatics, 17(3), 1831-1841.",
      "Chaudhuri, S., Ghosh, S. et al. (2023). Denoising of partial discharge signal using a hybrid framework of total variation denoising-autoencoder. Measurement, 223, 113674.",
      "Dey, D., Chaudhuri, S., & Munshi, S. (2018). Obstructive sleep apnoea detection using a convolutional neural network based deep learning framework. Biomedical Engineering Letters, 8, 95-100.",
      "Chaudhuri, S., Dey, D., & Munshi, S. (2022). Room Response Equalization of Non-Minimum Phase Systems Using Kautz Filter and Sparse Autoencoder: A Hybrid Approach. IETE Journal of Research."
    ]
  }
];
