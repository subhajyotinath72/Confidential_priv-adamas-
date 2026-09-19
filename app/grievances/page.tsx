"use client";

import React, { useState } from "react";
import { ShieldAlert, CheckCircle2, FileText, Send, UserCheck, PhoneCall, Lock } from "lucide-react";

export default function GrievancesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    rollNo: "",
    email: "",
    category: "Academic Grievance",
    description: "",
    anonymous: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>Adamas University • Student & Staff Safety</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Grievance Redressal Cell
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ensuring a safe, transparent, and fair academic environment. Submit confidential grievances to the Department Grievance Redressal Committee.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-slate-900 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-xs">
              01
            </div>
            <h3 className="text-sm font-bold text-slate-900">Academic & Exam Cell</h3>
            <p className="text-xs text-slate-600">
              For grading issues, attendance records, or lab access complaints.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-slate-900 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 font-bold text-xs">
              02
            </div>
            <h3 className="text-sm font-bold text-slate-900">Anti-Ragging Committee</h3>
            <p className="text-xs text-slate-600">
              Zero tolerance policy. Immediate confidential review within 24 hours.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-slate-900 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 font-bold text-xs">
              03
            </div>
            <h3 className="text-sm font-bold text-slate-900">Internal Complaints Cell</h3>
            <p className="text-xs text-slate-600">
              Handling gender sensitivity, workplace safety, and equal opportunity.
            </p>
          </div>
        </div>

        {/* Grievance Form */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md text-slate-900 space-y-6">
          <div className="flex items-center space-x-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
            <Lock className="w-4 h-4 text-amber-600" />
            <span>Confidential Grievance Portal</span>
          </div>

          <h2 className="text-xl font-bold text-slate-900">Submit a Grievance Report</h2>

          {submitted ? (
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-300">
              <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Grievance Submitted</h3>
              <p className="text-xs text-slate-700 leading-relaxed max-w-md mx-auto">
                Your report has been securely registered with the Department Grievance Committee. Reference ID: <strong>GRV-2026-8942</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800"
              >
                Submit Another Report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required={!form.anonymous}
                    disabled={form.anonymous}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={form.anonymous ? "Anonymous Submission" : "e.g. Subhashis Das"}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Student ID / Roll No</label>
                  <input
                    type="text"
                    disabled={form.anonymous}
                    value={form.rollNo}
                    onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
                    placeholder={form.anonymous ? "Hidden" : "e.g. AU/2023/BME/042"}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required={!form.anonymous}
                    disabled={form.anonymous}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={form.anonymous ? "Hidden" : "e.g. student@adamasuniversity.ac.in"}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Grievance Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600 focus:bg-white"
                  >
                    <option>Academic & Examination</option>
                    <option>Laboratory Facilities</option>
                    <option>Anti-Ragging Report</option>
                    <option>Gender Harassment (ICC)</option>
                    <option>Other / General</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Detailed Description of Issue *</label>
                <textarea
                  rows={4}
                  required
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Provide date, location, and relevant context..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-teal-600 focus:bg-white"
                />
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="anon"
                  checked={form.anonymous}
                  onChange={(e) => setForm({ ...form, anonymous: e.target.checked })}
                  className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="anon" className="text-xs text-slate-700 font-semibold cursor-pointer">
                  Submit anonymously (Name and email will be hidden)
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Grievance to Committee
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
