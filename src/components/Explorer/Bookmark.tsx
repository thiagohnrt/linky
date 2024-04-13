"use client";

import Link from "next/link";
import Favicon from "../Favicon";
import { MenuBookmark } from "../Menu/MenuBookmark";
import { Bookmark as IBookmark } from "@/interfaces/Bookmark";

interface BookmarkProps {
  bookmark: IBookmark;
}

export function Bookmark({ bookmark }: BookmarkProps) {
  return (
    <div className="flex justify-between pl-4 py-1 [&>.bookmark-more]:hover:opacity-100 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300">
      <Link
        href={bookmark.url ?? ""}
        target="_blank"
        className="flex gap-2 w-full items-center"
      >
        <Favicon bookmark={bookmark} />
        <span>{bookmark.name}</span>
      </Link>
      <MenuBookmark bookmark={bookmark} />
    </div>
  );
}
