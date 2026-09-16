import { NextRequest } from "next/server";

const SECRET = process.env.JWT_SECRET || "adamas_bme_super_secret_jwt_key_2026_kolkata";

export interface SessionPayload {
  email: string;
  exp: number;
}

/**
 * Creates a lightweight signed token string compatible with Edge & Node runtimes
 */
function generateSignature(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  const secretKeyHash = Buffer.from(`${hash}:${SECRET}`).toString("base64url");
  return secretKeyHash.slice(0, 32);
}

export function signAdminToken(email: string): string {
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const payload: SessionPayload = { email, exp };
  const payloadStr = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = generateSignature(payloadStr);
  return `${payloadStr}.${signature}`;
}

export function verifyAdminToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [payloadStr, signature] = parts;
  const expectedSignature = generateSignature(payloadStr);

  if (signature !== expectedSignature) return false;

  try {
    const payload: SessionPayload = JSON.parse(
      Buffer.from(payloadStr, "base64url").toString("utf-8")
    );
    if (Date.now() > payload.exp) return false;
    return true;
  } catch {
    return false;
  }
}

export function validateAdminCredentials(email: string, pass: string): boolean {
  const validEmail = process.env.ADMIN_EMAIL || "adamasuniversity@admin.com";
  const validPass = process.env.ADMIN_PASSWORD || "BME@2026";
  return email.trim().toLowerCase() === validEmail.trim().toLowerCase() && pass === validPass;
}

export function isAuthenticatedRequest(req: NextRequest): boolean {
  const token = req.cookies.get("admin_session")?.value;
  return verifyAdminToken(token);
}
