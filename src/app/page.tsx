import Icon from "@/components/Header/Icon";
import ThemeIcon from "@/components/Header/ThemeIcon";
import { Settings2Icon } from "lucide-react";
import { FaGithub, FaBookmark } from "react-icons/fa";
import { MdKeyboardCommandKey, MdOutlineSearch } from "react-icons/md";

export default function Home() {
  return (
    <>
      <header className="h-[55px] px-8 flex justify-between items-center bg-neutral-200 dark:bg-neutral-950 transition-colors duration-300">
        <div className="flex items-center">
          <FaBookmark size={20} />
          <span className="pon select-none ml-2 text-xl">Bookmark Manager</span>
        </div>
        <div className="flex gap-6">
          <div className="w-64 p-2 gap-2 flex items-center cursor-pointer bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors duration-300">
            <MdOutlineSearch size={20} />
            <span className="flex-auto text-neutral-400">Search</span>
            <span className="flex items-center p-1 text-xs bg-neutral-200 dark:bg-neutral-950 transition-colors duration-300">
              <MdKeyboardCommandKey />K
            </span>
          </div>
          <div className="flex justify-end gap-2 items-center">
            <Icon>
              <Settings2Icon size={20} />
            </Icon>
            <ThemeIcon />
            <div className="w-px h-6 bg-black dark:bg-white"></div>
            <Icon>
              <FaGithub size={20} />
            </Icon>
          </div>
        </div>
      </header>
      <main className="h-[calc(100vh-55px)] flex">
        <div className="w-[250px] px-8 py-4 border-r dark:border-none dark:bg-neutral-800 transition-colors duration-300">
          Side Bar
        </div>
        <div className="px-8 py-4 flex-auto dark:bg-neutral-900 transition-colors duration-300">
          Bookmark
        </div>
      </main>
    </>
  );
}
