import { ReactNode } from "react";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenu as ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { cn } from "@/lib/utils";

export interface ItemMenu {
  text?: string;
  keyboard?: ReactNode;
  className?: string;
  click?: () => void;
  separator?: boolean;
}

interface ContextMenuProps {
  children: ReactNode;
  items: ItemMenu[];
}

export default function ContextMenu({ children, items }: ContextMenuProps) {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        {items.map((item, index) =>
          item.separator ? (
            <ContextMenuSeparator key={index} />
          ) : (
            <ContextMenuItem
              key={index}
              className={cn("gap-4", item.className)}
              onSelect={(e) =>
                setTimeout(() => item.click && item.click(), 100)
              }
            >
              {item.text}
              <ContextMenuShortcut>{item.keyboard}</ContextMenuShortcut>
            </ContextMenuItem>
          )
        )}
      </ContextMenuContent>
    </ContextMenuRoot>
  );
}
