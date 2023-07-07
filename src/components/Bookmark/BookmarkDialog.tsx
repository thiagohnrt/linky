"use client";

import { useContext, useState } from "react";
import Dialog from "../Dialog";
import { BookmarkForm } from "./BookmarkForm";
import { BookmarkContext } from "@/contexts/bookmarkContext";

export function BookmarkDialog() {
  const { isOpenFormBookmark, setIsOpenFormBookmark } =
    useContext(BookmarkContext);
  return (
    <Dialog
      open={isOpenFormBookmark}
      onClose={setIsOpenFormBookmark}
      className="px-8 pt-4 pb-6 w-[600px] bg-neutral-100 dark:bg-neutral-950"
      title="Bookmark"
    >
      <BookmarkForm onCancel={() => setIsOpenFormBookmark(false)} />
    </Dialog>
  );
}
