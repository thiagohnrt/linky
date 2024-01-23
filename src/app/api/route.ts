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

  const data = folders.map<Bookmarks>((folder) => ({
    name: folder.name,
    key: folder.key,
    data: bookmarks.filter(({ folderKey }) => folder.key === folderKey),
  }));

  return NextResponse.json(data);
}
