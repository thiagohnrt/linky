"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { ReactNode, useState } from "react";
import { Bookmark, Bookmarks } from "@/interfaces/Bookmark";

interface BookmarkProviderProps {
  children: ReactNode;
}
export function BookmarkProvider({ children }: BookmarkProviderProps) {
  const data: Bookmarks[] = [];
  const [isOpenFormBookmark, setIsOpenFormBookmark] = useState(false);
  const [isOpenFormFolder, setIsOpenFormFolder] = useState(false);

  const [bookmarkData, setBookmarkData] = useState<Bookmark>({
    name: "",
    url: "",
    folderKey: "",
  });

  const [isOpenDeleteBookmark, setIsOpenDeleteBookmark] = useState(false);
  const [isOpenDeleteFolder, setIsOpenDeleteFolder] = useState(false);

  const [bookmarks, setBookmarks] = useState(data);
  return (
    <BookmarkContext.Provider
      value={{
        isOpenFormBookmark,
        setIsOpenFormBookmark,
        isOpenFormFolder,
        setIsOpenFormFolder,
        bookmarkData,
        setBookmarkData,
        isOpenDeleteBookmark,
        setIsOpenDeleteBookmark,
        isOpenDeleteFolder,
        setIsOpenDeleteFolder,
        bookmarks,
        setBookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
