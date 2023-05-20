"use client";

import { useState, ReactNode } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight, FolderIcon } from "lucide-react";
import { Bookmarks } from "@/interfaces/Bookmark";

interface FolderProps {
  title: string;
  children: ReactNode;
}

export function Folder({ title, children }: FolderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger className="flex gap-1 p-1 items-center w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300">
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        <span>{title}</span>
      </Collapsible.Trigger>
      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}
