import BookmarkModel from "@/models/Bookmark";
import FolderModel from "@/models/Folder";
import dbConnection from "@/services/mongodb";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  await dbConnection();
  await FolderModel.deleteMany();
  await BookmarkModel.deleteMany();
  return new Response(null, { status: 204 });
}
