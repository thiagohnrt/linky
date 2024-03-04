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
import SearchDialog from "@/components/Header/SearchDialog";

export default function Home() {
  return (
    <>
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
      <SearchDialog />
    </>
  );
}
