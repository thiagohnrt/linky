"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import Dialog from "../Dialog";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { FolderForm } from "./FolderForm";
import { Folder } from "@/interfaces/Folder";

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
    <Dialog
      open={isOpenFormFolder}
      onClose={setIsOpenFormFolder}
      className="px-8 pt-4 pb-6 w-[600px] bg-neutral-100 dark:bg-neutral-950"
      title="Folder"
    >
      <FolderForm onSaved={handleSaved} onCancel={handleCancel} />
    </Dialog>
  );
}
