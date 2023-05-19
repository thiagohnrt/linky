import { Bookmark } from "@/interfaces/Bookmark";
import BookmarkModel from "@/models/Bookmark";
import dbConnection from "@/services/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnection();
  const body: Bookmark = await req.json();
  const folder = await BookmarkModel.create(body);
  return NextResponse.json(folder);
}

export async function PUT(req: NextRequest) {
  await dbConnection();
  return NextResponse.json({ message: "not implemented" });
}

export async function DELETE(req: NextRequest) {
  await dbConnection();
  return NextResponse.json({ message: "not implemented" });
}
