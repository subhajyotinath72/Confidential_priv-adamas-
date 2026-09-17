"use client";

import React, { useState } from "react";
import { CustomMap } from "@/components/shared/CustomMap";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Building2, User, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Admissions 2026",
    program: "B.Tech Biomedical Engineering",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
            <MapPin className="w-4 h-4 text-adamas-gold" />
            <span>Adamas University • Kolkata, West Bengal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact & Admissions Helpline
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about B.Tech, M.Tech, or Ph.D. admissions, research collaborations, or hospital clinical partnerships? Get in touch with our department office.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Contact Info Cards + Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Department Contact Details & Office Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm text-slate-900">
              <h2 className="text-xl font-bold text-slate-900 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-teal-600" />
                Department Office Details
              </h2>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">Department Campus Address</div>
                    <span>
                      School of Engineering & Technology (SET Building),<br />
                      Adamas University Campus, Barasat–Barrackpore Road, Barbaria, P.O Jagannathpur, District 24 Parganas (North), Kolkata – 700126, West Bengal, India
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">Admissions Helpline</div>
                    <span>Toll-Free: 1800-419-7423</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">Department Email</div>
                    <span>biomedical@adamasuniversity.ac.in</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <Clock className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">Working Hours</div>
                    <span>Monday – Friday: 09:30 AM to 05:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Office Directory Box */}
            <div id="directory" className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 text-slate-900">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-amber-700">
                Department Office Key Contacts
              </h3>
              <div className="space-y-3 text-xs">
                <div className="border-b border-slate-100 pb-2">
                  <div className="font-bold text-slate-900">Dr. Arindam Banerjee</div>
                  <div className="text-[11px] text-teal-700 font-semibold">Head of Department</div>
                  <div className="text-[10px] text-slate-500">arindam.banerjee@adamasuniversity.ac.in</div>
                </div>
                <div className="border-b border-slate-100 pb-2">
                  <div className="font-bold text-slate-900">Prof. Sourav Chakraborty</div>
                  <div className="text-[11px] text-teal-700 font-semibold">Industry & Clinical Placement Lead</div>
                  <div className="text-[10px] text-slate-500">sourav.chakraborty@adamasuniversity.ac.in</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Mr. Sujoy Sarkar</div>
                  <div className="text-[11px] text-teal-700 font-semibold">Department Academic Executive</div>
                  <div className="text-[10px] text-slate-500">bme.office@adamasuniversity.ac.in</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Inquiry Form UI (7 cols) */}
          <div id="apply" className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-md space-y-6 text-slate-900">
            
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-adamas-gold-dark uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Online Inquiry Form</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Send a Message / Admission Query
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the details below. Our admissions counselor will respond within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Thank You for Reaching Out!</h3>
                <p className="text-xs text-slate-700 leading-relaxed max-w-md mx-auto">
                  Your inquiry has been successfully received by the Department of Biomedical Engineering, Adamas University. An admissions advisor will contact you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Das"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ananya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600 focus:bg-white focus:outline-none"
                    >
                      <option>Admissions 2026</option>
                      <option>Research Collaboration</option>
                      <option>Hospital Clinical Partnering</option>
                      <option>General Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Program of Interest
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600 focus:bg-white focus:outline-none"
                  >
                    <option>B.Tech in Biomedical Engineering (4 Years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Specific Query
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your query or question regarding curriculum, WBJEE/JEE entry, or campus visits..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Inquiry Form
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Interactive Campus Map Section */}
        <div className="space-y-4">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-adamas-gold-dark uppercase tracking-widest">
              Campus Location
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Find Us in Kolkata
            </h2>
          </div>
          <CustomMap />
        </div>

      </div>

    </div>
  );
}
