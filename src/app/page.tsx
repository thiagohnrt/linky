import Icon from "@/components/header/Icon";
import ThemeIcon from "@/components/header/ThemeIcon";
import { FaGithub } from "react-icons/fa";
import { MdKeyboardCommandKey, MdOutlineSearch } from "react-icons/md";

export default function Home() {
  return (
    <>
      <header className="h-[55px] px-8 grid gap-2 grid-cols-3 items-center bg-neutral-200 dark:bg-neutral-950 transition-colors duration-300">
        <span className="text-xl pon select-none">Bookmark Manager</span>
        <div className="w-full p-2 gap-2 flex items-center cursor-pointer bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors duration-300">
          <MdOutlineSearch size={20} />
          <span className="flex-auto text-neutral-400">Search</span>
          <span className="flex items-center p-1 text-xs bg-neutral-200 dark:bg-neutral-950 transition-colors duration-300">
            <MdKeyboardCommandKey />K
          </span>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <ThemeIcon />
          <Icon>
            <FaGithub size={20} />
          </Icon>
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
