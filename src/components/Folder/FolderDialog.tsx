"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import Dialog from "../Dialog";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { FolderForm } from "./FolderForm";

export function FolderDialog() {
  const router = useRouter();
  const { isOpenFormFolder, setIsOpenFormFolder } = useContext(BookmarkContext);

  const handleSaved = () => {
    setIsOpenFormFolder(false);
    router.refresh();
  };

  const handleCancel = () => {
    setIsOpenFormFolder(false);
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
