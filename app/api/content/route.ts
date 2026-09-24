import { NextResponse } from "next/server";
import { getStoreData } from "@/lib/db";

// GET /api/content - Public read-only endpoint for live website content
export async function GET() {
  try {
    const data = getStoreData();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=5, stale-while-revalidate=15",
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to load site content" },
      { status: 500 }
    );
  }
}
