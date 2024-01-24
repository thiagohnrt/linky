import Link from "next/link";
import Favicon from "../Favicon";
import { Bookmark } from "@/interfaces/Bookmark";

interface BookmarkProps {
  bookmark: Bookmark;
}

export function Bookmark({ bookmark }: BookmarkProps) {
  return (
    <Link
      href={bookmark.url ?? ""}
      target="_blank"
      className="h-12 px-2 py-1 flex items-center bg-neutral-100 dark:bg-neutral-800"
    >
      <Favicon url={bookmark.url ?? ""} className="mr-2" />
      <span className="line-clamp-2">{bookmark.name}</span>
    </Link>
  );
}
