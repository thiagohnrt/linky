"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { useContext } from "react";

interface BookmarkActionProps {
  style: "button";
  type: "new" | "edit";
  className?: string;
}

export function BookmarkAction({
  style,
  type,
  className = "",
}: BookmarkActionProps) {
  const { setIsOpenFormBookmark } = useContext(BookmarkContext);
  if (style === "button") {
    return (
      <button
        className={
          className +
          " py-1 px-12 bg-neutral-200 dark:bg-neutral-950 hover:bg-neutral-300 dark:hover:bg-black transition-colors duration-300"
        }
        onClick={() => setIsOpenFormBookmark(true)}
      >
        {type === "new" ? "New" : "Edit"} Bookmark
      </button>
    );
  } else {
    return (
      <div className={className} onClick={() => setIsOpenFormBookmark(true)}>
        {type === "new" ? "New" : "Edit"} Bookmark
      </div>
    );
  }
}
