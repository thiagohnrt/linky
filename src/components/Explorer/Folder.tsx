"use client";

import { useState, ReactNode } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight, FolderIcon } from "lucide-react";
import { MenuFolder } from "../Menu/MenuFolder";

interface FolderProps {
  folderKey: string;
  title: string;
  children: ReactNode;
}

export function Folder({ folderKey, title, children }: FolderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex justify-between [&>.folder-more]:hover:opacity-100 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300">
        <Collapsible.Trigger className="flex gap-1 p-1 items-center w-full cursor-pointer">
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          <span className="flex-1 text-left">{title}</span>
        </Collapsible.Trigger>
        <MenuFolder folderKey={folderKey} />
      </div>
      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}
