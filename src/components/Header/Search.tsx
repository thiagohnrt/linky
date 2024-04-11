"use client";

import { useContext } from "react";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { MdKeyboardCommandKey, MdOutlineSearch } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Search() {
  const pathname = usePathname();
  const { setIsOpenSearch } = useContext(BookmarkContext);

  const handleClick = () => {
    setIsOpenSearch(true);
  };

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
          ⌘K
        </span>
      </button>
    </div>
  );
}
