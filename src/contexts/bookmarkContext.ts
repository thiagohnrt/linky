"use client";

import { Bookmarks } from "@/interfaces/Bookmark";
import { createContext, Dispatch, SetStateAction } from "react";

export const BookmarkContext = createContext(<
  {
    isOpenFormBookmark: boolean;
    setIsOpenFormBookmark: Dispatch<SetStateAction<boolean>> | (() => void);
    isOpenFormFolder: boolean;
    setIsOpenFormFolder: Dispatch<SetStateAction<boolean>> | (() => void);
    // TODO not implemented
    bookmarks: Bookmarks[];
    setBookmarks: Dispatch<SetStateAction<Bookmarks[]>> | (() => void);
  }
>{
  isOpenFormBookmark: false,
  setIsOpenFormBookmark: () => null,
  isOpenFormFolder: false,
  setIsOpenFormFolder: () => null,
  bookmarks: [],
  setBookmarks: () => null,
});
