import { Bookmarks } from "@/interfaces/Bookmark";
import { Folder } from "./Folder";
import Favicon from "../Favicon";
import Link from "next/link";
import { FcOpenedFolder } from "react-icons/fc";
import { MenuExplorer } from "./MenuExplorer";

async function getData(): Promise<Bookmarks[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/api`, {
      cache: "no-store",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
  return [];
}

export async function Explorer() {
  const folders = await getData();

  return (
    <div className="w-[250px] bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300">
      <div className="flex justify-between items-center py-2 pr-3 ml-6 uppercase text-sm">
        Explorer
        <MenuExplorer />
      </div>
      {folders.length > 0 ? (
        folders.map((folder, index) => (
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
              <div className="p-4">
                <div className="text-sm pb-2">
                  You have no bookmarks here yet.
                </div>
                <button className="w-full my-2 p-1 bg-neutral-950 hover:bg-neutral-900 text-white transition-colors duration-300">
                  New Bookmark
                </button>
              </div>
            )}
          </Folder>
        ))
      ) : (
        <div className="p-4">
          <div className="text-sm pb-2">You have no bookmarks here yet.</div>
          <button className="w-full mt-2 p-1 bg-neutral-950 hover:bg-neutral-900 text-white transition-colors duration-300">
            New Bookmark
          </button>
          <button className="w-full mt-2 p-1 bg-neutral-950 hover:bg-neutral-900 text-white transition-colors duration-300">
            New Folder
          </button>
        </div>
      )}
    </div>
  );
}
