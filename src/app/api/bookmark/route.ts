import { Bookmark } from "@/interfaces/Bookmark";
import BookmarkModel from "@/models/Bookmark";
import dbConnection from "@/services/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await dbConnection();
  const folders = await BookmarkModel.find<Bookmark>({});
  return NextResponse.json(
    folders.map<Bookmark>(({ id, name, url, used, searched, folderId }) => ({
      id,
      name,
      url,
      used,
      searched,
      folderId,
    }))
  );
}

export async function POST(req: NextRequest) {
  await dbConnection();
  const body: Bookmark = await req.json();
  const folder = await BookmarkModel.create(body);
  return NextResponse.json(folder);
}
