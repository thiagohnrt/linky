import { Bookmarks } from "@/interfaces/Bookmark";
import * as dataService from "@/services/dataService";
import SearchBox from "./SearchBox";
interface SearchProps {
  folders: Bookmarks[];
}

export default async function Search() {
  const folders = await dataService.getData();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <SearchBox folders={folders} />;
}
