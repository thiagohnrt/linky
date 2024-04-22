import { NextResponse, NextRequest, userAgent } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const user = cookies().get("user-auth");

  // If the user is not authenticated, redirect to login page
  if (!user?.value) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (request.nextUrl.pathname === "/") {
    const { device } = userAgent(request);
    // If access is from a mobile device, redirect to mobile page
    if (device.type === "mobile") {
      return NextResponse.redirect(new URL("/mobile", request.url));
    }
  }

  // continue normally
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|auth|_next/static|_next/image|favicon.ico).*)",
};
