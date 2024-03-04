"use client";

import { MdOutlineSearch } from "react-icons/md";
import Dialog from "../Dialog";
import { useContext, useState } from "react";
import { Bookmark as BookmarkLink } from "./Bookmark";
import { BookmarkContext } from "@/contexts/bookmarkContext";

export default function SearchDialog() {
  const { bookmarks, isOpenSearch, setIsOpenSearch } =
    useContext(BookmarkContext);
  const [search, setSearch] = useState("");

  return (
    <Dialog
      open={isOpenSearch}
      onClose={setIsOpenSearch}
      className="bg-neutral-100 dark:bg-neutral-950"
      position="top"
    >
      <div className="flex flex-col w-[600px] min-h-[250px] max-h-[90vh]">
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
            onClick={() => setIsOpenSearch(false)}
          >
            Esc
          </span>
        </div>
        <div className="flex-auto overflow-y-auto py-4">
          {bookmarks
            .map((folder) => folder.data)
            .flat()
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
                  onClick={() => setIsOpenSearch(false)}
                  key={"search_bookmark_" + index}
                />
              );
            })}
        </div>
      </div>
    </Dialog>
  );
}
