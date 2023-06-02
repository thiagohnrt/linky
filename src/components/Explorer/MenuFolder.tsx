import { MdOutlineMoreHoriz } from "react-icons/md";
import DropdownMenu, { ItemMenu } from "../DropdownMenu";

export function MenuFolder() {
  const items: ItemMenu[] = [
    {
      text: "New Bookmark",
      keyboard: "⌘B",
      click: () => {},
    },
    {
      text: "Edit Folder",
      click: () => {},
    },
    {
      separator: true,
    },
    {
      text: "Delete Folder",
      className: "text-red-500",
      click: () => {},
    },
  ];
  return (
    <DropdownMenu items={items}>
      <button
        type="button"
        className="p-1 pr-2 folder-more opacity-0 transition-opacity duration-300"
      >
        <MdOutlineMoreHoriz size={16} />
      </button>
    </DropdownMenu>
  );
}
