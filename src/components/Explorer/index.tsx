import { Bookmarks } from "@/interfaces/Bookmark";
import { Bookmark } from "./Bookmark";
import { Folder } from "./Folder";
import { MenuExplorer } from "../Menu/MenuExplorer";
import { BookmarkAction } from "../Bookmark/BookmarkAction";
import { FolderAction } from "../Folder/FolderAction";
import * as dataService from "@/services/dataService";
import { resolve } from "path";

export async function Explorer() {
  const folders = await dataService.getData();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <div className="flex justify-between items-center py-2 pr-3 ml-6 uppercase text-sm">
        Explorer
        <MenuExplorer />
      </div>
      {folders.length > 0 ? (
        folders.map((folder, index) => (
          <Folder folder={folder} key={"folder_key_" + index}>
            {folder.data.length > 0 ? (
              <div className="flex flex-col py-1">
                {folder.data.map((bookmark, index) => (
                  <Bookmark bookmark={bookmark} key={"link_key_" + index} />
                ))}
              </div>
            ) : (
              <div className="p-4">
                <div className="text-sm pb-2">
                  You have no bookmarks here yet.
                </div>
                <BookmarkAction folderId={folder.id} className="w-full" />
              </div>
            )}
          </Folder>
        ))
      ) : (
        <div className="p-4">
          <div className="text-sm pb-2">You have no bookmarks here yet.</div>
          <BookmarkAction className="w-full" />
          <FolderAction className="w-full mt-2 p-1" />
        </div>
      )}
    </>
  );
}
