import Link from "next/link";
import Favicon from "../Favicon";

interface BookmarkProps {
  url: string;
  name: string;
}

export function Bookmark({ url, name }: BookmarkProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="h-12 px-2 py-1 flex items-center bg-neutral-100 dark:bg-neutral-800"
    >
      <Favicon url={url} className="mr-2" />
      <span className="line-clamp-2">{name}</span>
    </Link>
  );
}
