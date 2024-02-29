import { Folder } from "@/interfaces/Folder";
import BookmarkModel from "@/models/Bookmark";
import FolderModel from "@/models/Folder";
import dbConnection from "@/services/mongodb";
import { NextRequest, NextResponse } from "next/server";

interface ParamsProps {
  id: string;
}

export async function PUT(
  req: NextRequest,
  { params }: { params: ParamsProps }
) {
  await dbConnection();
  const body: Folder = await req.json();
  const response = await FolderModel.updateOne({ _id: params.id }, body);
  return NextResponse.json(response);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: ParamsProps }
) {
  await dbConnection();
  await FolderModel.deleteOne({ _id: params.id });
  await BookmarkModel.deleteMany({ folderId: params.id });
  return new Response(null, { status: 204 });
}
