"use client";

import { MdOutlineMoreHoriz } from "react-icons/md";
import DropdownMenu, { ItemMenu } from "../DropdownMenu";
import { useContext } from "react";
import { BookmarkContext } from "@/contexts/bookmarkContext";

export function MenuExplorer() {
  const { setIsOpenFormBookmark, setIsOpenFormFolder } =
    useContext(BookmarkContext);
  const items: ItemMenu[] = [
    {
      text: "New Bookmark",
      keyboard: "⌘B",
      click: () => {
        setIsOpenFormBookmark(true);
      },
    },
    {
      text: "New Folder",
      keyboard: "⌘D",
      click: () => {
        setIsOpenFormFolder(true);
      },
    },
  ];
  return (
    <DropdownMenu items={items}>
      <button
        type="button"
        className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300"
      >
        <MdOutlineMoreHoriz size={16} />
      </button>
    </DropdownMenu>
  );
}
