"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { useContext } from "react";
import Favicon from "../Favicon";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItemLink,
  CommandList,
} from "../ui/command";

export default function SearchDialog() {
  const { bookmarks, isOpenSearch, setIsOpenSearch } =
    useContext(BookmarkContext);

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
                    onSelect={(value) => {
                      setIsOpenSearch(false);
                    }}
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
