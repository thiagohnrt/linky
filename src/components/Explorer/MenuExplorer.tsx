"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdKeyboardCommandKey, MdOutlineMoreHoriz } from "react-icons/md";

export function MenuExplorer() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="p-2 outline-none hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300"
        >
          <MdOutlineMoreHoriz size={16} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          className="p-1 border bg-white border-neutral-300 shadow dark:bg-neutral-800 dark:border-neutral-500"
        >
          <DropdownMenu.Item className="flex justify-between pv-1 px-2 gap-8 outline-none cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300">
            New Folder
            <div className="flex items-center text-sm">
              <MdKeyboardCommandKey />D
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="flex justify-between py-1 px-2 gap-8 outline-none cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300">
            New Bookmark
            <div className="flex items-center text-sm">
              <MdKeyboardCommandKey />B
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-neutral-300 dark:fill-neutral-500" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
