import { MdOutlineMoreHoriz } from "react-icons/md";
import DropdownMenu, { ItemMenu } from "../ui/DropdownMenu";
import { useContext } from "react";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { Folder } from "@/interfaces/Folder";
import { Bookmark } from "@/interfaces/Bookmark";

interface MenuFolderProps {
  folder: Folder;
}

export function MenuFolder({ folder }: MenuFolderProps) {
  const {
    setIsOpenFormBookmark,
    setIsOpenFormFolder,
    setBookmarkData,
    setFolderData,
    setIsOpenDeleteFolder,
  } = useContext(BookmarkContext);
  const items: ItemMenu[] = [
    {
      text: "New Bookmark",
      keyboard: "⌘D",
      click: () => {
        setBookmarkData({ folderId: folder.id } as Bookmark);
        setIsOpenFormBookmark(true);
      },
    },
    {
      text: "Edit Folder",
      click: () => {
        setFolderData(folder);
        setIsOpenFormFolder(true);
      },
    },
    {
      separator: true,
    },
    {
      text: "Delete Folder",
      className: "text-red-500 focus:text-red-500",
      click: () => {
        setFolderData(folder);
        setIsOpenDeleteFolder(true);
      },
    },
  ];
  return (
    <DropdownMenu items={items}>
      <button
        type="button"
        className="p-1 pr-2 folder-more opacity-0 outline-none transition-opacity duration-300"
        tabIndex={-1}
      >
        <MdOutlineMoreHoriz size={16} />
      </button>
    </DropdownMenu>
  );
}
