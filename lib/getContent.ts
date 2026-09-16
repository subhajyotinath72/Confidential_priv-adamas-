import { getStoreData } from "@/lib/db";

export function getPublicContent() {
  return getStoreData();
}
