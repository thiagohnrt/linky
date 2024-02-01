import { Bookmark } from "@/interfaces/Bookmark";
import BookmarkModel from "@/models/Bookmark";
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
  const body: Bookmark = await req.json();
  const bookmark = await BookmarkModel.updateOne({ _id: params.id }, body);
  return NextResponse.json(bookmark);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: ParamsProps }
) {
  await dbConnection();
  await BookmarkModel.deleteOne({ _id: params.id });
  return new Response(null, { status: 204 });
}
