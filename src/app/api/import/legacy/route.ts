import { Folder } from "@/interfaces/Folder";
import BookmarkModel from "@/models/Bookmark";
import FolderModel from "@/models/Folder";
import dbConnection from "@/services/mongodb";
import { NextRequest, NextResponse } from "next/server";

interface LegadyData {
  data: [{ name: string; children: [{ name: string; link: string }] }];
}

export async function POST(req: NextRequest) {
  try {
    await dbConnection();
    const { data }: LegadyData = await req.json();

    for (let fIndex = 0; fIndex < data.length; fIndex++) {
      const { name, children } = data[fIndex];
      const folder: Folder = await FolderModel.create({ name });
      for (let bIndex = 0; bIndex < children.length; bIndex++) {
        const { name, link } = children[bIndex];
        await BookmarkModel.create({ name, url: link, folderId: folder.id });
      }
    }

    return NextResponse.json({}, { status: 201 });
  } catch (e) {
    const error: any = e;
    return NextResponse.json(
      { error: "Internal Server Error", detail: error.message },
      { status: 500 }
    );
  }
}
