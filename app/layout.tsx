import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Department of Biomedical Engineering | Adamas University Kolkata",
  description: "Official Website of the Department of Biomedical Engineering under the School of Engineering & Technology (SET), Adamas University, Kolkata. Offering B.Tech, M.Tech, and Ph.D. in Biosensors, 3D Bioprinting, Biomaterials, and Healthcare AI.",
  keywords: [
    "Adamas University",
    "Biomedical Engineering Kolkata",
    "School of Engineering and Technology",
    "B.Tech Biomedical Engineering",
    "M.Tech Biomedical",
    "Ph.D. Biomedical R&D",
    "3D Bioprinting Scaffolds",
    "Biosensors and Medical AI",
    "Healthcare Instrumentation",
    "West Bengal MedTech Engineering"
  ],
  authors: [{ name: "Department of Biomedical Engineering, Adamas University" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${playfair.variable} scroll-smooth bg-[#F8F5EE] text-[#1A1A1A]`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-[#F8F5EE] text-[#1A1A1A] font-sans antialiased selection:bg-[#1B365D] selection:text-white"
        suppressHydrationWarning
      >
        <TopBar />
        <Navbar />
        <main className="flex-grow bg-[#F8F5EE]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
