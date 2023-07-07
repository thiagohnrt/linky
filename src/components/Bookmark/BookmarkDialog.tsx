"use client";

import { useContext } from "react";
import Dialog from "../Dialog";
import { BookmarkForm } from "./BookmarkForm";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { useRouter } from "next/navigation";

export function BookmarkDialog() {
  const { isOpenFormBookmark, setIsOpenFormBookmark } =
    useContext(BookmarkContext);
  const router = useRouter();

  const handleSaved = () => {
    setIsOpenFormBookmark(false);
    router.refresh();
  };

  return (
    <Dialog
      open={isOpenFormBookmark}
      onClose={setIsOpenFormBookmark}
      className="px-8 pt-4 pb-6 w-[600px] bg-neutral-100 dark:bg-neutral-950"
      title="Bookmark"
    >
      <BookmarkForm
        onSaved={handleSaved}
        onCancel={() => setIsOpenFormBookmark(false)}
      />
    </Dialog>
  );
}
