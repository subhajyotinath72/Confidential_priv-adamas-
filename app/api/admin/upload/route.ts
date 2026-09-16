import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabaseUploadImage } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided for upload." }, { status: 400 });
    }

    // Validate file type (image only)
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files (JPG, PNG, WebP, GIF, SVG) are allowed." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename and append timestamp
    const ext = path.extname(file.name) || ".jpg";
    const cleanName = path
      .basename(file.name, ext)
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .toLowerCase();
    const filename = `${cleanName}_${Date.now()}${ext}`;

    // 1. Save locally to public/uploads
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, filename);
    fs.writeFileSync(filePath, buffer);

    let finalUrl = `/uploads/${filename}`;

    // 2. Upload to Supabase Storage Bucket 'bme-uploads' if available
    try {
      const remoteUrl = await supabaseUploadImage(filename, buffer, file.type);
      if (remoteUrl) {
        finalUrl = remoteUrl;
      }
    } catch (sbErr) {
      console.warn("Supabase Storage upload notice (using local URL fallback):", sbErr);
    }

    return NextResponse.json({
      success: true,
      url: finalUrl,
      filename,
      message: "Image uploaded successfully!",
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to upload file." }, { status: 500 });
  }
}
