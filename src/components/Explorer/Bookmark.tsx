"use client";

import Link from "next/link";
import Favicon from "../Favicon";
import { MenuBookmark } from "./MenuBookmark";

interface BookmarkProps {
  url: string;
  name: string;
}

export function Bookmark({ url, name }: BookmarkProps) {
  return (
    <div className="flex justify-between pl-4 py-1 [&>.bookmark-more]:hover:opacity-100 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300">
      <Link href={url} target="_blank" className="flex gap-2 w-full">
        <Favicon url={url} />
        <span>{name}</span>
      </Link>
      <MenuBookmark />
    </div>
  );
}
