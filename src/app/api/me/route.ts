import UserModel from "@/models/User";
import dbConnection from "@/services/mongodb";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await dbConnection();
  const cookieStore = cookies();
  const userId = cookieStore.get("user-auth");
  const user = await UserModel.findOne({ _id: userId?.value });
  if (user?._id) {
    delete user._id;
    delete user.password;
    return NextResponse.json(user);
  } else {
    return new NextResponse(JSON.stringify({ message: "not authorized" }), {
      status: 401,
    });
  }
}
