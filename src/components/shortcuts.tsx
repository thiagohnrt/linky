"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { useContext, useEffect } from "react";

export function Shortcuts() {
  const { setIsOpenFormBookmark, setIsOpenFormFolder, setIsOpenSearch } =
    useContext(BookmarkContext);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "d" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpenFormBookmark(true);
      } else if (e.key === "o" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpenFormFolder(true);
      } else if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpenSearch(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setIsOpenFormBookmark, setIsOpenFormFolder, setIsOpenSearch]);

  return <></>;
}
