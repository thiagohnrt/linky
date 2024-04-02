"use client";

import Link from "next/link";
import Favicon from "../Favicon";
import { Bookmark } from "@/interfaces/Bookmark";
import ContextMenu, { ItemMenu } from "../ContextMenu";
import { useContext } from "react";
import { BookmarkContext } from "@/contexts/bookmarkContext";

interface BookmarkProps {
  bookmark: Bookmark;
}

export function Bookmark({ bookmark }: BookmarkProps) {
  const { setIsOpenFormBookmark, setBookmarkData, setIsOpenDeleteBookmark } =
    useContext(BookmarkContext);
  const items: ItemMenu[] = [
    {
      text: "Edit Bookmark",
      click: () => {
        setBookmarkData(bookmark);
        setIsOpenFormBookmark(true);
      },
    },
    {
      separator: true,
    },
    {
      text: "Delete Bookmark",
      className: "text-red-500 focus:text-red-500",
      click: () => {
        setBookmarkData(bookmark);
        setIsOpenDeleteBookmark(true);
      },
    },
  ];
  return (
    <ContextMenu items={items}>
      <Link
        href={bookmark.url ?? ""}
        target="_blank"
        className="h-12 px-2 py-1 flex items-center bg-neutral-100 dark:bg-neutral-800"
      >
        <Favicon url={bookmark.url ?? ""} className="mr-2" />
        <span className="line-clamp-2">{bookmark.name}</span>
      </Link>
    </ContextMenu>
  );
}
