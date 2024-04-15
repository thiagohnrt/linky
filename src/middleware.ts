import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const user = cookies().get("user-auth");

  // If the user is authenticated, continue as normal
  if (user?.value) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/auth", request.url));
}

export const config = {
  matcher: "/((?!api|auth|_next/static|_next/image|favicon.ico).*)",
};
