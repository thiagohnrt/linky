import { Bookmarks } from "@/interfaces/Bookmark";
import { Folder } from "./Folder";
import Favicon from "../Favicon";
import Link from "next/link";
import { FcOpenedFolder } from "react-icons/fc";
import { MenuExplorer } from "./MenuExplorer";

export async function Explorer() {
  const response = await fetch(`${process.env.API_URL}/api`, {
    cache: "no-store",
  });
  const folders: Bookmarks[] = await response.json();

  return (
    <div className="w-[250px] border-r dark:border-none dark:bg-neutral-800 transition-colors duration-300">
      <div className="flex justify-between items-center py-2 pr-3 ml-6 uppercase text-sm">
        Explorer
        <MenuExplorer />
      </div>
      {folders.map((folder, index) => (
        <Folder title={folder.name} key={"folder_key_" + index}>
          {folder.data.length > 0 ? (
            <div className="flex flex-col py-1">
              {folder.data.map((bookmark, index) => (
                <Link
                  href={bookmark.url}
                  target="_blank"
                  className="flex gap-2 pl-4 py-1 items-center w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300"
                  key={"link_key_" + index}
                >
                  <Favicon url={bookmark.url} />
                  <span>{bookmark.name}</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex justify-center w-full py-2">
              <div className="flex flex-col items-center justify-center p-5 w-[175px] h-[175px] rounded-full cursor-pointer text-center dark:bg-neutral-900 dark:hover:bg-neutral-950 transition-colors duration-300">
                <FcOpenedFolder size={48} />
                <span className="text-sm">Click here to add a bookmark</span>
              </div>
            </div>
          )}
        </Folder>
      ))}
    </div>
  );
}
