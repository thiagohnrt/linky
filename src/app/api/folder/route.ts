import { Folder } from "@/interfaces/Folder";
import FolderModel from "@/models/Folder";
import dbConnection from "@/services/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await dbConnection();
  const folders = await FolderModel.find<Folder>({});
  return NextResponse.json(
    folders.map<Folder>(({ id, name }) => ({ id, name }))
  );
}

export async function POST(req: NextRequest) {
  await dbConnection();
  const body: Folder = await req.json();
  const folder = await FolderModel.create(body);
  return NextResponse.json(folder);
}
