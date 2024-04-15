import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const cookieStore = cookies();
  cookieStore.delete("user-auth");
  return new NextResponse(null, { status: 204 });
}
