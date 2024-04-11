"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { useCallback, useContext, useEffect } from "react";
import Favicon from "../Favicon";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItemLink,
  CommandList,
} from "../ui/command";
import { Bookmarks } from "@/interfaces/Bookmark";

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

export default function SearchDialog() {
  const { setBookmarks, bookmarks, isOpenSearch, setIsOpenSearch } =
    useContext(BookmarkContext);

  const fetchBookmarks = useCallback(async () => {
    const data = await getData();
    setBookmarks(data);
  }, [setBookmarks]);

  const openSearch = useCallback(() => {
    fetchBookmarks();
    setIsOpenSearch(true);
  }, [fetchBookmarks, setIsOpenSearch]);

  useEffect(() => {
    if (isOpenSearch) {
      openSearch();
    }
  }, [isOpenSearch, openSearch]);

  return (
    <CommandDialog open={isOpenSearch} onOpenChange={setIsOpenSearch}>
      <CommandInput placeholder="Search" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {bookmarks.map((folder, f) => {
          return (
            <CommandGroup key={f} heading={folder.name}>
              {folder.data.map((bookmark, b) => {
                return (
                  <CommandItemLink
                    key={b}
                    onSelect={() => setIsOpenSearch(false)}
                    href={bookmark.url ?? ""}
                    classNameLink="flex items-center gap-2 [&>.url]:hover:opacity-50"
                    target="_blank"
                  >
                    <Favicon url={bookmark.url ?? ""} />
                    <span>{bookmark.name}</span>
                    <span className="url opacity-0 transition-opacity duration-300">
                      {bookmark.url}
                    </span>
                  </CommandItemLink>
                );
              })}
            </CommandGroup>
          );
        })}
      </CommandList>
    </CommandDialog>
  );
}
