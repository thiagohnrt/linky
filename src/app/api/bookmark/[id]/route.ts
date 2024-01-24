import { Bookmark } from "@/interfaces/Bookmark";
import BookmarkModel from "@/models/Bookmark";
import dbConnection from "@/services/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnection();
  const body: Bookmark = await req.json();
  const folder = await BookmarkModel.updateOne({ _id: params.id }, body);
  return NextResponse.json(folder);
}
