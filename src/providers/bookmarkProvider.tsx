"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { ReactNode, useState } from "react";
import { Bookmark, Bookmarks } from "@/interfaces/Bookmark";
import { Folder } from "@/interfaces/Folder";

interface BookmarkProviderProps {
  children: ReactNode;
}

export function BookmarkProvider({ children }: BookmarkProviderProps) {
  const [isOpenFormBookmark, setIsOpenFormBookmark] = useState(false);
  const [isOpenFormFolder, setIsOpenFormFolder] = useState(false);

  const [bookmarkData, setBookmarkData] = useState<Bookmark>({} as Bookmark);
  const [folderData, setFolderData] = useState<Folder>({} as Folder);

  const [isOpenDeleteBookmark, setIsOpenDeleteBookmark] = useState(false);
  const [isOpenDeleteFolder, setIsOpenDeleteFolder] = useState(false);

  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const data: Bookmarks[] = [];
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
        folderData,
        setFolderData,
        isOpenDeleteBookmark,
        setIsOpenDeleteBookmark,
        isOpenDeleteFolder,
        setIsOpenDeleteFolder,
        isOpenSearch,
        setIsOpenSearch,
        bookmarks,
        setBookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
