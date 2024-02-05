import Icon from "@/components/Header/Icon";
import Search from "@/components/Header/Search";
import ThemeIcon from "@/components/Header/ThemeIcon";
import { Explorer } from "@/components/Explorer";
import { Settings2Icon } from "lucide-react";
import { FaBookmark, FaGithub } from "react-icons/fa";
import { Content } from "@/components/Content";
import { BookmarkDialog } from "@/components/Bookmark/BookmarkDialog";
import { FolderDialog } from "@/components/Folder/FolderDialog";
import { BookmarkDelete } from "@/components/Bookmark/BookmarkDelete";
import { FolderDelete } from "@/components/Folder/FolderDelete";
import { Bookmarks } from "@/interfaces/Bookmark";
import Link from "next/link";

async function getData(): Promise<Bookmarks[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/api`, {
      cache: "no-store",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
  return [];
}

export default async function Home() {
  const bookmarks = await getData();
  return (
    <>
      <header className="h-[55px] px-8 flex justify-between items-center bg-neutral-200 dark:bg-neutral-950 transition-colors duration-300">
        <div className="flex gap-2 items-center">
          <FaBookmark size={20} />
          <div className="select-none ml-2 flex">
            <span className="text-3xl">Linky</span>
            <span className="text-2xl self-end">.io</span>
            <span className="text-xs ml-4 self-center">
              Your <br /> Bookmark Manager
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <Search folders={bookmarks} />
          <div className="flex justify-end gap-2 items-center">
            <Icon title="Settings">
              <Settings2Icon size={20} />
            </Icon>
            <ThemeIcon />
            <div className="w-px h-6 bg-black dark:bg-white"></div>
            <Link
              href="https://github.com/thiagohbhonorato/bookmark-manager"
              target="_blank"
              tabIndex={-1}
            >
              <Icon title="View GitHub">
                <FaGithub size={20} />
              </Icon>
            </Link>
          </div>
        </div>
      </header>
      <main className="h-[calc(100vh-55px)] flex">
        <Explorer folders={bookmarks} />
        <Content folders={bookmarks} />
        <BookmarkDialog />
        <BookmarkDelete />
        <FolderDialog />
        <FolderDelete />
      </main>
    </>
  );
}
