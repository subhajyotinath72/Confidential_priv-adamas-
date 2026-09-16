import { NextRequest, NextResponse } from "next/server";
import { getStoreData, saveStoreData } from "@/lib/db";

// GET /api/admin/content - Return full site content store
export async function GET() {
  const data = getStoreData();
  return NextResponse.json(data);
}

// POST /api/admin/content - Update a specific collection or entire content
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const current = getStoreData();

    const { collection, item, action, fullStore } = body;

    if (fullStore) {
      saveStoreData(fullStore);
      return NextResponse.json({ success: true, message: "Full store updated." });
    }

    if (!collection || !item || !action) {
      return NextResponse.json(
        { error: "Invalid payload. Required fields: collection, item, action" },
        { status: 400 }
      );
    }

    const storeKey = collection as keyof typeof current;
    if (!(storeKey in current)) {
      return NextResponse.json({ error: `Collection '${collection}' not found.` }, { status: 404 });
    }

    let items = (current[storeKey] as any[]) || [];

    if (action === "create") {
      const newItem = { ...item, id: item.id || `item-${Date.now()}` };
      items = [newItem, ...items];
    } else if (action === "update") {
      items = items.map((i: any) => (i.id === item.id ? { ...i, ...item } : i));
    } else if (action === "delete") {
      items = items.filter((i: any) => i.id !== item.id);
    }

    (current[storeKey] as any) = items;
    saveStoreData(current);

    return NextResponse.json({
      success: true,
      message: `Item ${action}d successfully in ${collection}.`,
      data: current,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to process request" }, { status: 500 });
  }
}
