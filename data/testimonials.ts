export interface Testimonial {
  id: string;
  name: string;
  degree: string;
  batch: string;
  currentRole: string;
  companyOrUniversity: string;
  quote: string;
  avatar: string;
}

export interface SpotlightItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  linkText: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Subhashis Roy",
    degree: "B.Tech in Biomedical Engineering",
    batch: "Class of 2024",
    currentRole: "Clinical Systems Specialist",
    companyOrUniversity: "GE HealthCare, India",
    quote: "The practical exposure in medical instrumentation labs at Adamas University gave me a massive head start. Working directly with ultrasound digitizers and patient monitors prepared me for real hospital deployments from day one.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "test-2",
    name: "Dr. Sayani Dutta",
    degree: "M.Tech in Biomedical Engineering",
    batch: "Class of 2022",
    currentRole: "Postdoctoral Research Fellow",
    companyOrUniversity: "National University of Singapore (NUS)",
    quote: "Adamas provided an exceptional research atmosphere. Under Dr. Sunita Roy's guidance, my master's thesis on 3D bioprinted hydrogels led to two international journal publications and my PhD fellowship abroad.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "test-3",
    name: "Rohan Bhattacharya",
    degree: "B.Tech in Biomedical Engineering",
    batch: "Class of 2025",
    currentRole: "Healthcare AI Engineer",
    companyOrUniversity: "Philips Innovation Campus",
    quote: "The integration of AI modules alongside core biomedical curriculum at Adamas SET is unmatched. I gained deep hands-on expertise in PyTorch and DICOM medical imaging analytics during my capstone project.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
  }
];

export const SPOTLIGHT_ITEMS: SpotlightItem[] = [
  {
    id: "spot-1",
    title: "Advanced 3D Bioprinting Suite",
    category: "Infrastructure Excellence",
    description: "State-of-the-art multi-material bio-printer enabling multi-layer scaffold synthesis for cartilage and skin replacement.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600",
    linkText: "Explore Laboratory Facilities"
  },
  {
    id: "spot-2",
    title: "Hospital Clinical Immersion Program",
    category: "Clinical Exposure",
    description: "Final-year students undergo hands-on clinical rotations across ICU, Radiology, and Cath labs in Kolkata partner hospitals.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    linkText: "View Internship Partners"
  },
  {
    id: "spot-3",
    title: "Bio-AI Computational Cluster",
    category: "Healthcare Informatics",
    description: "High-performance GPU cluster dedicated to training transformer models on brain MRIs and echocardiograms.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
    linkText: "Discover AI Projects"
  },
  {
    id: "spot-4",
    title: "Student MedTech Incubator Cell",
    category: "Entrepreneurship",
    description: "Providing seed grants, mentor guidance, and patenting assistance to student teams converting final year projects into commercial startups.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    linkText: "Learn About Incubation"
  }
];
