"use client";

import { MdOutlineMoreHoriz } from "react-icons/md";
import DropdownMenu, { ItemMenu } from "../DropdownMenu";

export function MenuExplorer() {
  const items: ItemMenu[] = [
    {
      text: "New Folder",
      keyboard: "⌘D",
      click: () => {},
    },
    {
      text: "New Bookmark",
      keyboard: "⌘B",
      click: () => {},
    },
  ];
  return (
    <DropdownMenu items={items}>
      <button
        type="button"
        className="p-2 outline-none hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300"
      >
        <MdOutlineMoreHoriz size={16} />
      </button>
    </DropdownMenu>
  );
}
