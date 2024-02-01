"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { Bookmark } from "@/interfaces/Bookmark";
import { useContext } from "react";

interface BookmarkActionProps {
  style: "button";
  type: "new" | "edit";
  folderId?: string;
  className?: string;
}

export function BookmarkAction({
  style,
  type,
  className = "",
  folderId = "",
}: BookmarkActionProps) {
  const { setIsOpenFormBookmark, setBookmarkData } =
    useContext(BookmarkContext);

  const handleOpenFormBookmark = () => {
    setBookmarkData({ folderId } as Bookmark);
    setIsOpenFormBookmark(true);
  };

  if (style === "button") {
    return (
      <button
        className={
          className +
          " py-1 px-12 bg-neutral-200 dark:bg-neutral-950 hover:bg-neutral-300 dark:hover:bg-black transition-colors duration-300"
        }
        onClick={handleOpenFormBookmark}
      >
        {type === "new" ? "New" : "Edit"} Bookmark
      </button>
    );
  } else {
    return (
      <div className={className} onClick={handleOpenFormBookmark}>
        {type === "new" ? "New" : "Edit"} Bookmark
      </div>
    );
  }
}
