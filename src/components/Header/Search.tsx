"use client";

import { useCallback, useContext, useEffect } from "react";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { MdKeyboardCommandKey, MdOutlineSearch } from "react-icons/md";
import { Bookmarks } from "@/interfaces/Bookmark";
import { usePathname } from "next/navigation";

async function getData(): Promise<Bookmarks[]> {
  try {
    const response = await fetch(`/api`, {
      // cache: "no-store",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
  return [];
}

export default function Search() {
  const pathname = usePathname();
  const { setIsOpenSearch, setBookmarks } = useContext(BookmarkContext);

  const fetchBookmarks = useCallback(async () => {
    const data = await getData();
    setBookmarks(data);
  }, [setBookmarks]);

  const openSearch = useCallback(() => {
    fetchBookmarks();
    setIsOpenSearch(true);
  }, [fetchBookmarks, setIsOpenSearch]);

  const handleClick = () => {
    openSearch();
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        openSearch();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [openSearch]);

  if (pathname !== "/") {
    return <></>;
  }

  return (
    <div className="w-64 bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors duration-300">
      <button
        type="button"
        className="w-full p-2 gap-2 flex items-center text-left "
        onClick={handleClick}
      >
        <MdOutlineSearch size={20} />
        <span className="flex-auto text-neutral-400">Search</span>
        <span className="flex items-center p-1 text-xs bg-neutral-200 dark:bg-neutral-950 transition-colors duration-300">
          <MdKeyboardCommandKey />K
        </span>
      </button>
    </div>
  );
}
