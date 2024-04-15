import { DeleteAllBookmarks } from "@/components/Settings/General/DangerZone/DeleteAllBookmarks";
import { SettingsPage } from "@/components/Settings/SettingsPage";
import { SettingsSection } from "@/components/Settings/SettingsSection";

export default function Settings() {
  return (
    <SettingsPage title="General">
      <SettingsSection title="Danger Zone" separator={false}>
        <div className="border border-red-800 rounded-md">
          <DeleteAllBookmarks />
        </div>
      </SettingsSection>
    </SettingsPage>
  );
}
