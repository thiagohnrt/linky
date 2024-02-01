"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import Dialog from "../Dialog";
import { useContext, useState } from "react";
import { Button } from "../Form/Button";
import { useRouter } from "next/navigation";
import { Bookmark } from "@/interfaces/Bookmark";

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

    if (status === 200) {
      setIsOpenDeleteBookmark(false);
      router.refresh();
    }

    setIsLoading(false);
  };

  const handleCancel = () => {
    setIsOpenDeleteBookmark(false);
    setBookmarkData({} as Bookmark);
  };

  return (
    <Dialog
      open={isOpenDeleteBookmark}
      onClose={setIsOpenDeleteBookmark}
      className="px-8 pt-4 pb-6 w-[450px] bg-neutral-100 dark:bg-neutral-950"
      title="Are you sure?"
    >
      <p>
        This action cannot be undone. This will permanently delete your
        bookmark.
      </p>
      <div className="flex gap-4 mt-4">
        <Button loading={isLoading} onClick={handleDelete}>
          Yes, delete
        </Button>
        <Button type="button" variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </Dialog>
  );
}
