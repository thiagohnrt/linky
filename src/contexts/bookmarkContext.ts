"use client";

import { Bookmark, Bookmarks } from "@/interfaces/Bookmark";
import { createContext, Dispatch, SetStateAction } from "react";

export const BookmarkContext = createContext(<
  {
    isOpenFormBookmark: boolean;
    setIsOpenFormBookmark: Dispatch<SetStateAction<boolean>> | (() => void);
    isOpenFormFolder: boolean;
    setIsOpenFormFolder: Dispatch<SetStateAction<boolean>> | (() => void);

    bookmarkData: Bookmark;
    setBookmarkData: Dispatch<SetStateAction<Bookmark>> | (() => void);

    // TODO not implemented
    bookmarks: Bookmarks[];
    setBookmarks: Dispatch<SetStateAction<Bookmarks[]>> | (() => void);
  }
>{
  isOpenFormBookmark: false,
  setIsOpenFormBookmark: () => null,
  isOpenFormFolder: false,
  setIsOpenFormFolder: () => null,
  bookmarkData: { name: "", url: "", folderKey: "" },
  setBookmarkData: () => null,
  bookmarks: [],
  setBookmarks: () => null,
});
