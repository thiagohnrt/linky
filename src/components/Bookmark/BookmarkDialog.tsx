"use client";

import { useContext } from "react";
import Dialog from "../Dialog";
import { BookmarkForm } from "./BookmarkForm";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { useRouter } from "next/navigation";
import { Bookmark } from "@/interfaces/Bookmark";

export function BookmarkDialog() {
  const router = useRouter();
  const { isOpenFormBookmark, setIsOpenFormBookmark, setBookmarkData } =
    useContext(BookmarkContext);

  const handleSaved = () => {
    close();
    router.refresh();
  };

  const handleCancel = () => {
    close();
  };

  const close = () => {
    setIsOpenFormBookmark(false);
    setBookmarkData({} as Bookmark);
  };

  return (
    <Dialog
      open={isOpenFormBookmark}
      onClose={setIsOpenFormBookmark}
      className="px-8 pt-4 pb-6 w-[600px] bg-neutral-100 dark:bg-neutral-950"
      title="Bookmark"
    >
      <BookmarkForm onSaved={handleSaved} onCancel={handleCancel} />
    </Dialog>
  );
}
