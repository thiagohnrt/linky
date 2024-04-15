import { AccountLogOut } from "@/components/Settings/Account/LogOut";
import { SettingsPage } from "@/components/Settings/SettingsPage";
import { getMe } from "@/services/dataService";

export const runtime = "edge";

export default async function Account() {
  const user = await getMe();
  return (
    <SettingsPage title="Account">
      <div className="flex justify-between">
        <div>
          <p className="mb-1">You are logged in as:</p>
          <span className="border border-input px-2 rounded-sm bg-neutral-800">
            {user.username}
          </span>
        </div>
        <AccountLogOut />
      </div>
    </SettingsPage>
  );
}
