import { ImportBookmarkLegacy } from "@/components/Settings/ImportBookmarkLegacy";

export default function Import() {
  return (
    <div className="px-8 pt-8">
      <h1 className="text-2xl mb-8">Import Bookmark</h1>
      <div className="flex items-start gap-4">
        <ImportBookmarkLegacy />
      </div>
    </div>
  );
}
