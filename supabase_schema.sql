-- ====================================================================
-- ADAMAS UNIVERSITY - DEPARTMENT OF BIOMEDICAL ENGINEERING
-- PRIMARY SUPABASE DATABASE SCHEMA & INITIAL SEED DATA
-- ====================================================================

-- 1. ENABLE EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. FACULTY & STAFF TABLE
CREATE TABLE IF NOT EXISTS faculty (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'fac-' || gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    track_id VARCHAR(10) DEFAULT '01',
    degrees TEXT,
    alma_mater TEXT,
    specialization TEXT,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    room VARCHAR(100),
    bio TEXT,
    research_focus JSONB DEFAULT '[]'::jsonb,
    publications_count INT DEFAULT 0,
    patents_count INT DEFAULT 0,
    avatar TEXT,
    featured_publications JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. NEWS & EVENTS TABLE
CREATE TABLE IF NOT EXISTS news_events (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'news-' || gen_random_uuid(),
    title TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    date VARCHAR(50) NOT NULL,
    summary TEXT,
    link TEXT,
    badge VARCHAR(50),
    type VARCHAR(20) DEFAULT 'news', -- 'news' or 'event'
    image TEXT,
    location VARCHAR(255),
    time VARCHAR(100),
    speaker VARCHAR(255),
    is_featured BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. RESEARCH CENTERS TABLE
CREATE TABLE IF NOT EXISTS research_centers (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'center-' || gen_random_uuid(),
    code VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    focus TEXT,
    lead VARCHAR(255),
    funding TEXT,
    icon VARCHAR(100),
    specs JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 5. ACADEMIC PROGRAMS TABLE
CREATE TABLE IF NOT EXISTS academic_programs (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'prog-' || gen_random_uuid(),
    code VARCHAR(20) UNIQUE NOT NULL,
    degree VARCHAR(100) NOT NULL,
    title VARCHAR(255) NOT NULL,
    duration VARCHAR(50),
    seats INT,
    eligibility TEXT,
    overview TEXT,
    outcomes JSONB DEFAULT '[]'::jsonb,
    curriculum JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 6. MEDIA GALLERY TABLE
CREATE TABLE IF NOT EXISTS media_gallery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    filename TEXT NOT NULL,
    url TEXT NOT NULL,
    mime_type VARCHAR(100),
    size_bytes BIGINT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 7. GLOBAL SITE JSON STORE (BACKUP / CACHE STORE)
CREATE TABLE IF NOT EXISTS site_store (
    id TEXT PRIMARY KEY DEFAULT 'main_store',
    content JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

-- Enable RLS on all tables
ALTER TABLE faculty ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_centers ENABLE ROW LEVEL SECURITY;
ALTER TABLE academic_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_store ENABLE ROW LEVEL SECURITY;

-- Create Policies for Public Read & Service-Role/Authenticated Write
CREATE POLICY "Public Read Access Faculty" ON faculty FOR SELECT USING (true);
CREATE POLICY "Admin All Access Faculty" ON faculty FOR ALL USING (true);

CREATE POLICY "Public Read Access News" ON news_events FOR SELECT USING (true);
CREATE POLICY "Admin All Access News" ON news_events FOR ALL USING (true);

CREATE POLICY "Public Read Access Research" ON research_centers FOR SELECT USING (true);
CREATE POLICY "Admin All Access Research" ON research_centers FOR ALL USING (true);

CREATE POLICY "Public Read Access Programs" ON academic_programs FOR SELECT USING (true);
CREATE POLICY "Admin All Access Programs" ON academic_programs FOR ALL USING (true);

CREATE POLICY "Public Read Access Media" ON media_gallery FOR SELECT USING (true);
CREATE POLICY "Admin All Access Media" ON media_gallery FOR ALL USING (true);

CREATE POLICY "Public Read Access Site Store" ON site_store FOR SELECT USING (true);
CREATE POLICY "Admin All Access Site Store" ON site_store FOR ALL USING (true);

-- ====================================================================
-- STORAGE BUCKET CREATION FOR IMAGE UPLOADS
-- ====================================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('bme-uploads', 'bme-uploads', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public Storage Read" ON storage.objects FOR SELECT USING (bucket_id = 'bme-uploads');
CREATE POLICY "Public Storage Insert" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'bme-uploads');
CREATE POLICY "Public Storage Delete" ON storage.objects FOR DELETE USING (bucket_id = 'bme-uploads');

-- ====================================================================
-- SEED INITIAL DATA FOR THE DEPARTMENT
-- ====================================================================

-- Seed Faculty
INSERT INTO faculty (id, name, designation, track_id, degrees, alma_mater, specialization, email, phone, room, bio, research_focus, publications_count, patents_count, avatar)
VALUES
(
    'fac-1',
    'Dr. Arindam Banerjee',
    'Professor & Head of Department',
    '01',
    'Ph.D. in Biomedical Instrumentation, M.Tech (IIT Kharagpur)',
    'Adamas University / Formerly Research Fellow at IISc',
    'Biosensors, Non-Invasive Diagnostics, Neural Signal Processing',
    'arindam.banerjee@adamasuniversity.ac.in',
    '+91 (033) 2587-9001',
    'SET Building, Room 302',
    'Dr. Arindam Banerjee has over 18 years of academic and clinical research experience in biomedical signal processing and wearable biosensor systems. He leads the Center for Advanced Bio-Imaging & Sensing at Adamas University.',
    '["Cardiovascular Signal Analytics", "Wearable ECG & EEG Sensors", "Point-of-Care Diagnostics"]'::jsonb,
    68,
    5,
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
),
(
    'fac-2',
    'Dr. Sunita Roy',
    'Associate Professor',
    '02',
    'Ph.D. in Biomaterials Engineering (NITH), M.S. (Calcutta Univ)',
    'Adamas University / Former Scientist at CSIR-CGCRI',
    'Bioceramics, 3D Bioprinting Scaffolds, Controlled Drug Delivery',
    'sunita.roy@adamasuniversity.ac.in',
    '+91 (033) 2587-9002',
    'SET Building, Room 305',
    'Dr. Sunita Roy specializes in tissue scaffolding for orthopedic repair and bio-ink formulation for 3D bioprinting. She collaborates extensively with leading hospitals in Kolkata for clinical translational studies.',
    '["Polymeric Tissue Scaffolds", "Nanomedicine & Targeted Delivery", "Bio-Ink Synthesis"]'::jsonb,
    45,
    3,
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
),
(
    'fac-3',
    'Dr. Subhajit Roy',
    'Assistant Professor',
    '03',
    'Ph.D. in Medical AI (JU), M.Tech in Biomedical (Jadavpur Univ)',
    'Adamas University / MedTech AI Consultant',
    'Deep Learning for Medical Imaging, Tele-ICU Monitoring, Surgical Robotics',
    'subhajit.roy@adamasuniversity.ac.in',
    '+91 (033) 2587-9003',
    'SET Building, Room 308',
    'Dr. Subhajit Roy focuses on deploying deep learning neural networks for automated tumor detection in MRI/CT scans and building low-cost telemetry monitors for rural healthcare clinics.',
    '["AI Diagnostic Algorithms", "Surgical Robotics Tele-operation", "Bio-signal Embedded Systems"]'::jsonb,
    32,
    2,
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
)
ON CONFLICT (id) DO UPDATE SET
name = EXCLUDED.name,
designation = EXCLUDED.designation,
email = EXCLUDED.email;

-- Seed Research Centers
INSERT INTO research_centers (id, code, name, focus, lead, funding, icon, specs)
VALUES
(
    'center-1',
    '01',
    'Center for Advanced Bio-Imaging & Sensing',
    'Non-invasive optical diagnostics, wearable telemetry, and microfluidic biosensors.',
    'Dr. Arindam Banerjee',
    'DST-SERB & ICMR',
    'Activity',
    '["High-speed digitizers", "Microfluidic printers", "Cleanroom suite"]'::jsonb
),
(
    'center-2',
    '02',
    'Tissue Engineering & Biomaterials Scaffold Hub',
    '3D bioprinting bio-inks, polymeric bone scaffolds, and drug delivery nanocarriers.',
    'Dr. Sunita Roy',
    'CSIR & University Seed Grant',
    'FlaskConical',
    '["Dual-head extrusion bioprinter", "SEM imaging suite", "Biomechanics tester"]'::jsonb
),
(
    'center-3',
    '03',
    'Healthcare AI & Medical Robotics Lab',
    'Deep learning for MRI/CT, tele-ICU monitoring, and surgical haptic manipulators.',
    'Dr. Subhajit Roy',
    'MeitY & Industry Partners',
    'Cpu',
    '["GPU acceleration cluster", "Haptic arm manipulators", "Telemetry suite"]'::jsonb
)
ON CONFLICT (id) DO UPDATE SET
name = EXCLUDED.name,
focus = EXCLUDED.focus;

-- Seed News & Events
INSERT INTO news_events (id, title, category, date, summary, badge, type, image, location, is_featured)
VALUES
(
    'news-1',
    'Adamas University Signs MoU with AMRI Hospitals for Clinical Rotations',
    'Clinical Partnership',
    'October 14, 2025',
    'Finalized a 3-year research partnership allowing B.Tech & M.Tech students direct clinical rotations in biomedical instrumentation, ICU telemetry, and MRI lab maintenance.',
    'Hospital Partner',
    'news',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    'AMRI Hospital Salt Lake, Kolkata',
    true
),
(
    'news-2',
    'DST Grant Awarded for 3D Printed Bone Scaffold Research Project',
    'Research Grant',
    'September 28, 2025',
    'The Department secured a ₹45 Lakh DST-SERB grant for developing bio-compatible nanoceramic scaffolds for bone tissue engineering.',
    'Grant Award',
    'news',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600',
    'Adamas University Campus',
    true
)
ON CONFLICT (id) DO UPDATE SET
title = EXCLUDED.title,
summary = EXCLUDED.summary;
