"use client";

import { useContext } from "react";
import { BookmarkForm } from "./BookmarkForm";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { useRouter } from "next/navigation";
import { Bookmark } from "@/interfaces/Bookmark";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

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
      onOpenChange={(open) => setIsOpenFormBookmark(open)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bookmark</DialogTitle>
        </DialogHeader>
        <BookmarkForm onSaved={handleSaved} onCancel={handleCancel} />
      </DialogContent>
    </Dialog>
  );
}
