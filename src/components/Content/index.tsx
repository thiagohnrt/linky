import { Bookmarks } from "@/interfaces/Bookmark";
import { Folder } from "./Folder";
import { Bookmark } from "./Bookmark";
import Image from "next/image";
import { BookmarkAction } from "../Bookmark/BookmarkAction";
import { FolderAction } from "../Folder/FolderAction";
import * as dataService from "@/services/dataService";

export async function Content() {
  const folders = await dataService.getData();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const hasFolders = folders.length > 0;
  return (
    <div className={!hasFolders ? "flex items-center justify-center" : ""}>
      {hasFolders ? (
        folders.map((folder, index) => (
          <Folder folder={folder} key={"folder_content_key_" + index}>
            <div className="grid 2xl:grid-cols-12 lg:grid-cols-6 md:grid-cols-4 gap-4 py-4">
              {folder.data.length > 0 ? (
                <>
                  {folder.data.map((bookmark, index) => (
                    <Bookmark
                      bookmark={bookmark}
                      key={"bookmark_content_key_" + index}
                    />
                  ))}
                  <div className="flex">
                    <BookmarkAction folderId={folder.id} type="icon" />
                  </div>
                </>
              ) : (
                <div className="2xl:col-span-12 lg:col-span-6 md:col-span-4">
                  <div className="text-sm pb-2">
                    You have no bookmarks here yet.
                  </div>
                  <BookmarkAction folderId={folder.id} />
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
            <BookmarkAction />
            <FolderAction />
          </div>
        </div>
      )}
    </div>
  );
}
