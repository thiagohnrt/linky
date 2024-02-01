import { Folder } from "@/interfaces/Folder";
import mongoose, { Schema } from "mongoose";

const FolderSchema = new Schema<Folder>({
  name: String,
});

const FolderModel =
  mongoose.models.Folder || mongoose.model<Folder>("Folder", FolderSchema);

export default FolderModel;
