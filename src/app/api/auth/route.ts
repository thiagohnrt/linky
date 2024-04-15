import UserModel from "@/models/User";
import dbConnection from "@/services/mongodb";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface Credential {
  username: string;
  password: string;
}

export async function POST(req: NextRequest) {
  await dbConnection();
  const cookieStore = cookies();
  const credential: Credential = await req.json();
  const user = await UserModel.findOne(credential);
  cookieStore.delete("user-auth");
  if (user?._id) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30); // Expire in 30 dias
    cookieStore.set("user-auth", user._id, {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      expires: expiryDate,
      sameSite: "lax",
      path: "/",
    });
  }
  return NextResponse.json(user);
}
