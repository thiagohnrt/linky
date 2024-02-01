import { Bookmark } from "@/interfaces/Bookmark";
import mongoose, { Schema } from "mongoose";

const BookmarkSchema = new Schema<Bookmark>({
  name: String,
  url: String,
  used: { type: Number, default: 0 },
  searched: { type: Number, default: 0 },
  folderId: String,
});

const BookmarkModel =
  mongoose.models.Bookmark ||
  mongoose.model<Bookmark>("Bookmark", BookmarkSchema);

export default BookmarkModel;
