import { User } from "@/interfaces/User";
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema<User>({
  username: String,
  password: String,
});

const UserModel =
  mongoose.models.User || mongoose.model<User>("User", UserSchema);

export default UserModel;
