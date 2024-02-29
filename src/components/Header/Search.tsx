import { Bookmarks } from "@/interfaces/Bookmark";
import * as dataService from "@/services/dataService";
import SearchBox from "./SearchBox";

export default async function Search() {
  const folders = await dataService.getData();
  return <SearchBox folders={folders} />;
}
