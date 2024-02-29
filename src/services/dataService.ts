import { Bookmarks } from "@/interfaces/Bookmark";

export async function getData(): Promise<Bookmarks[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/api`, {
      cache: "no-store",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
  return [];
}
