"use client";

import { Bookmark } from "@/interfaces/Bookmark";
import Link from "next/link";
import { MouseEventHandler } from "react";
import Favicon from "../Favicon";

interface BookmarkProps {
  bookmark: Bookmark;
  onClick: MouseEventHandler<HTMLElement> | undefined;
}

export function Bookmark({ bookmark, onClick }: BookmarkProps) {
  return (
    <Link
      href={bookmark.url ?? ""}
      target="_blank"
      onClick={onClick}
      className="flex pl-4 py-2 gap-4 w-full items-center [&>.url]:hover:opacity-50 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300"
    >
      <Favicon url={bookmark.url ?? ""} />
      <span>{bookmark.name}</span>
      <span className="url opacity-0 transition-opacity duration-300">
        {bookmark.url}
      </span>
    </Link>
  );
}
