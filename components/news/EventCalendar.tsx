"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  User,
  Tag,
  Sparkles,
  Award,
  Bell,
  CheckCircle2,
  ExternalLink,
  Filter
} from "lucide-react";
import { UPCOMING_EVENTS, RECENT_NEWS } from "@/data/newsEvents";

interface EventItem {
  id: string;
  day: number;
  month: number; // 0-indexed (0 = Jan, 8 = Sep)
  year: number;
  time?: string;
  title: string;
  location?: string;
  speaker?: string;
  category: string;
  desc?: string;
  href?: string;
}

const INITIAL_EVENTS: EventItem[] = [
  {
    id: "evt-1",
    day: 5,
    month: 7, // August
    year: 2026,
    time: "10:00 AM - 12:30 PM",
    title: "Cardiovascular AI Telemetry Grant Secured",
    location: "SET Bio-Computing Lab 401",
    speaker: "Dr. Sunita Roy & Department Faculty",
    category: "Research",
    desc: "National funding awarded for wearable photoplethysmography sensor systems engineered by the department faculty."
  },
  {
    id: "evt-2",
    day: 28,
    month: 7, // August
    year: 2026,
    time: "02:00 PM - 04:00 PM",
    title: "DST-SERB Grant for 3D Bioprinting Research Announcement",
    location: "Auditorium Hall A",
    speaker: "Dr. Sunita Roy",
    category: "Research",
    desc: "Developing vascularized 3D tissue constructs for cardiac tissue engineering."
  },
  {
    id: "evt-3",
    day: 12,
    month: 8, // September
    year: 2026,
    time: "09:30 AM - 04:00 PM",
    title: "Annual MedTech Bio-Design Challenge",
    location: "Adamas Innovation Hub",
    speaker: "Student Innovators & Industry Mentors",
    category: "Symposium",
    desc: "Undergraduate teams present low-cost neonatal incubator sensors and smart prosthetic limb prototypes."
  },
  {
    id: "evt-4",
    day: 28,
    month: 8, // September
    year: 2026,
    time: "10:30 AM - 01:00 PM",
    title: "International Webinar on AI-Driven Cancer Radiology Screening",
    location: "Auditorium Hall B & Online Zoom",
    speaker: "Dr. Marcus Vance (Johns Hopkins University)",
    category: "Webinar",
    desc: "Deep learning segmentation of early-stage pulmonary lesions and mammography screening."
  },
  {
    id: "evt-5",
    day: 14,
    month: 9, // October
    year: 2026,
    time: "09:00 AM - 04:30 PM",
    title: "Hands-On Workshop on Microfluidic Biosensor Fabrication",
    location: "SET Bio-Electronics Lab 302",
    speaker: "Dr. Ananya Mukherjee & Technical Specialists",
    category: "Workshop",
    desc: "Lithography and PDMS channel molding for lab-on-a-chip diagnostic chips."
  },
  {
    id: "evt-6",
    day: 18,
    month: 9, // October
    year: 2026,
    time: "11:00 AM - 01:30 PM",
    title: "Robotic Surgery & Haptics Colloquium",
    location: "Seminar Room 102",
    speaker: "Surgical Specialists & MedTech Engineers",
    category: "Guest Lecture",
    desc: "Distinguished guest lecture on low-latency micro-laparoscopy control and force-feedback tactile sensors."
  },
  {
    id: "evt-7",
    day: 5,
    month: 10, // November
    year: 2026,
    time: "11:00 AM - 03:00 PM",
    title: "Biomedical Industry-Academia Conclave & MedTech Expo 2026",
    location: "Adamas Convention Center",
    speaker: "Leaders from Siemens Healthineers, Philips & Medtronic",
    category: "Conference",
    desc: "Networking, product demonstrations, and strategic placement sessions with healthcare industry pioneers."
  },
  {
    id: "evt-8",
    day: 20,
    month: 10, // November
    year: 2026,
    time: "02:00 PM - 04:00 PM",
    title: "Guest Lecture: ISO 13485 Medical Device Regulatory Pathways",
    location: "Seminar Room 104",
    speaker: "Prof. Sourav Chakraborty",
    category: "Seminar",
    desc: "Navigating CE-mark, FDA 510(k), and CDSCO clearance for diagnostic & therapeutic hardware."
  }
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string; badge: string }> = {
  Research: { bg: "bg-teal-50", text: "text-teal-700", dot: "bg-teal-500", badge: "border-teal-200 bg-teal-100/60" },
  Symposium: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", badge: "border-amber-200 bg-amber-100/60" },
  Webinar: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500", badge: "border-blue-200 bg-blue-100/60" },
  Workshop: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500", badge: "border-purple-200 bg-purple-100/60" },
  "Guest Lecture": { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500", badge: "border-rose-200 bg-rose-100/60" },
  Conference: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500", badge: "border-emerald-200 bg-emerald-100/60" },
  Seminar: { bg: "bg-indigo-50", text: "text-indigo-700", dot: "bg-indigo-500", badge: "border-indigo-200 bg-indigo-100/60" }
};

export const EventCalendar: React.FC = () => {
  // Default to September 2026 (matching academic term)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 8, 1));
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDate, setSelectedDate] = useState<number | null>(12); // Default 12 Sep 2026
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);

  // Fetch live events from API if available
  useEffect(() => {
    fetch("/api/admin/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.news && Array.isArray(data.news) && data.news.length > 0) {
          const apiItems: EventItem[] = data.news.map((n: any, idx: number) => {
            const dateParts = n.date ? n.date.split(" ") : ["SEP", "15", "2026"];
            const monthIdx = MONTH_NAMES.findIndex(
              (m) => m.toLowerCase().startsWith((dateParts[0] || "sep").toLowerCase().slice(0, 3))
            );
            return {
              id: `api-news-${idx}`,
              day: parseInt(dateParts[1]?.replace(",", "") || "15", 10),
              month: monthIdx !== -1 ? monthIdx : 8,
              year: parseInt(dateParts[2] || "2026", 10),
              time: "10:00 AM - 12:00 PM",
              title: n.title,
              category: n.category || "Research",
              desc: n.summary,
              location: "Adamas Department of BME",
              speaker: n.author || "Department Faculty"
            };
          });
          // Merge unique events
          setEvents((prev) => {
            const combined = [...prev];
            apiItems.forEach((item) => {
              if (!combined.some((c) => c.title === item.title)) {
                combined.push(item);
              }
            });
            return combined;
          });
        }
      })
      .catch((err) => console.error("Could not fetch calendar events:", err));
  }, []);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    setSelectedDate(null);
  };

  // Calendar math
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  // Categories list
  const categories = ["All", "Research", "Symposium", "Webinar", "Workshop", "Guest Lecture", "Conference", "Seminar"];

  // Filter events for the month
  const filteredEvents = events.filter((e) => {
    const categoryMatch = selectedCategory === "All" || e.category.toLowerCase() === selectedCategory.toLowerCase();
    return e.month === currentMonth && e.year === currentYear && categoryMatch;
  });

  // Selected date events
  const selectedDayEvents = selectedDate
    ? filteredEvents.filter((e) => e.day === selectedDate)
    : filteredEvents;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
      
      {/* Top Header & Category Filter Pills */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-[#B58A28] uppercase tracking-widest mb-1">
            <CalendarIcon className="w-4 h-4" />
            <span>ACADEMIC & RESEARCH CALENDAR</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#103E3B]">
            Interactive Event Schedule
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Select dates to inspect colloquiums, workshops, guest lectures, and symposiums.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 items-center bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-[#103E3B] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#103E3B] hover:bg-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Calendar Section: Grid + Event Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Calendar Grid (7 cols) */}
        <div className="lg:col-span-7 bg-slate-50/70 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-5">
          
          {/* Calendar Month Navigation */}
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-serif font-bold text-[#103E3B] flex items-center space-x-2">
              <span>{MONTH_NAMES[currentMonth]}</span>
              <span className="text-[#B58A28]">{currentYear}</span>
            </h4>
            <div className="flex items-center space-x-1.5">
              <button
                onClick={handlePrevMonth}
                className="p-2 rounded-xl bg-white border border-slate-200 text-[#103E3B] hover:bg-slate-100 hover:border-[#103E3B] transition-colors"
                title="Previous Month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextMonth}
                className="p-2 rounded-xl bg-white border border-slate-200 text-[#103E3B] hover:bg-slate-100 hover:border-[#103E3B] transition-colors"
                title="Next Month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 text-center">
            {WEEKDAYS.map((day) => (
              <div key={day} className="text-[11px] font-bold text-[#103E3B]/70 uppercase tracking-wider py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1.5">
            {/* Empty Offset Cells */}
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} className="h-12 sm:h-14 rounded-xl bg-transparent" />
            ))}

            {/* Month Day Cells */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const dayEvents = filteredEvents.filter((e) => e.day === dayNum);
              const hasEvents = dayEvents.length > 0;
              const isSelected = selectedDate === dayNum;

              // Color styles for category
              const firstEventCat = dayEvents[0]?.category;
              const catColors = firstEventCat ? CATEGORY_COLORS[firstEventCat] || CATEGORY_COLORS.Research : null;

              return (
                <button
                  key={dayNum}
                  onClick={() => setSelectedDate(isSelected ? null : dayNum)}
                  className={`h-12 sm:h-14 rounded-xl p-1.5 flex flex-col justify-between items-center transition-all relative group ${
                    isSelected
                      ? "bg-[#103E3B] text-white ring-2 ring-[#B58A28] shadow-md scale-105 z-10"
                      : hasEvents
                      ? `${catColors?.bg || "bg-teal-50"} border border-slate-200 hover:border-[#103E3B]`
                      : "bg-white border border-slate-100 hover:bg-slate-100/70 text-slate-700"
                  }`}
                >
                  <span
                    className={`text-xs font-bold font-sans ${
                      isSelected
                        ? "text-white"
                        : hasEvents
                        ? catColors?.text || "text-[#103E3B]"
                        : "text-slate-700"
                    }`}
                  >
                    {dayNum}
                  </span>

                  {/* Event Indicator Dot / Badge */}
                  {hasEvents && (
                    <div className="flex items-center space-x-1 mb-0.5">
                      {dayEvents.map((evt, idx) => {
                        const evtColors = CATEGORY_COLORS[evt.category] || CATEGORY_COLORS.Research;
                        return (
                          <span
                            key={idx}
                            className={`w-2 h-2 rounded-full ${
                              isSelected ? "bg-[#B58A28]" : evtColors.dot
                            } animate-pulse`}
                          />
                        );
                      })}
                    </div>
                  )}

                  {/* Hover Tooltip for Day with Events */}
                  {hasEvents && !isSelected && (
                    <div className="hidden group-hover:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-slate-900 text-white text-[10px] p-2 rounded-lg shadow-xl z-20 pointer-events-none">
                      <div className="font-bold text-amber-300">{dayEvents[0].title}</div>
                      <div className="text-slate-300 mt-0.5">{dayEvents[0].category}</div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Color Legend */}
          <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-200/80 text-[11px] text-slate-600">
            <span className="font-bold text-[#103E3B]">Categories:</span>
            {Object.entries(CATEGORY_COLORS).map(([cat, col]) => (
              <div key={cat} className="flex items-center space-x-1">
                <span className={`w-2 h-2 rounded-full ${col.dot}`} />
                <span>{cat}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Selected Date Event Details Panel (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-6 flex flex-col justify-between min-h-[420px]">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>
                  {selectedDate
                    ? `${MONTH_NAMES[currentMonth]} ${selectedDate}, ${currentYear}`
                    : `${MONTH_NAMES[currentMonth]} ${currentYear} Events`}
                </span>
              </div>
              {selectedDate && (
                <button
                  onClick={() => setSelectedDate(null)}
                  className="text-[11px] text-slate-400 hover:text-white underline"
                >
                  Show All Month
                </button>
              )}
            </div>

            {selectedDayEvents.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <CalendarIcon className="w-10 h-10 text-slate-600 mx-auto" />
                <p className="text-sm text-slate-400 font-sans">
                  No scheduled colloquiums or events for this selected filter.
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[340px] overflow-y-auto pr-1">
                {selectedDayEvents.map((evt) => {
                  const colors = CATEGORY_COLORS[evt.category] || CATEGORY_COLORS.Research;
                  return (
                    <motion.div
                      key={evt.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${colors.badge} ${colors.text}`}>
                          {evt.category}
                        </span>
                        {evt.time && (
                          <div className="flex items-center space-x-1 text-[11px] text-slate-300">
                            <Clock className="w-3 h-3 text-amber-400" />
                            <span>{evt.time}</span>
                          </div>
                        )}
                      </div>

                      <h5 className="text-base font-serif font-bold text-white leading-snug">
                        {evt.title}
                      </h5>

                      {evt.desc && (
                        <p className="text-xs text-slate-300 font-sans leading-relaxed">
                          {evt.desc}
                        </p>
                      )}

                      <div className="space-y-1.5 pt-1 text-xs text-slate-300 border-t border-slate-700/60">
                        {evt.speaker && (
                          <div className="flex items-center space-x-2">
                            <User className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                            <span>{evt.speaker}</span>
                          </div>
                        )}
                        {evt.location && (
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                            <span>{evt.location}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Official Adamas BME Events</span>
            <a
              href="mailto:bme.dept@adamasuniversity.ac.in"
              className="text-amber-400 hover:underline flex items-center space-x-1 font-bold"
            >
              <span>Submit Event Inquiry</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
