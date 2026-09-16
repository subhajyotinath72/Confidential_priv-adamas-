const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://gmvmjfutozgavxlaakxi.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdtdm1qZnV0b3pnYXZ4bGFha3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1NDE2MjksImV4cCI6MjEwNTExNzYyOX0.RSYM1_da7b57AhTcKdX-dpcFZjQpZosvFjQZPIb1YB8";
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;

export const supabaseConfig = {
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY,
  serviceKey: SUPABASE_SERVICE_KEY,
};

/**
 * Native REST helper to upsert store data into Supabase table 'site_store'
 */
export async function supabaseUpsertStore(data: any) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/site_store`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_SERVICE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates,return=representation",
      },
      body: JSON.stringify({
        id: "main_store",
        content: data,
        updated_at: new Date().toISOString(),
      }),
    });
    return await res.json();
  } catch (err) {
    console.warn("Supabase REST upsert notice:", err);
    return null;
  }
}

/**
 * Native REST helper to upload image binary to Supabase Storage bucket 'bme-uploads'
 */
export async function supabaseUploadImage(filename: string, buffer: Buffer, mimeType: string) {
  try {
    const uint8 = new Uint8Array(buffer);
    const res = await fetch(`${SUPABASE_URL}/storage/v1/object/bme-uploads/${filename}`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_SERVICE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_KEY}`,
        "Content-Type": mimeType,
        "x-upsert": "true",
      },
      body: uint8,
    });
    if (res.ok) {
      return `${SUPABASE_URL}/storage/v1/object/public/bme-uploads/${filename}`;
    }
    return null;
  } catch (err) {
    console.warn("Supabase REST storage upload notice:", err);
    return null;
  }
}
