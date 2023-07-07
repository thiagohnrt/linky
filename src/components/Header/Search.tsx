"use client";

import { MdKeyboardCommandKey, MdOutlineSearch } from "react-icons/md";
import Dialog from "../Dialog";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="w-64 p-2 gap-2 flex items-center cursor-pointer bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors duration-300"
        onClick={() => setIsOpen(true)}
      >
        <MdOutlineSearch size={20} />
        <span className="flex-auto text-neutral-400">Search</span>
        <span className="flex items-center p-1 text-xs bg-neutral-200 dark:bg-neutral-950 transition-colors duration-300">
          <MdKeyboardCommandKey />K
        </span>
      </div>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="bg-neutral-100 dark:bg-neutral-950"
      >
        <div className="px-8 pt-4 w-[600px] h-[90vh]">
          <div className="p-2 gap-2 flex items-center bg-white dark:bg-neutral-900">
            <MdOutlineSearch size={20} />
            <input
              type="text"
              name="search"
              className="bg-transparent outline-none w-full"
              placeholder="Search"
              autoComplete="off"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              className="flex items-center p-1 text-xs cursor-pointer bg-neutral-200 dark:bg-neutral-950"
              onClick={() => setIsOpen(false)}
            >
              Esc
            </span>
          </div>
        </div>
      </Dialog>
    </>
  );
}
