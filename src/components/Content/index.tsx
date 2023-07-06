import { Bookmarks } from "@/interfaces/Bookmark";
import { Folder } from "./Folder";
import { Bookmark } from "./Bookmark";
import Image from "next/image";

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

export async function Content() {
  const folders = await getData();

  return (
    <div className="px-8 py-4 flex-auto overflow-auto dark:bg-neutral-900 transition-colors duration-300">
      {folders.length > 0 ? (
        folders.map((folder, index) => (
          <Folder title={folder.name} key={"folder_content_key_" + index}>
            <div className="grid 2xl:grid-cols-12 lg:grid-cols-6 md:grid-cols-4 gap-4 py-4">
              {folder.data.length > 0 ? (
                folder.data.map((bookmark, index) => (
                  <Bookmark
                    url={bookmark.url}
                    name={bookmark.name}
                    key={"bookmark_content_key_" + index}
                  />
                ))
              ) : (
                <div className="2xl:col-span-12 lg:col-span-6 md:col-span-4">
                  <div className="text-sm pb-2">
                    You have no bookmarks here yet.
                  </div>
                  <button className="my-2 py-1 px-12 bg-neutral-200 dark:bg-neutral-950 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-colors duration-300">
                    New Bookmark
                  </button>
                </div>
              )}
            </div>
          </Folder>
        ))
      ) : (
        <div className="flex flex-col items-center">
          <Image
            src="/empty.png"
            alt="Empty illustration"
            width={150}
            height={200}
            className="my-5"
          />
          <p>You have no bookmarks here yet. Add your first bookmark now!</p>
          <div className="flex gap-4 mt-3">
            <button className="my-2 py-1 px-12 bg-neutral-200 dark:bg-neutral-950 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-colors duration-300">
              New Bookmark
            </button>
            <button className="my-2 py-1 px-12 bg-neutral-200 dark:bg-neutral-950 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-colors duration-300">
              New Folder
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
