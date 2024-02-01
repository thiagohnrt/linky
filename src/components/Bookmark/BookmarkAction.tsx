"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { Bookmark } from "@/interfaces/Bookmark";
import { useContext } from "react";

interface BookmarkActionProps {
  folderId?: string;
  className?: string;
}

export function BookmarkAction({
  className = "",
  folderId = "",
}: BookmarkActionProps) {
  const { setIsOpenFormBookmark, setBookmarkData } =
    useContext(BookmarkContext);

  const handleOpenFormBookmark = () => {
    setBookmarkData({ folderId } as Bookmark);
    setIsOpenFormBookmark(true);
  };

  return (
    <button
      className={
        className +
        " py-1 px-12 bg-neutral-200 dark:bg-neutral-950 hover:bg-neutral-300 dark:hover:bg-black transition-colors duration-300"
      }
      onClick={handleOpenFormBookmark}
    >
      New Bookmark
    </button>
  );
}
