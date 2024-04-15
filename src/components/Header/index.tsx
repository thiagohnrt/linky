import Link from "next/link";
import { FaBookmark, FaGithub } from "react-icons/fa";
import Search from "./Search";
import Icon from "./Icon";
import { Settings2Icon } from "lucide-react";
import ThemeIcon from "./ThemeIcon";
import { RepositoryIcon } from "./RepositoryIcon";

export function Header() {
  return (
    <header className="h-[55px] px-8 flex justify-between items-center bg-neutral-200 dark:bg-neutral-950 transition-colors duration-300">
      <Link href="/" className="flex gap-2 items-center">
        <FaBookmark size={20} />
        <div className="select-none ml-2 flex">
          <span className="text-3xl">Linky</span>
          <span className="text-xs ml-4 self-center">
            Your <br /> Bookmark Manager
          </span>
        </div>
      </Link>
      <div className="flex gap-6">
        <Search />
        <div className="flex justify-end gap-2 items-center">
          <Link href="/settings">
            <Icon title="Settings">
              <Settings2Icon size={20} />
            </Icon>
          </Link>
          <ThemeIcon />
          <div className="w-px h-6 bg-black dark:bg-white"></div>
          <RepositoryIcon />
        </div>
      </div>
    </header>
  );
}
