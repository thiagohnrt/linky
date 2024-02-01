"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { Folder } from "@/interfaces/Folder";
import { useContext } from "react";

interface FolderActionProps {
  folderId?: string;
  className?: string;
}

export function FolderAction({
  className = "",
  folderId = "",
}: FolderActionProps) {
  const { setIsOpenFormFolder, setFolderData } = useContext(BookmarkContext);

  const handleOpenFormFolder = () => {
    setFolderData({} as Folder);
    setIsOpenFormFolder(true);
  };

  return (
    <button
      className={
        className +
        " py-1 px-12 bg-neutral-200 dark:bg-neutral-950 hover:bg-neutral-300 dark:hover:bg-black transition-colors duration-300"
      }
      onClick={handleOpenFormFolder}
    >
      New Folder
    </button>
  );
}
