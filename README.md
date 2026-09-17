# Adamas University — Department of Biomedical Engineering Website

Production-quality Next.js (App Router) website for the **Department of Biomedical Engineering**, housed under the **School of Engineering & Technology (SOET)** at **Adamas University**, Kolkata, West Bengal.

All branding, text, faculty profiles, and contact details are **100% Adamas University** — containing **ZERO** mentions of IIT Madras, AMBE, Chennai, or IIT maroon color schemes.

---

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System tokens (`navy`, `teal`, `gold`, `slate`)
- **Animations**: Framer Motion (page transitions, crossfades, counter cards, expandable accordions)
- **Icons**: Lucide React
- **Design Principles**: Fully responsive, accessible semantic HTML, custom focus states, glassmorphism, dynamic micro-interactions.

---

## 📁 Project Folder Structure

```
d:/bme website/
├── app/
│   ├── layout.tsx             # Root layout (Metadata, Google Fonts, TopBar, Navbar, Footer)
│   ├── page.tsx               # Homepage (10 core sections: Hero, USPs, HoD Quote, Research Tracks, Programs, Centers, News, Testimonials, Spotlight, Apply Banner)
│   ├── globals.css            # Tailwind CSS directives, theme variables, focus rings
│   ├── programs/
│   │   └── page.tsx           # Academic Programs (B.Tech, M.Tech, Ph.D. curricula, syllabus modal)
│   ├── faculty/
│   │   └── page.tsx           # Faculty Directory (8 fictional profiles, track filters, search, bio modal)
│   └── contact/
│       └── page.tsx           # Contact Page (Kolkata address, interactive inquiry form, custom campus map)
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx         # Top utility strip with contact helpline & portal links
│   │   ├── Navbar.tsx         # Sticky header with mega-menu dropdowns & mobile drawer
│   │   └── Footer.tsx         # Dark navy footer, Kolkata campus address, accreditation badges
│   ├── home/
│   │   ├── HeroCarousel.tsx   # Auto-scrolling biomedical image hero with tagline & dual CTAs
│   │   ├── USPTiles.tsx       # 4 Stat/USP metric cards
│   │   ├── HoDQuote.tsx       # Head of Department pull-quote block (Site A visual style)
│   │   ├── ResearchAreas.tsx  # Numbered (01/02/03) expandable accordion panels with faculty avatar strips
│   │   ├── AcademicPrograms.tsx # Program feature cards & specialization chips
│   │   ├── ResearchCenters.tsx # Card grid of 6 interdisciplinary R&D centers & labs
│   │   ├── NewsAndEvents.tsx  # 3 News cards + "Coming Up" event timeline sidebar
│   │   ├── Testimonials.tsx   # Student & alumni quote carousel
│   │   ├── Spotlight.tsx      # Innovation & facility spotlight cards
│   │   └── ApplyNowBanner.tsx # High-contrast CTA strip near footer
│   ├── ui/
│   │   └── Modal.tsx          # Reusable modal for profiles & syllabus requests
│   └── shared/
│       └── CustomMap.tsx      # Interactive visual campus map representation
├── data/
│   ├── faculty.ts             # 8 Fictional Adamas University faculty profiles
│   ├── research.ts            # Detailed research tracks (01/02/03) & lab center specs
│   ├── programs.ts            # B.Tech, M.Tech, Ph.D specs, eligibility, & curriculum
│   ├── newsEvents.ts          # Generic current-year news items & upcoming event calendar
│   └── testimonials.ts       # Alumni testimonials & spotlight item dataset
├── tailwind.config.ts         # Custom Adamas theme colors, fonts, glow shadows
├── tsconfig.json              # TypeScript configuration
├── package.json
└── README.md
```

---

## 🛠️ How to Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live site.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🎓 Rebrand & Key Content Verification

- **Institution**: Adamas University — School of Engineering & Technology — Department of Biomedical Engineering
- **Location**: Barasat–Barrackpore Road, Barbaria, P.O Jagannathpur, District 24 Parganas (North), Kolkata – 700126, West Bengal
- **Toll-Free Phone**: 1800-419-7423
- **Email**: `biomedical@adamasuniversity.ac.in`
- **Color Scheme**: Deep Navy (`#0F2137`), Bio-Teal (`#0D9488`), Warm Gold (`#D97706`), Slate (`#F8FAFC`). Zero IIT maroon (`#370f0b`).
- **Research Tracks**:
  - `01` Biomedical Instrumentation & Signal Processing
  - `02` Biomaterials & Tissue Engineering
  - `03` Health Informatics & AI in Medicine
