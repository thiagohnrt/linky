import { MdOutlineMoreHoriz } from "react-icons/md";
import DropdownMenu, { ItemMenu } from "../DropdownMenu";
import { useContext } from "react";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { Bookmark } from "@/interfaces/Bookmark";

interface MenuBookmarkProps {
  bookmark: Bookmark;
}

export function MenuBookmark({ bookmark }: MenuBookmarkProps) {
  const { setIsOpenFormBookmark, setBookmarkData, setIsOpenDeleteBookmark } =
    useContext(BookmarkContext);

  const items: ItemMenu[] = [
    {
      text: "Edit Bookmark",
      click: () => {
        setBookmarkData(bookmark);
        setIsOpenFormBookmark(true);
      },
    },
    {
      separator: true,
    },
    {
      text: "Delete Bookmark",
      className: "text-red-500 focus:text-red-500",
      click: () => {
        setBookmarkData(bookmark);
        setIsOpenDeleteBookmark(true);
      },
    },
  ];
  return (
    <DropdownMenu items={items}>
      <button
        type="button"
        className="p-1 pr-2 bookmark-more opacity-0 outline-none transition-opacity duration-300"
        tabIndex={-1}
      >
        <MdOutlineMoreHoriz size={16} />
      </button>
    </DropdownMenu>
  );
}
