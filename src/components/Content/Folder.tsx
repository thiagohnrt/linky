"use client";

import { ReactNode } from "react";
import { MenuFolder } from "../Menu/MenuFolder";

interface FolderProps {
  title: string;
  children: ReactNode;
}

export function Folder({ title, children }: FolderProps) {
  return (
    <div>
      <div className="[&>.folder-more]:hover:opacity-100">
        <span className="mr-2">{title}</span>
        <MenuFolder />
      </div>
      <div>{children}</div>
    </div>
  );
}
