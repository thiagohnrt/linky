import { generateColor } from "@/services/generateColor";
import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);
  const bookmarkUrl = url.searchParams.get("url");
  const bookmarkTitle = url.searchParams.get("title");

  if (!bookmarkUrl || !bookmarkTitle) {
    return new NextResponse("Parameter url or title not found", {
      status: 400,
    });
  }

  const imageResponse = await fetch(
    `http://www.google.com/s2/favicons?domain=${bookmarkUrl}`
  );

  if (imageResponse.status === 200) {
    const imageBlob = await imageResponse.blob();
    return new NextResponse(imageBlob);
  } else {
    const size = {
      width: 32,
      height: 32,
    };
    const char = bookmarkTitle.charAt(0);
    const [background, color] = generateColor(char);
    return new ImageResponse(
      (
        <div
          style={{
            ...size,
            fontSize: 24,
            fontWeight: "bold",
            background,
            color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          {char}
        </div>
      ),
      size
    );
  }
}
