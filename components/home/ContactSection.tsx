"use client";

import React, { useState } from "react";
import { CustomMap } from "@/components/shared/CustomMap";
import { useSiteSettings } from "@/components/providers/SiteSettingsContext";

export const ContactSection: React.FC = () => {
  const { settings } = useSiteSettings();
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

  const contactAddress = settings?.contact?.address || "Floor 3, School of Engineering, Adamas University Campus, Barasat, Kolkata 700126, India.";
  const contactEmail = settings?.contact?.email || "biomedical@adamasuniversity.ac.in";
  const contactPhone = settings?.contact?.phone || "+91 33 6811 4500 (Ext. 248)";
  const contactHours = settings?.contact?.hours || "Monday – Friday, 09:30 AM – 05:30 PM IST";

  return (
    <section id="contact" className="relative z-20 bg-white text-[#4A1525] py-12 lg:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1">
                GET IN TOUCH
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#4A1525] tracking-tight">
                Connect with the Department
              </h2>
              <p className="text-sm sm:text-base text-[#4A1525]/80 mt-2 font-sans">
                Inquiries regarding student admissions, hospital collaboration, or lab facilities access:
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
              <div>
                <strong className="text-[#4A1525]">Location:</strong> {contactAddress}
              </div>
              <div>
                <strong className="text-[#4A1525]">Email:</strong>{" "}
                <a href={`mailto:${contactEmail}`} className="hover:underline text-[#4A1525] font-medium">
                  {contactEmail}
                </a>
              </div>
              <div>
                <strong className="text-[#4A1525]">Telephone:</strong> {contactPhone}
              </div>
              <div>
                <strong className="text-[#4A1525]">Hours:</strong> {contactHours}
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-xl font-serif font-bold text-[#4A1525]">
                Quick Department Inquiry
              </h3>

              {submitted ? (
                <div className="bg-[#4A1525] text-white p-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider">
                  ✓ Inquiry Received! We will respond shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#4A1525] mb-1">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-xs text-[#4A1525] placeholder-slate-400 focus:outline-none focus:border-[#4A1525]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#4A1525] mb-1">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-xs text-[#4A1525] placeholder-slate-400 focus:outline-none focus:border-[#4A1525]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#4A1525] mb-1">
                      INQUIRY TYPE
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-xs text-[#4A1525] focus:outline-none focus:border-[#4A1525]"
                    >
                      <option value="Admissions & Eligibility">Admissions & Eligibility</option>
                      <option value="Hospital & Industry Collaboration">Hospital & Industry Collaboration</option>
                      <option value="Research Facilities Access">Research Facilities Access</option>
                      <option value="General Information">General Information</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="shine-sweep w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#4A1525] hover:bg-[#330E1A] shadow-md hover:shadow-lg transition-all"
                  >
                    SUBMIT INQUIRY →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Map View of College at Bottom Section */}
        <div id="campus-map" className="pt-4">
          <CustomMap />
        </div>

      </div>
    </section>
  );
};
