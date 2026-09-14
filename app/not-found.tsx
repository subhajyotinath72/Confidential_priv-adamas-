import React from "react";
import Link from "next/link";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 text-slate-900 p-6">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto border border-teal-200">
          <FileQuestion className="w-8 h-8 text-teal-700" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold font-mono text-slate-900">404</h1>
          <h2 className="text-lg font-bold text-slate-900">Page Not Found</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4 mr-2 text-adamas-gold" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
