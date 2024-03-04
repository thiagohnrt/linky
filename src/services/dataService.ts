import { Bookmarks } from "@/interfaces/Bookmark";

export async function getData(): Promise<Bookmarks[]> {
  const response = await fetch(`${process.env.API_URL}/api`, {
    cache: "no-store",
  });
  return await response.json();
}
