"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Bookmark } from "@/interfaces/Bookmark";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export function BookmarkDelete() {
  const router = useRouter();
  const {
    isOpenDeleteBookmark,
    setIsOpenDeleteBookmark,
    setBookmarkData,
    bookmarkData,
  } = useContext(BookmarkContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);

    const { status } = await fetch(`/api/bookmark/${bookmarkData.id}`, {
      method: "delete",
    });

    if (status === 204) {
      close();
      router.refresh();
    }

    setIsLoading(false);
  };

  const handleCancel = () => {
    close();
  };

  const close = () => {
    setIsOpenDeleteBookmark(false);
    setBookmarkData({} as Bookmark);
  };

  return (
    <Dialog open={isOpenDeleteBookmark} onOpenChange={setIsOpenDeleteBookmark}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <p>
          This action cannot be undone. This will permanently delete your
          bookmark.
        </p>
        <DialogFooter>
          <Button
            variant="destructive"
            disabled={isLoading}
            onClick={handleDelete}
          >
            <ReloadIcon
              className={cn(
                "mr-2 h-4 w-4 animate-spin",
                isLoading ? "" : "hidden"
              )}
            />
            Yes, delete
          </Button>
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
