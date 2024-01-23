import { Folder } from "@/interfaces/Folder";
import mongoose, { Schema } from "mongoose";

const FolderSchema = new Schema<Folder>({
  name: String,
  key: String,
});

const FolderModel =
  mongoose.models.Folder || mongoose.model("Folder", FolderSchema);

export default FolderModel;
