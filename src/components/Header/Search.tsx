"use client";

import { MdKeyboardCommandKey, MdOutlineSearch } from "react-icons/md";
import Dialog from "../Dialog";
import { useCallback, useEffect, useState } from "react";
import { Bookmark } from "@/interfaces/Bookmark";
import { Bookmark as BookmarkLink } from "./Bookmark";

async function getData(): Promise<Bookmark[]> {
  try {
    const response = await fetch(`/api/bookmark`, {
      cache: "no-store",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
  return [];
}

export default function Search() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const fetchBookmarks = useCallback(async () => {
    const data = await getData();
    setBookmarks(data);
  }, []);

  useEffect(() => {
    if (bookmarks.length === 0) fetchBookmarks();
  }, [bookmarks, fetchBookmarks]);

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
        <div className="flex flex-col w-[600px] h-[90vh]">
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
          <div className="flex-auto overflow-y-auto pt-4">
            {bookmarks
              .filter((bookmark) => {
                return bookmark.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .sort((a, b) =>
                a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
              )
              .sort((a, b) => {
                const searchLowerCase = search.toLocaleLowerCase();
                return (
                  a.name.toLocaleLowerCase().indexOf(searchLowerCase) -
                  b.name.toLocaleLowerCase().indexOf(searchLowerCase)
                );
              })
              .map((bookmark, index) => {
                return (
                  <BookmarkLink
                    bookmark={bookmark}
                    onClick={() => setIsOpen(false)}
                    key={"search_bookmark_" + index}
                  />
                );
              })}
          </div>
        </div>
      </Dialog>
    </>
  );
}
