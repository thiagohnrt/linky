"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import Dialog from "../Dialog";
import { useContext, useState } from "react";
import { Button } from "../Form/Button";
import { useRouter } from "next/navigation";
import { Folder } from "@/interfaces/Folder";

export function FolderDelete() {
  const router = useRouter();
  const {
    isOpenDeleteFolder,
    setIsOpenDeleteFolder,
    setFolderData,
    folderData,
  } = useContext(BookmarkContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);

    const { status } = await fetch(`/api/folder/${folderData.id}`, {
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
    setIsOpenDeleteFolder(false);
    setFolderData({} as Folder);
  };

  return (
    <Dialog
      open={isOpenDeleteFolder}
      onClose={setIsOpenDeleteFolder}
      className="px-8 pt-4 pb-6 w-[450px] bg-neutral-100 dark:bg-neutral-950"
      title="Are you sure?"
    >
      <p>
        This action cannot be undone. This will permanently delete your folder.
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
