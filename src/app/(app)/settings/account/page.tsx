import { AccountLogOut } from "@/components/Settings/Account/LogOut";
import { SettingsPage } from "@/components/Settings/SettingsPage";
import { User } from "@/interfaces/User";
import { cookies } from "next/headers";

async function getMe(): Promise<User | any> {
  const response = await fetch(`${process.env.API_URL}/api/me`, {
    cache: "no-store",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else {
    return response.body;
  }
}

export default async function Account() {
  const user = await getMe();
  return (
    <SettingsPage title="Account">
      <div className="flex justify-between">
        <div>
          <p className="mb-1">You are logged in as:</p>
          <span className="border border-input px-2 rounded-sm bg-neutral-800">
            {user}
          </span>
        </div>
        <AccountLogOut />
      </div>
    </SettingsPage>
  );
}
