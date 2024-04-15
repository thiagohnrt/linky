import { Bookmarks } from "@/interfaces/Bookmark";
import { User } from "@/interfaces/User";
import { cookies } from "next/headers";

export async function getData(): Promise<Bookmarks[]> {
  const response = await fetch(`${process.env.API_URL}/api`, {
    cache: "no-store",
  });
  return await response.json();
}

export async function getMe(): Promise<User> {
  const response = await fetch(`${process.env.API_URL}/api/me`, {
    cache: "no-store",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  return await response.json();
}
