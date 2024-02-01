import { Bookmark, Bookmarks } from "@/interfaces/Bookmark";
import { Folder } from "@/interfaces/Folder";
import BookmarkModel from "@/models/Bookmark";
import FolderModel from "@/models/Folder";
import dbConnection from "@/services/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnection();
  const folders = await FolderModel.find<Folder>({});
  const bookmarks = await BookmarkModel.find<Bookmark>({});

  const data = folders.map<Bookmarks>(({ id, name }) => ({
    id,
    name,
    data: bookmarks
      .filter(({ folderId }) => id === folderId)
      .map(({ id, name, url, used, searched, folderId }) => ({
        id,
        name,
        url,
        used,
        searched,
        folderId,
      })),
  }));

  return NextResponse.json(data);
}
