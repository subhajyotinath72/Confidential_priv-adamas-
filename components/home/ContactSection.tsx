"use client";

import React, { useState } from "react";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    inquiryType: "Admissions & Eligibility",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-white py-12 lg:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-[11px] font-bold tracking-widest text-[#B58A28] uppercase mb-1">
                GET IN TOUCH
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#103E3B] tracking-tight">
                Connect with the Department
              </h2>
              <p className="text-sm sm:text-base text-[#103E3B]/80 mt-2 font-sans">
                Inquiries regarding student admissions, hospital collaboration, or lab facilities access:
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#103E3B] font-sans leading-relaxed">
              <div>
                <strong className="text-[#103E3B]">Location:</strong> Floor 3, School of Engineering, Adamas University Campus, Barasat, Kolkata 700126, India.
              </div>
              <div>
                <strong className="text-[#103E3B]">Email:</strong>{" "}
                <a href="mailto:biomedical.dept@adamasuniversity.ac.in" className="hover:underline text-[#103E3B] font-medium">
                  biomedical.dept@adamasuniversity.ac.in
                </a>
              </div>
              <div>
                <strong className="text-[#103E3B]">Telephone:</strong> +91 33 6811 4500 (Ext. 248)
              </div>
              <div>
                <strong className="text-[#103E3B]">Hours:</strong> Monday – Friday, 09:30 AM – 05:30 PM IST
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-xl font-serif font-bold text-[#1B365D]">
                Quick Department Inquiry
              </h3>

              {submitted ? (
                <div className="bg-[#1B365D] text-white p-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider">
                  ✓ Inquiry Received! We will respond shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1B365D] mb-1">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F8F5EE] border border-[#D5D0C5] rounded-md text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1B365D] mb-1">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F8F5EE] border border-[#D5D0C5] rounded-md text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1B365D] mb-1">
                      INQUIRY TYPE
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F8F5EE] border border-[#D5D0C5] rounded-md text-xs text-slate-800 focus:outline-none focus:border-[#1B365D]"
                    >
                      <option value="Admissions & Eligibility">Admissions & Eligibility</option>
                      <option value="Hospital & Industry Collaboration">Hospital & Industry Collaboration</option>
                      <option value="Research Facilities Access">Research Facilities Access</option>
                      <option value="General Information">General Information</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#1B365D] hover:bg-[#162E50] shadow-sm transition-all"
                  >
                    SUBMIT INQUIRY →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
