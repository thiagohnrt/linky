import { BookmarkClipboard } from "@/components/Bookmark/BookmarkClipboard";
import { BookmarkDelete } from "@/components/Bookmark/BookmarkDelete";
import { BookmarkDialog } from "@/components/Bookmark/BookmarkDialog";
import { Content } from "@/components/Content";
import LoadingContent from "@/components/Content/Loading";
import { Explorer } from "@/components/Explorer";
import LoadingExplorer from "@/components/Explorer/Loading";
import { FolderDelete } from "@/components/Folder/FolderDelete";
import { FolderDialog } from "@/components/Folder/FolderDialog";
import SearchDialog from "@/components/Header/SearchDialog";
import { Suspense } from "react";

export const runtime = "edge";

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
