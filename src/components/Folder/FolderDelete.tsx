"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Folder } from "@/interfaces/Folder";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

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
    <Dialog open={isOpenDeleteFolder} onOpenChange={setIsOpenDeleteFolder}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            folder.
          </DialogDescription>
        </DialogHeader>
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
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
