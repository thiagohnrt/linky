"use client";

import { SettingsIcon, UploadIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function Menubar() {
  return (
    <div>
      <ItemMenu
        href="/settings"
        text="General"
        icon={<SettingsIcon size={18} />}
      />
      <Separator label="Advanced" />
      <ItemMenu
        href="/settings/import"
        text="Import Bookmark"
        icon={<UploadIcon size={18} />}
      />
    </div>
  );
}

function ItemMenu({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: ReactNode;
}) {
  const active = href === usePathname();
  return (
    <div className="flex gap-1">
      <div className="flex py-1">
        <div
          className={[
            "w-1 rounded-md",
            active ? "bg-black dark:bg-white" : "",
          ].join(" ")}
        ></div>
      </div>
      <Link
        href={href}
        className={[
          "flex items-center gap-3 flex-auto px-4 py-2 rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-300",
          active ? "bg-neutral-200 dark:bg-neutral-700" : "",
        ].join(" ")}
      >
        <span className="opacity-75">{icon}</span>
        {text}
      </Link>
    </div>
  );
}

function Separator({ label }: { label: string }) {
  return (
    <div className="border-t border-gray-500 pt-3 pl-6 my-3 text-sm">
      {label}
    </div>
  );
}
