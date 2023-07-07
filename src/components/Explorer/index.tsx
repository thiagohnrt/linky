import { Bookmarks } from "@/interfaces/Bookmark";
import { Bookmark } from "./Bookmark";
import { Folder } from "./Folder";
import { MenuExplorer } from "../Menu/MenuExplorer";
import { BookmarkAction } from "../Bookmark/BookmarkAction";

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
    <div className="w-[250px] overflow-auto bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300">
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
                  <Bookmark
                    url={bookmark.url}
                    name={bookmark.name}
                    key={"link_key_" + index}
                  />
                ))}
              </div>
            ) : (
              <div className="p-4">
                <div className="text-sm pb-2">
                  You have no bookmarks here yet.
                </div>
                <BookmarkAction style="button" type="new" className="w-full" />
              </div>
            )}
          </Folder>
        ))
      ) : (
        <div className="p-4">
          <div className="text-sm pb-2">You have no bookmarks here yet.</div>
          <BookmarkAction style="button" type="new" className="w-full" />
          <button className="w-full mt-2 p-1 bg-neutral-200 dark:bg-neutral-950 hover:bg-neutral-300 dark:hover:bg-neutral-900 transition-colors duration-300">
            New Folder
          </button>
        </div>
      )}
    </div>
  );
}
