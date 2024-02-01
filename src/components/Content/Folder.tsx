"use client";

import { ReactNode } from "react";
import { MenuFolder } from "../Menu/MenuFolder";
import { Folder } from "@/interfaces/Folder";

interface FolderProps {
  folder: Folder;
  children: ReactNode;
}

export function Folder({ folder, children }: FolderProps) {
  return (
    <div>
      <div className="[&>.folder-more]:hover:opacity-100">
        <span className="mr-2">{folder.name}</span>
        <MenuFolder folder={folder} />
      </div>
      <div>{children}</div>
    </div>
  );
}
