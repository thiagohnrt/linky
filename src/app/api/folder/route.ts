import { Folder } from "@/interfaces/Folder";
import FolderModel from "@/models/Folder";
import dbConnection from "@/services/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await dbConnection();
  const folders = await FolderModel.find<Folder>({});
  return NextResponse.json(folders);
}

export async function POST(req: NextRequest) {
  await dbConnection();
  const body: Folder = await req.json();
  const folder = await FolderModel.create(body);
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
