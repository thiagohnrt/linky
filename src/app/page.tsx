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
import Link from "next/link";
import { BookmarkClipboard } from "@/components/Bookmark/BookmarkClipboard";
import { Suspense } from "react";
import LoadingExplorer from "@/components/Explorer/Loading";
import LoadingContent from "@/components/Content/Loading";

export default function Home() {
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
          <div className="w-64 bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors duration-300">
            <Suspense
              fallback={<div className="skeleton h-full">Loading...</div>}
            >
              {/* @ts-expect-error Server Component */}
              <Search />
            </Suspense>
          </div>
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
        <div className="w-[250px] overflow-auto bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300">
          <Suspense fallback={<LoadingExplorer />}>
            {/* @ts-expect-error Server Component */}
            <Explorer />
          </Suspense>
        </div>
        <div className="w-[calc(100%-250px)] flex flex-col px-8 py-4 overflow-auto dark:bg-neutral-900 transition-colors duration-300">
          <Suspense fallback={<LoadingContent />}>
            {/* @ts-expect-error Server Component */}
            <Content />
          </Suspense>
        </div>
        <BookmarkDialog />
        <BookmarkDelete />
        <BookmarkClipboard />
        <FolderDialog />
        <FolderDelete />
      </main>
    </>
  );
}
