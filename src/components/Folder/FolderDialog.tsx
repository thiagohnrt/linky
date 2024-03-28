"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { FolderForm } from "./FolderForm";
import { Folder } from "@/interfaces/Folder";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export function FolderDialog() {
  const router = useRouter();
  const { isOpenFormFolder, setIsOpenFormFolder, setFolderData } =
    useContext(BookmarkContext);

  const handleSaved = () => {
    close();
    router.refresh();
  };

  const handleCancel = () => {
    close();
  };

  const close = () => {
    setIsOpenFormFolder(false);
    setFolderData({} as Folder);
  };

  return (
    <Dialog open={isOpenFormFolder} onOpenChange={setIsOpenFormFolder}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Folder</DialogTitle>
        </DialogHeader>
        <FolderForm onSaved={handleSaved} onCancel={handleCancel} />
      </DialogContent>
    </Dialog>
  );
}
