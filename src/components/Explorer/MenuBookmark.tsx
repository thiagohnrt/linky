import { MdOutlineMoreHoriz } from "react-icons/md";
import DropdownMenu, { ItemMenu } from "../DropdownMenu";

export function MenuBookmark() {
  const items: ItemMenu[] = [
    {
      text: "Edit Bookmark",
      click: () => {},
    },
    {
      separator: true,
    },
    {
      text: "Delete Bookmark",
      className: "text-red-500",
      click: () => {},
    },
  ];
  return (
    <DropdownMenu items={items}>
      <button
        type="button"
        className="p-1 pr-2 bookmark-more opacity-0 transition-opacity duration-300"
      >
        <MdOutlineMoreHoriz size={16} />
      </button>
    </DropdownMenu>
  );
}
