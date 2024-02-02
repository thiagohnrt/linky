"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { Bookmark } from "@/interfaces/Bookmark";
import { PlusIcon } from "lucide-react";
import { useContext } from "react";

interface BookmarkActionProps {
  folderId?: string;
  className?: string;
  type?: "button" | "icon";
}

export function BookmarkAction({
  className = "",
  folderId = "",
  type = "button",
}: BookmarkActionProps) {
  const { setIsOpenFormBookmark, setBookmarkData } =
    useContext(BookmarkContext);

  const handleOpenFormBookmark = () => {
    setBookmarkData({ folderId } as Bookmark);
    setIsOpenFormBookmark(true);
  };

  return (
    <button
      title="New Bookmark"
      className={
        className +
        (type === "button"
          ? " py-1 px-12 bg-neutral-200 dark:bg-neutral-950"
          : " py-1 px-2 bg-neutral-100 dark:bg-neutral-800")
      }
      onClick={handleOpenFormBookmark}
    >
      {type === "button" ? "New Bookmark" : <PlusIcon />}
    </button>
  );
}
