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
  Briefcase,
  CheckCircle2,
  Compass,
  Cpu,
  Dna,
  Stethoscope,
  Hospital
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export const ProgramDetailView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedSpecialization, setSelectedSpecialization] = useState<number>(0);

  const quickLinks = [
    { id: "about", label: "About", icon: BookOpen },
    { id: "vision-mission", label: "Vision & Mission", icon: Target },
    { id: "faculty-members", label: "Faculty Members", href: "/people", icon: Users },
    { id: "courses-offered", label: "Courses Offered", icon: GraduationCap },
    { id: "laboratories", label: "Laboratories", icon: FlaskConical },
    { id: "events-activities", label: "Events and Activities", href: "/news", icon: Calendar },
    { id: "awards-honours", label: "Awards & Honours", icon: Award },
    { id: "sriti-alumni", label: "SRITI - Alumni Reunion", icon: Sparkles },
  ];

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-transparent min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Department Quick Links Sidebar (4 cols) */}
          <div className="lg:col-span-4 sticky top-24 z-30 space-y-4">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 transition-all">
              
              {/* Header Strip with Gold Accent & Gradient */}
              <div
                className="relative text-white p-4 sm:p-5 overflow-hidden transition-colors"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary, #4A1525), var(--color-primary-dark, #330E1A))",
                }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div className="absolute left-0 top-0 w-full h-[3px] bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#D4AF37]" />

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 shadow-inner">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-amber-300/90 tracking-widest uppercase">
                        NAVIGATION
                      </div>
                      <h3 className="text-sm font-serif font-bold text-white tracking-wide">
                        Department Quick Links
                      </h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-white border border-white/15">
                    {quickLinks.length} Sections
                  </span>
                </div>
              </div>

              {/* Navigation Link List */}
              <div className="p-2.5 space-y-1 text-xs">
                {quickLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;
                  const content = (
                    <>
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                            isActive
                              ? "bg-amber-300/20 text-amber-300"
                              : "bg-slate-100 group-hover:bg-amber-50 text-slate-500 group-hover:text-[#4A1525]"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium text-xs tracking-tight">{link.label}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {link.href ? (
                          <ExternalLink
                            className={`w-3.5 h-3.5 transition-all ${
                              isActive
                                ? "text-amber-300"
                                : "text-slate-300 group-hover:text-[#4A1525] group-hover:translate-x-0.5"
                            }`}
                          />
                        ) : (
                          <ChevronRight
                            className={`w-3.5 h-3.5 transition-all ${
                              isActive
                                ? "text-amber-300 translate-x-0.5"
                                : "text-slate-300 group-hover:text-[#4A1525] group-hover:translate-x-0.5"
                            }`}
                          />
                        )}
                      </div>
                    </>
                  );

                  if (link.href) {
                    return (
                      <Link
                        key={link.id}
                        href={link.href}
                        style={
                          isActive
                            ? {
                                background:
                                  "linear-gradient(to right, var(--color-primary, #4A1525), var(--color-primary-dark, #330E1A))",
                              }
                            : undefined
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between text-left transition-all duration-200 group ${
                          isActive
                            ? "text-white shadow-md translate-x-1 font-semibold"
                            : "text-slate-700 hover:text-[#4A1525] hover:bg-slate-100/80 hover:translate-x-1"
                        }`}
                      >
                        {content}
                      </Link>
                    );
                  }
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleScrollTo(link.id)}
                      style={
                        isActive
                          ? {
                              background:
                                "linear-gradient(to right, var(--color-primary, #4A1525), var(--color-primary-dark, #330E1A))",
                            }
                          : undefined
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between text-left transition-all duration-200 group ${
                        isActive
                          ? "text-white shadow-md translate-x-1 font-semibold"
                          : "text-slate-700 hover:text-[#4A1525] hover:bg-slate-100/80 hover:translate-x-1"
                      }`}
                    >
                      {content}
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
                  onClick={() => handleScrollTo("courses-offered")}
                  className="px-5 py-2.5 rounded-full text-xs font-bold border border-slate-300 text-slate-800 hover:bg-slate-100 transition-colors shadow-2xs"
                >
                  View Full Curriculum
                </button>
                <Link
                  href="/contact#apply"
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#4A1525] text-white hover:bg-[#330E1A] transition-colors shadow-md"
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
                  <h3 className="text-sm font-bold text-[#4A1525] uppercase tracking-wider">
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

            {/* Courses Offered & Curriculum Section (Imported from Adamas University Official Website) */}
            <div
              id="courses-offered"
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 scroll-mt-24 text-slate-800"
            >
              {/* Compatibility Anchor */}
              <div id="curriculum-syllabus" className="scroll-mt-24 -mt-24"></div>

              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200 pb-6">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-teal-50 text-[#4A1525] text-[10px] font-bold uppercase tracking-wider border border-teal-200">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Official Academic Program</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                    Courses Offered — B.Tech (Biomedical Engineering)
                  </h2>
                  <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                    Department of Biomedical Engineering • School of Engineering & Technology, Adamas University
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
                  <a
                    href="https://adamasuniversity.ac.in/wp-content/uploads/2020/02/BTech-BME_Syllabus_2024-25.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-bold bg-[#4A1525] text-white hover:bg-[#330E1A] transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5 text-amber-300" />
                    <span>Download Syllabus</span>
                  </a>
                  <a
                    href="https://adamasuniversity.ac.in/wp-content/uploads/2020/02/BTech-BME_Course-Structure_2024-25_Final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-50 text-teal-900 border border-teal-200 hover:bg-teal-100 transition-colors shadow-2xs"
                  >
                    <FileText className="w-3.5 h-3.5 mr-1.5 text-teal-700" />
                    <span>Course Structure</span>
                  </a>
                </div>
              </div>

              {/* 4 Ratio-balanced Key Parameter Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Degree Awarded</span>
                  <p className="text-xs font-bold text-slate-900">B.Tech (Biomedical Engineering)</p>
                  <p className="text-[11px] text-teal-700 font-medium">AICTE Approved • Honors</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Program Duration</span>
                  <p className="text-xs font-bold text-slate-900">4 Years (8 Semesters)</p>
                  <p className="text-[11px] text-amber-700 font-medium">Exit option after 3 yrs (NEP)</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Eligibility</span>
                  <p className="text-xs font-bold text-slate-900">Min. 55% aggregate in 10+2</p>
                  <p className="text-[11px] text-slate-600 font-medium">PCB required (min. 45% each)</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">School & Faculty</span>
                  <p className="text-xs font-bold text-slate-900">School of Engg. & Technology</p>
                  <p className="text-[11px] text-teal-700 font-medium">Adamas University, Kolkata</p>
                </div>
              </div>

              {/* Introduction to the Course & Educational Objectives */}
              <div className="bg-gradient-to-br from-teal-50/70 via-slate-50 to-amber-50/40 border border-teal-100 rounded-2xl p-5 space-y-3">
                <h3 className="text-xs font-bold text-[#4A1525] uppercase tracking-wider flex items-center">
                  <Target className="w-4 h-4 mr-2 text-teal-700" />
                  Course Introduction & Educational Objectives
                </h3>
                <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                  <p>
                    The objective of the Department of Biomedical Engineering is to educate students who can bridge engineering with life sciences in the service of human health and represent the biomedical profession with distinction. Our department serves as a conduit for better understanding of biology through engineering concepts and for utilizing the complex organization of life systems in developing new technologies.
                  </p>
                  <p>
                    The educational objectives of the Biomedical Engineering undergraduate program is that the graduates will work in research careers by applying their background and knowledge towards the advancement of technology and the betterment of society by contributing to educational and social institutions.
                  </p>
                </div>
              </div>

              {/* Program Learning Outcomes */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-teal-600" />
                    Program Learning Outcomes
                  </h3>
                </div>
                <p className="text-xs text-slate-600">
                  Our fundamental aim is to instil a passion for learning, scientific discovery, innovation, entrepreneurial spirit and societal impact in our graduates:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-teal-100/80 text-[#4A1525] flex items-center justify-center font-bold text-xs">
                      01
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Healthcare Problem Solving</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Continue to utilize and enhance engineering and biological training to solve problems related to health and healthcare that are globally relevant and based on ethically sound principles.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-100/80 text-amber-900 flex items-center justify-center font-bold text-xs">
                      02
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Professional Leadership</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Demonstrate leadership in respective careers in biomedical engineering or interrelated areas of medical device industry, government, academia, and clinical hospital practice.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-teal-100/80 text-[#4A1525] flex items-center justify-center font-bold text-xs">
                      03
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Lifelong Learning</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Engage in life-long learning by continuing education in graduate or professional school or through opportunities for advanced MedTech certifications and research training.
                    </p>
                  </div>
                </div>
              </div>

              {/* Subjects Covered (Core Curriculum) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-teal-600" />
                    Subjects Covered (Core Curriculum)
                  </h3>
                  <span className="text-[11px] text-teal-800 font-semibold bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    15 Core Disciplines
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Engineering Mathematics",
                    "Control Theory",
                    "Analog and Digital Electronics",
                    "Basic Clinical Science",
                    "Anatomy & Physiology",
                    "Digital Signal Processing",
                    "Signals and Network Analysis",
                    "Microcontroller Based Systems",
                    "MATLAB & Simulink",
                    "Hospital Management",
                    "Biomechanics",
                    "Digital Image Processing",
                    "Biomedical Instrumentation",
                    "Engg. Economics and Financial Management",
                    "Digital System Design",
                  ].map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-slate-50 border border-slate-200/80 rounded-xl hover:border-teal-300 hover:bg-teal-50/30 transition-colors"
                    >
                      <span className="w-5 h-5 rounded-md bg-teal-100/80 text-[#4A1525] text-[10px] font-bold flex items-center justify-center mr-2.5 flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-800 leading-snug">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open Electives (Theory) */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center">
                  <Compass className="w-4 h-4 mr-2 text-amber-600" />
                  Open Electives (Theory)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures and Algorithms / FEA-CFD",
                    "Machine Learning",
                    "Mobile Communication",
                    "Fundamentals of Electrical Machines",
                    "Biomedical Design",
                    "Cloud Computing",
                    "Optical Communication",
                    "Introduction to Control Systems",
                    "Conservation of Water Resources",
                  ].map((elective, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 border border-slate-200 text-slate-800 hover:border-amber-300 hover:bg-amber-50/40 transition-colors"
                    >
                      {elective}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specialization Tracks */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-teal-600" />
                    Specialization Tracks
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Select a specialization track to build deep expertise in high-demand biomedical disciplines:
                  </p>
                </div>

                {/* Specialization Tab Buttons */}
                <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                  {[
                    {
                      id: 0,
                      title: "Biomedical Data Science",
                      icon: Cpu,
                      count: 8,
                    },
                    {
                      id: 1,
                      title: "Genomics & Systems Biology",
                      icon: Dna,
                      count: 11,
                    },
                    {
                      id: 2,
                      title: "Computational Medicine",
                      icon: Stethoscope,
                      count: 7,
                    },
                  ].map((track) => {
                    const isSelected = selectedSpecialization === track.id;
                    const Icon = track.icon;
                    return (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => setSelectedSpecialization(track.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                          isSelected
                            ? "bg-[#4A1525] text-white shadow-sm"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-amber-300" : "text-slate-500"}`} />
                        <span>{track.title}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {track.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Track Courses List */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      {selectedSpecialization === 0 && "Biomedical Data Science Courses"}
                      {selectedSpecialization === 1 && "Genomics and Systems Biology Courses"}
                      {selectedSpecialization === 2 && "Computational Medicine Courses"}
                    </h4>
                    <span className="text-[11px] text-teal-700 font-semibold">Specialized Electives</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedSpecialization === 0 &&
                      [
                        "Machine learning and Its Application to Biomedical data",
                        "Medical Imaging System",
                        "Information Theory",
                        "Computational Protein Structure Prediction and Design",
                        "Data Mining",
                        "Neuro Data design",
                        "Foundation of Computational Biology and Bioinformatics",
                        "Bio-Telemedicine",
                      ].map((course, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start p-2.5 rounded-lg bg-white border border-slate-200/80 text-slate-700 hover:border-teal-300 transition-colors"
                        >
                          <span className="text-teal-600 font-bold mr-2 mt-0.5">•</span>
                          <span className="font-medium text-xs text-slate-800">{course}</span>
                        </div>
                      ))}

                    {selectedSpecialization === 1 &&
                      [
                        "Mathematical Biology",
                        "Models of the Neuron",
                        "Physical Epigenetics",
                        "Introduction Genomics Research",
                        "Computational Genomics: sequences",
                        "Computational Genomics: Data Analysis",
                        "Introduction to non-Linear system",
                        "Locomotion in Mechanical and Bio- system",
                        "Computational Stem cell Biology",
                        "Probabilistic model of the Visual Cortex",
                        "Tissue Engineering",
                      ].map((course, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start p-2.5 rounded-lg bg-white border border-slate-200/80 text-slate-700 hover:border-teal-300 transition-colors"
                        >
                          <span className="text-teal-600 font-bold mr-2 mt-0.5">•</span>
                          <span className="font-medium text-xs text-slate-800">{course}</span>
                        </div>
                      ))}

                    {selectedSpecialization === 2 &&
                      [
                        "Magnetic Resonant in Medicine",
                        "PharmocoKinetics",
                        "Pharmoco Dynamics",
                        "Computational Molecular Medicine",
                        "Introduction to Computational Medicine",
                        "Precision core Medicine-I",
                        "Precision core Medicine-II",
                      ].map((course, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start p-2.5 rounded-lg bg-white border border-slate-200/80 text-slate-700 hover:border-teal-300 transition-colors"
                        >
                          <span className="text-teal-600 font-bold mr-2 mt-0.5">•</span>
                          <span className="font-medium text-xs text-slate-800">{course}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Clinical Internships & Project Work */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center">
                    <Hospital className="w-4 h-4 mr-2 text-teal-600" />
                    Clinical Internships & Hands-on Project Work
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Students gain real-world clinical and engineering exposure through partnerships with renowned healthcare systems and institutes:
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  {[
                    {
                      name: "Ruby General Hospital",
                      desc: "Exposure to medical practices, patient care, and integration of technology in healthcare delivery.",
                    },
                    {
                      name: "Thakurpukur Cancer Hospital",
                      desc: "Insights into oncology care, patient management, and application of diagnostic tools in cancer treatment.",
                    },
                    {
                      name: "BPL Medical Technologies",
                      desc: "Medical equipment engineering, biomedical device development, testing, and quality assurance.",
                    },
                    {
                      name: "CDAC Kolkata",
                      desc: "Advanced computing, algorithm development, and real-world problem-solving in healthcare technology.",
                    },
                    {
                      name: "IIEST, Shibpur",
                      desc: "Collaborative research projects, leveraging academic engineering knowledge in practical applications.",
                    },
                    {
                      name: "Steroviz Pixels Pvt. Ltd.",
                      desc: "Cutting-edge visual technologies, diagnostic imaging solutions, and clinical algorithms.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5 hover:border-teal-400 hover:bg-teal-50/20 transition-all group"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-teal-600 group-hover:scale-125 transition-transform" />
                        <h4 className="font-bold text-slate-900 text-xs">{item.name}</h4>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed pl-4">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Placement & Career Opportunities */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-teal-600" />
                    Placement & Career Opportunities / Recruiters
                  </h3>
                  <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 w-fit">
                    62% Growth (US BLS)
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  According to the United States Bureau of Labor Statistics, employment of Biomedical engineers is projected to grow by 62%, driven by an aging population and advancements in computer-assisted surgery, cellular and tissue engineering, rehabilitation, and orthopedic engineering.
                </p>

                {/* 4 Industry Verticals */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-0.5">
                    <span className="text-[10px] font-bold text-teal-700 uppercase block">Healthcare</span>
                    <p className="text-[11px] text-slate-600">Secondary & Tertiary Care Hospitals</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-0.5">
                    <span className="text-[10px] font-bold text-teal-700 uppercase block">Medical Technology</span>
                    <p className="text-[11px] text-slate-600">Device Innovation & Diagnostics</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-0.5">
                    <span className="text-[10px] font-bold text-teal-700 uppercase block">Pharma & Biotech</span>
                    <p className="text-[11px] text-slate-600">R&D and Therapeutics</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-0.5">
                    <span className="text-[10px] font-bold text-teal-700 uppercase block">Start-ups</span>
                    <p className="text-[11px] text-slate-600">HealthTech & Medical AI</p>
                  </div>
                </div>

                {/* Recruiters Badges */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                    Leading Recruiters in India & Globally
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "GE Healthcare",
                      "Philips Healthcare",
                      "Siemens Healthineers",
                      "Wipro GE Medical Systems",
                      "BPL Medical Technologies",
                      "Medtronic",
                      "Johnson & Johnson",
                      "Dräger Medical India",
                      "Skanray Technologies",
                      "Allengers Medical Systems",
                      "Toshiba / Canon Medical Systems",
                      "L&T Medical",
                      "Thermo Fisher Scientific",
                      "Boston Scientific India",
                      "Transasia Bio-Medicals Ltd.",
                    ].map((rec, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white border border-slate-200 text-slate-800 shadow-2xs"
                      >
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 8-Semester Curriculum Roadmap */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                  <div>
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest block">
                      Curriculum Structure
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      8-Semester Progression Roadmap
                    </h3>
                  </div>
                  <button
                    onClick={() => setDownloadModalOpen(true)}
                    className="text-xs font-bold text-teal-800 hover:underline flex items-center"
                  >
                    <span>Request Full PDF</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="font-bold text-[#4A1525] uppercase border-b border-slate-200 pb-1 flex justify-between">
                      <span>Year 1 (Semesters 1 & 2)</span>
                      <span className="text-[10px] font-normal text-slate-500">Foundation</span>
                    </div>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      <li>• Engineering Mathematics I & II</li>
                      <li>• Analog & Digital Electronics</li>
                      <li>• Human Anatomy & Physiology</li>
                      <li>• Python Programming for Engineers</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="font-bold text-[#4A1525] uppercase border-b border-slate-200 pb-1 flex justify-between">
                      <span>Year 2 (Semesters 3 & 4)</span>
                      <span className="text-[10px] font-normal text-slate-500">Core Signals</span>
                    </div>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      <li>• Signals & Network Analysis</li>
                      <li>• Digital Signal Processing</li>
                      <li>• MATLAB & Simulink Modeling</li>
                      <li>• Microcontroller Based Systems</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="font-bold text-[#4A1525] uppercase border-b border-slate-200 pb-1 flex justify-between">
                      <span>Year 3 (Semesters 5 & 6)</span>
                      <span className="text-[10px] font-normal text-slate-500">Instrumentation</span>
                    </div>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      <li>• Biomedical Instrumentation</li>
                      <li>• Digital Image Processing</li>
                      <li>• Biomechanics & Control Theory</li>
                      <li>• Digital System Design & Open Electives</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="font-bold text-[#4A1525] uppercase border-b border-slate-200 pb-1 flex justify-between">
                      <span>Year 4 (Semesters 7 & 8)</span>
                      <span className="text-[10px] font-normal text-slate-500">Clinical & Capstone</span>
                    </div>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      <li>• Clinical Hospital Rotation & Internship</li>
                      <li>• Hospital Management & Engg. Economics</li>
                      <li>• Major Capstone Industry Project</li>
                      <li>• Specialization Stream Electives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            {/* 6. Laboratories Section */}
            <div
              id="laboratories"
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 scroll-mt-24 text-slate-800"
            >
              <div>
                <span className="text-[10px] font-bold text-teal-700 uppercase tracking-widest block">
                  Advanced Facility Infrastructure
                </span>
                <h2 className="text-2xl font-bold text-slate-900 font-serif">
                  Department Laboratories & Cleanrooms
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                {/* Lab 1 */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 hover:border-teal-500 transition-colors group">
                  <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-200 border border-slate-200 shadow-xs">
                    <img
                      src="/Biomedical Engineering Laboratory.jpeg"
                      alt="Biomedical Engineering Laboratory"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2.5 py-1 bg-[#4A1525] text-[9px] font-bold text-white uppercase tracking-wider rounded border border-white/20">
                        Lab 01
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 font-serif">1. Biomedical Engineering Laboratory</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">ECG, EEG, EMG telemetry kits, DSO oscilloscopes, and FPGA bio-amplifiers.</p>
                  </div>
                </div>

                {/* Lab 2 */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 hover:border-teal-500 transition-colors group">
                  <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-200 border border-slate-200 shadow-xs">
                    <img
                      src="/Biomedical Laboratory Environment.jpeg"
                      alt="Chemistry & Biochemistry Laboratory"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2.5 py-1 bg-[#4A1525] text-[9px] font-bold text-white uppercase tracking-wider rounded border border-white/20">
                        Lab 02
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 font-serif">2. Chemistry & Biochemistry Laboratory</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">Extrusion bioprinters, hydrogel formulation, and CO2 incubator facilities.</p>
                  </div>
                </div>

                {/* Lab 3 */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 hover:border-teal-500 transition-colors group">
                  <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-200 border border-slate-200 shadow-xs">
                    <img
                      src="/Electrical & Measurement Laboratory.jpeg"
                      alt="Electrical & Measurement Laboratory"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2.5 py-1 bg-[#4A1525] text-[9px] font-bold text-white uppercase tracking-wider rounded border border-white/20">
                        Lab 03
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 font-serif">3. Electrical & Measurement Laboratory</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">DICOM processing workstations, ultrasound phantoms, and MATLAB imaging suites.</p>
                  </div>
                </div>

                {/* Lab 4 */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 hover:border-teal-500 transition-colors group">
                  <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-200 border border-slate-200 shadow-xs">
                    <img
                      src="/Electronics & Instrumentation Laboratory.jpeg"
                      alt="Electronics & Instrumentation Laboratory"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2.5 py-1 bg-[#4A1525] text-[9px] font-bold text-white uppercase tracking-wider rounded border border-white/20">
                        Lab 04
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 font-serif">4. Electronics & Instrumentation Laboratory</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">Multi-para monitors, defibrillator testers, and patient simulation mannequins.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. SRITI - Alumni Reunion Section */}
            <div
              id="sriti-alumni"
              className="bg-[#4A1525] text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-4 scroll-mt-24"
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
        title="Download Official BME Curriculum & Syllabus"
      >
        <div className="space-y-4 text-slate-900 text-xs">
          {/* Direct official links */}
          <div className="p-3.5 bg-teal-50/70 border border-teal-200 rounded-xl space-y-2">
            <p className="font-bold text-[#4A1525] text-xs flex items-center">
              <Download className="w-3.5 h-3.5 mr-1.5 text-teal-700" />
              Direct Official University Downloads:
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://adamasuniversity.ac.in/wp-content/uploads/2020/02/BTech-BME_Syllabus_2024-25.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#4A1525] text-white text-[11px] font-bold hover:bg-[#330E1A] transition-colors"
              >
                <Download className="w-3 h-3 mr-1.5 text-amber-300" />
                <span>Official Syllabus PDF</span>
              </a>
              <a
                href="https://adamasuniversity.ac.in/wp-content/uploads/2020/02/BTech-BME_Course-Structure_2024-25_Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-teal-300 text-teal-900 text-[11px] font-bold hover:bg-teal-50 transition-colors"
              >
                <FileText className="w-3 h-3 mr-1.5 text-teal-700" />
                <span>Course Structure PDF</span>
              </a>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Or receive the comprehensive 4-year B.Tech Biomedical Engineering curriculum brochure directly to your email inbox:
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
