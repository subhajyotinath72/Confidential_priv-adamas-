"use client";

import React, { useState } from "react";
import { ACADEMIC_PROGRAMS, SPECIALIZATION_CHIPS } from "@/data/programs";
import { GraduationCap, Clock, Award, CheckCircle, ArrowRight, Download, BookOpen, Sparkles, Building2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import Link from "next/link";

export default function ProgramsPage() {
  const [selectedProgramId, setSelectedProgramId] = useState<string>("btech-bme");
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadingProgTitle, setDownloadingProgTitle] = useState("");

  const handleOpenDownload = (title: string) => {
    setDownloadingProgTitle(title);
    setDownloadModalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header Banner */}
      <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
            <GraduationCap className="w-4 h-4 text-adamas-gold" />
            <span>School of Engineering & Technology • Adamas University</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic Programs & Curriculum
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pioneering clinical-oriented biomedical education in Eastern India. Explore our AICTE-approved 4-Year B.Tech, 2-Year M.Tech, and Doctoral Research Fellowships.
          </p>
        </div>
      </section>

      {/* Program Selector Tabs */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-2 sm:space-x-4 overflow-x-auto">
          {ACADEMIC_PROGRAMS.map((prog) => (
            <a
              key={prog.id}
              href={`#${prog.id}`}
              onClick={() => setSelectedProgramId(prog.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                selectedProgramId === prog.id
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {prog.degree} ({prog.level})
            </a>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {ACADEMIC_PROGRAMS.map((program) => (
          <div
            key={program.id}
            id={program.id}
            className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md space-y-8 scroll-mt-36 text-slate-900"
          >
            {/* Header Strip */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold text-white bg-slate-900 px-3 py-1 rounded-md">
                    {program.degree}
                  </span>
                  <span className="text-xs font-bold text-teal-700">
                    {program.level} Degree
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                  {program.title}
                </h2>
                <p className="text-xs text-slate-500">
                  Duration: <span className="text-slate-900 font-semibold">{program.duration}</span> | Intake: <span className="text-slate-900 font-semibold">{program.intake}</span>
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleOpenDownload(program.title)}
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 border border-slate-300 hover:bg-slate-100 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2 text-teal-600" />
                  Download Syllabus PDF
                </button>
                <a
                  href="https://adamasuniversity.ac.in/adamas-university/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-md"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Description & Affiliation */}
            <div className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                {program.fullDesc}
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700">
                <span className="font-bold text-slate-900 uppercase">Affiliation & Approval:</span> {program.affiliation}
              </div>
            </div>

            {/* Program Key Highlights Grid */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-adamas-gold-dark uppercase tracking-wider">
                Program Highlights & Distinctive Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {program.highlights.map((h, i) => (
                  <div key={i} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Semester-by-Semester Curriculum Breakdown */}
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-teal-600" />
                Curriculum Structure & Core Courses
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.curriculumOverview.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                    <h4 className="text-xs font-bold text-teal-800 uppercase tracking-wider border-b border-slate-200 pb-2">
                      {item.yearOrSem}
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {item.courses.map((course, cIdx) => (
                        <li key={cIdx} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility & Career Prospects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
              {/* Eligibility */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-amber-700">
                  Eligibility Criteria & Admissions
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {program.eligibility}
                </p>
              </div>

              {/* Career Outcomes */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-sm font-bold text-teal-800 uppercase tracking-wider">
                  Career Options & Industry Destinations
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {program.careerOutcomes.map((career, cIdx) => (
                    <li key={cIdx} className="flex items-center space-x-2">
                      <Building2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}

      </div>

      {/* Download Syllabus Interactive Modal */}
      <Modal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        title={`Download Official Syllabus - ${downloadingProgTitle}`}
      >
        <div className="space-y-4 text-slate-900">
          <p className="text-xs text-slate-600 leading-relaxed">
            Please fill in your contact details below to receive the detailed course structure, semester credit breakdown, and clinical internship guidelines for <strong>{downloadingProgTitle}</strong>.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert(`Syllabus brochure link sent for ${downloadingProgTitle}!`); setDownloadModalOpen(false); }} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="e.g. rahul@example.com"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600 focus:bg-white"
              />
            </div>

            <div className="pt-2 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setDownloadModalOpen(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md"
              >
                Download PDF Now
              </button>
            </div>
          </form>
        </div>
      </Modal>

    </div>
  );
}
