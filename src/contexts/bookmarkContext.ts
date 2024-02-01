"use client";

import { Bookmark, Bookmarks } from "@/interfaces/Bookmark";
import { Folder } from "@/interfaces/Folder";
import { createContext, Dispatch, SetStateAction } from "react";

export const BookmarkContext = createContext(<
  {
    isOpenFormBookmark: boolean;
    setIsOpenFormBookmark: Dispatch<SetStateAction<boolean>> | (() => void);
    isOpenFormFolder: boolean;
    setIsOpenFormFolder: Dispatch<SetStateAction<boolean>> | (() => void);

    bookmarkData: Bookmark;
    setBookmarkData: Dispatch<SetStateAction<Bookmark>> | (() => void);
    folderData: Folder;
    setFolderData: Dispatch<SetStateAction<Folder>> | (() => void);

    isOpenDeleteBookmark: boolean;
    setIsOpenDeleteBookmark: Dispatch<SetStateAction<boolean>> | (() => void);
    isOpenDeleteFolder: boolean;
    setIsOpenDeleteFolder: Dispatch<SetStateAction<boolean>> | (() => void);

    // TODO not implemented
    bookmarks: Bookmarks[];
    setBookmarks: Dispatch<SetStateAction<Bookmarks[]>> | (() => void);
  }
>{
  isOpenFormBookmark: false,
  setIsOpenFormBookmark: () => null,
  isOpenFormFolder: false,
  setIsOpenFormFolder: () => null,

  bookmarkData: { name: "", url: "", folderId: "" },
  setBookmarkData: () => null,
  folderData: { name: "" },
  setFolderData: () => null,

  isOpenDeleteBookmark: false,
  setIsOpenDeleteBookmark: () => null,
  isOpenDeleteFolder: false,
  setIsOpenDeleteFolder: () => null,

  bookmarks: [],
  setBookmarks: () => null,
});
