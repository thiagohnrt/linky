import { Schema } from "mongoose";

export interface Bookmark {
  id: string;
  name: string;
  url: string;
  used: number;
  searched: number;
  folderId: string;
}
