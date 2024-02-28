import Icon from "@/components/Header/Icon";
import Search from "@/components/Header/Search";
import ThemeIcon from "@/components/Header/ThemeIcon";
import { Settings2Icon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { FaBookmark, FaGithub } from "react-icons/fa";

export default function Loading() {
  const repeat = (count: number, reactNode: ReactNode) => {
    return ","
      .repeat(count - 1)
      .split(",")
      .map(() => reactNode);
  };

  return (
    <>
      <header className="h-[55px] px-8 flex justify-between items-center bg-neutral-200 dark:bg-neutral-950 transition-colors duration-300">
        <div className="flex gap-2 items-center">
          <FaBookmark size={20} />
          <div className="select-none ml-2 flex">
            <span className="text-3xl">Linky</span>
            <span className="text-2xl self-end">.io</span>
            <span className="text-xs ml-4 self-center">
              Your <br /> Bookmark Manager
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <Search folders={[]} />
          <div className="flex justify-end gap-2 items-center">
            <Icon title="Settings">
              <Settings2Icon size={20} />
            </Icon>
            <ThemeIcon />
            <div className="w-px h-6 bg-black dark:bg-white"></div>
            <Link
              href="https://github.com/thiagohbhonorato/bookmark-manager"
              target="_blank"
              tabIndex={-1}
            >
              <Icon title="View GitHub">
                <FaGithub size={20} />
              </Icon>
            </Link>
          </div>
        </div>
      </header>{" "}
      <main className="h-[calc(100vh-55px)] flex">
        <div className="w-[250px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300">
          <div className="p-4 flex flex-col items-start gap-2">
            <span className="skeleton">......... .........</span>
            {repeat(
              10,
              <>
                <span className="skeleton mt-2">
                  ............... ............... ...............
                </span>
                {repeat(
                  5,
                  <span className="skeleton">....... ....... .......</span>
                )}
              </>
            )}
          </div>
        </div>
        <div
          className={[
            "w-[calc(100%-250px)]",
            "px-8 py-4 overflow-hidden dark:bg-neutral-900 transition-colors duration-300",
          ].join(" ")}
        >
          <div className="flex flex-col items-start gap-8">
            {repeat(
              10,
              <div>
                <span className="skeleton">
                  ............... ............... ...............
                  ............... ...............
                </span>
                <div className="grid 2xl:grid-cols-12 lg:grid-cols-6 md:grid-cols-4 gap-4 py-4">
                  {repeat(
                    10,
                    <div className="skeleton p-3">
                      .......................................
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
