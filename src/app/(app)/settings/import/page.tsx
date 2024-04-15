import { ImportBookmarkLegacy } from "@/components/Settings/ImportBookmarkLegacy";
import { SettingsPage } from "@/components/Settings/SettingsPage";

export default function Import() {
  return (
    <SettingsPage title="Import Bookmark">
      <div className="flex items-start gap-4">
        <ImportBookmarkLegacy />
      </div>
    </SettingsPage>
  );
}
