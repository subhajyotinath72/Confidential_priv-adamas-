"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  ChevronRight,
  BookOpen,
  ArrowRight,
  Download,
  CheckCircle,
  Award,
  Building2,
  Users,
  Target,
  FlaskConical,
  FileText,
  Sparkles,
  GraduationCap,
  Clock,
  HeartPulse,
  Calendar,
  Layers,
  Activity,
  Briefcase
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export const ProgramDetailView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const quickLinks = [
    { id: "about", label: "About" },
    { id: "vision-mission", label: "Vision & Mission" },
    { id: "faculty-members", label: "Faculty Members" },
    { id: "technical-assistants", label: "Technical Assistants" },
     { id: "cos-bme", label: "All COs of BME" },
    { id: "courses-offered", label: "Courses Offered" },
    { id: "lesson-plan", label: "Lesson Plan" },
    { id: "laboratories", label: "Laboratories" },
    { id: "projects-consultancy", label: "Projects & Consultancy" },
    { id: "events-activities", label: "Events and Activities" },
    { id: "interaction", label: "Interaction" },
    { id: "awards-honours", label: "Awards & Honours" },
    { id: "sriti-alumni", label: "SRITI - Alumni Reunion" },
  ];

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Department Quick Links Sidebar (4 cols) */}
          <div className="lg:col-span-4 sticky top-24 z-30">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              
              {/* Header Strip */}
              <div className="bg-[#103E3B] text-white px-5 py-4 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider">
                  DEPARTMENT QUICK LINKS
                </h3>
              </div>

              {/* Navigation Link List */}
              <div className="divide-y divide-slate-100 text-xs text-slate-700">
                {quickLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleScrollTo(link.id)}
                      className={`w-full px-5 py-3.5 flex items-center justify-between text-left transition-all group ${
                        isActive
                          ? "bg-teal-50 text-[#103E3B] font-bold border-l-4 border-[#103E3B]"
                          : "hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span className="font-medium">{link.label}</span>
                      <ExternalLink
                        className={`w-3.5 h-3.5 transition-colors ${
                          isActive
                            ? "text-[#103E3B]"
                            : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Main Content Cards Container (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. About the Program Card */}
            <div
              id="about"
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 scroll-mt-24 text-slate-800"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                About the Program
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                <p>
                  The Bachelor of Technology in Biomedical Engineering at the Department of Biomedical Engineering, Adamas University, is designed for students who want to work at the intersection of engineering and healthcare. The curriculum combines core engineering fundamentals — electronics, signal processing, and embedded systems — with specialized biomedical subjects such as medical imaging, biomaterials, tissue engineering, and health informatics.
                </p>
                <p>
                  Students gain hands-on exposure through cleanroom labs, clinical hospital rotations, and industry-sponsored capstone projects, preparing them for careers in medical device design, hospital biomedical engineering, healthcare AI, and advanced research.
                </p>
              </div>

              {/* 4 Specialization Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center text-xs font-semibold text-slate-800 hover:border-teal-400 transition-colors">
                  <span className="mr-2 text-teal-600 font-bold">→</span>
                  <span>Biomedical Instrumentation & Signal Processing</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center text-xs font-semibold text-slate-800 hover:border-teal-400 transition-colors">
                  <span className="mr-2 text-teal-600 font-bold">→</span>
                  <span>Biomaterials & Tissue Engineering</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center text-xs font-semibold text-slate-800 hover:border-teal-400 transition-colors">
                  <span className="mr-2 text-teal-600 font-bold">→</span>
                  <span>Medical Imaging & Diagnostics</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center text-xs font-semibold text-slate-800 hover:border-teal-400 transition-colors">
                  <span className="mr-2 text-teal-600 font-bold">→</span>
                  <span>Health Informatics & AI in Medicine</span>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleScrollTo("curriculum-syllabus")}
                  className="px-5 py-2.5 rounded-full text-xs font-bold border border-slate-300 text-slate-800 hover:bg-slate-100 transition-colors shadow-2xs"
                >
                  View Full Curriculum
                </button>
                <Link
                  href="/contact#apply"
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#103E3B] text-white hover:bg-[#0D3330] transition-colors shadow-md"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* 2. Vision & Mission Card */}
            <div
              id="vision-mission"
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 scroll-mt-24 text-slate-800"
            >
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-700 uppercase tracking-widest">
                <Target className="w-4 h-4 text-teal-600" />
                <span>Department Core Philosophy</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-serif">
                Vision & Mission
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-teal-50/60 border border-teal-200 p-5 rounded-2xl space-y-3">
                  <h3 className="text-sm font-bold text-[#103E3B] uppercase tracking-wider">
                    Our Vision
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    To become a premier center of excellence in Biomedical Engineering education, translational research, and MedTech innovation, empowering engineers to solve global clinical challenges.
                  </p>
                </div>

                <div className="bg-amber-50/60 border border-amber-200 p-5 rounded-2xl space-y-3">
                  <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider">
                    Our Mission
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-600 font-bold">•</span>
                      <span>Deliver rigorous interdisciplinary education bridging life sciences and engineering.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-600 font-bold">•</span>
                      <span>Foster active clinical immersions and hospital industry partnerships.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-600 font-bold">•</span>
                      <span>Inculcate ethical design, regulatory awareness, and lifelong innovation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Faculty Members Section */}
            <div
              id="faculty-members"
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 scroll-mt-24 text-slate-800"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-teal-700 uppercase tracking-widest block">
                    Academic Leadership
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 font-serif">
                    Department Faculty Members
                  </h2>
                </div>
                <Link
                  href="/people"
                  className="text-xs font-bold text-teal-800 hover:underline flex items-center"
                >
                  <span>Full Directory</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    AB
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Dr. Arindam Banerjee</h4>
                    <p className="text-[11px] text-teal-700 font-semibold">Head of Department & Associate Professor</p>
                    <p className="text-[10px] text-slate-500">Ph.D. IIT Kharagpur • Bio-Signal AI</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    SC
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Prof. Sourav Chakraborty</h4>
                    <p className="text-[11px] text-teal-700 font-semibold">Assistant Professor & Clinical Placement Lead</p>
                    <p className="text-[10px] text-slate-500">M.Tech Jadavpur • Medical Instrumentation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Curriculum & Syllabus Section */}
            <div
              id="curriculum-syllabus"
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 scroll-mt-24 text-slate-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest block">
                    8-Semester Roadmap
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 font-serif">
                    Curriculum & Syllabus
                  </h2>
                </div>
                <button
                  onClick={() => setDownloadModalOpen(true)}
                  className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100 transition-colors"
                >
                  <Download className="w-4 h-4 mr-1.5" />
                  <span>Download Syllabus PDF</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                  <div className="font-bold text-[#103E3B] uppercase border-b border-slate-200 pb-1">
                    Year 1 (Semesters 1 & 2)
                  </div>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>• Engineering Mathematics I & II</li>
                    <li>• Basic Bio-Electronics & Circuits</li>
                    <li>• Human Anatomy & Physiology</li>
                    <li>• Python Programming for Engineers</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                  <div className="font-bold text-[#103E3B] uppercase border-b border-slate-200 pb-1">
                    Year 2 (Semesters 3 & 4)
                  </div>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>• Biomedical Sensors & Transducers</li>
                    <li>• Biophysical Signals & Systems</li>
                    <li>• Biomaterials & Biocompatibility</li>
                    <li>• Analog & Digital Signal Processing</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                  <div className="font-bold text-[#103E3B] uppercase border-b border-slate-200 pb-1">
                    Year 3 (Semesters 5 & 6)
                  </div>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>• Medical Imaging Systems (X-Ray, CT, MRI)</li>
                    <li>• Tissue Engineering & 3D Bioprinting</li>
                    <li>• Healthcare AI & Machine Learning</li>
                    <li>• Medical Device Safety & Regulations</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                  <div className="font-bold text-[#103E3B] uppercase border-b border-slate-200 pb-1">
                    Year 4 (Semesters 7 & 8)
                  </div>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>• Clinical Hospital Rotation & Internship</li>
                    <li>• Prosthetics & Assistive Tech</li>
                    <li>• Major Capstone Industry Project</li>
                    <li>• Telemedicine & Healthcare IoT</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Course Outcomes (COs) Card */}
            <div
              id="cos-bme"
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-4 scroll-mt-24 text-slate-800"
            >
              <h2 className="text-2xl font-bold text-slate-900 font-serif">
                All COs of BME (Course Outcomes)
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our curriculum follows Outcome-Based Education (OBE) guidelines mandated by AICTE & NBA. Every course has mapped Course Outcomes (COs) assessing technical competence, ethical design, and clinical problem-solving.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
                <div className="font-bold text-slate-900">Key Outcome Competencies:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                  <div>✓ CO1: Design bio-instrumentation hardware</div>
                  <div>✓ CO2: Apply signal processing algorithms</div>
                  <div>✓ CO3: Formulate biocompatible polymers</div>
                  <div>✓ CO4: Evaluate clinical device compliance</div>
                </div>
              </div>
            </div>

            {/* 6. Laboratories Section */}
            <div
              id="laboratories"
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 scroll-mt-24 text-slate-800"
            >
              <h2 className="text-2xl font-bold text-slate-900 font-serif">
                Department Laboratories & Cleanrooms
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                  <h4 className="font-bold text-slate-900">1. Bio-Electronics & Sensors Lab</h4>
                  <p className="text-slate-600">ECG, EEG, EMG telemetry kits, DSO oscilloscopes, and FPGA bio-amplifiers.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                  <h4 className="font-bold text-slate-900">2. 3D Bioprinting & Biomaterials Suite</h4>
                  <p className="text-slate-600">Extrusion bioprinters, hydrogel formulation, and CO2 incubator facilities.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                  <h4 className="font-bold text-slate-900">3. Medical Imaging & PACS Simulation</h4>
                  <p className="text-slate-600">DICOM processing workstations, ultrasound phantoms, and MATLAB imaging suites.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                  <h4 className="font-bold text-slate-900">4. Clinical Virtual ICU Simulator</h4>
                  <p className="text-slate-600">Multi-para monitors, defibrillator testers, and patient simulation mannequins.</p>
                </div>
              </div>
            </div>

            {/* 7. SRITI - Alumni Reunion Section */}
            <div
              id="sriti-alumni"
              className="bg-[#103E3B] text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-4 scroll-mt-24"
            >
              <div className="flex items-center space-x-2 text-xs font-bold text-[#F7D6C8] uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Alumni Network</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">
                SRITI - Biomedical Engineering Alumni Network
              </h2>
              <p className="text-xs text-[#F7D6C8]/90 leading-relaxed">
                SRITI connects BME graduates working across leading multinational healthcare enterprises (Siemens, Philips, GE, Medtronic) and top research institutes worldwide. Alumni actively mentor current students for placements, higher studies (GATE/GRE), and startup incubation.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Download Modal */}
      <Modal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        title="Download B.Tech BME Syllabus PDF"
      >
        <div className="space-y-4 text-slate-900 text-xs">
          <p className="text-slate-600 leading-relaxed">
            Enter your details below to download the official 4-year B.Tech Biomedical Engineering curriculum brochure with course codes and credit allocations.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Syllabus download link sent to your email!");
              setDownloadModalOpen(false);
            }}
            className="space-y-3"
          >
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Priyanshu Das"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="e.g. priyanshu@example.com"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600"
              />
            </div>
            <div className="pt-2 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setDownloadModalOpen(false)}
                className="px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg text-white bg-slate-900 hover:bg-slate-800 font-bold shadow-md"
              >
                Download PDF Now
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
