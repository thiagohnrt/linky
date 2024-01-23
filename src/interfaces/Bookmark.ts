import { Folder } from "./Folder";

export interface Bookmark {
  _id: string;
  name: string;
  url: string;
  used: number;
  searched: number;
  folderId: string;
}

export interface Bookmarks extends Folder {
  data: Bookmark[];
}
