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
      className={`${inter.variable} ${outfit.variable} ${playfair.variable} scroll-smooth bg-black text-[#eaf6f6]`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                if (e && e.message && (e.message.indexOf('Loading chunk') !== -1 || e.message.indexOf('ChunkLoadError') !== -1)) {
                  if (!window.sessionStorage.getItem('chunk_load_retried')) {
                    window.sessionStorage.setItem('chunk_load_retried', 'true');
                    window.location.reload();
                  }
                }
              });
            `,
          }}
        />
      </head>
      <body
        id="top"
        className="min-h-screen flex flex-col bg-black text-[#eaf6f6] font-sans antialiased selection:bg-[#103E3B] selection:text-[#eaf6f6]"
        suppressHydrationWarning
      >
        <TopBar />
        <Navbar />
        <main className="flex-grow bg-black text-[#eaf6f6]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
