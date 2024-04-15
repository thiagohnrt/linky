"use client";

import { AccountLogOut } from "@/components/Settings/Account/LogOut";
import { SettingsPage } from "@/components/Settings/SettingsPage";
import { User } from "@/interfaces/User";
import { useEffect, useState } from "react";

export default function Account() {
  const [user, setUser] = useState<User>();

  const getMe = async () => {
    const response = await fetch(`/api/me`, {
      cache: "no-store",
    });
    setUser(await response.json());
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <SettingsPage title="Account">
      <div className="flex justify-between">
        <div className={user?.username ? "" : "skeleton"}>
          <p className="mb-1">You are logged in as:</p>
          <span className="border border-input px-2 rounded-sm bg-neutral-200 dark:bg-neutral-800">
            {user?.username}
          </span>
        </div>
        <AccountLogOut />
      </div>
    </SettingsPage>
  );
}
