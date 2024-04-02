import { ReactNode } from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu as DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface ItemMenu {
  text?: string;
  keyboard?: ReactNode;
  className?: string;
  click?: () => void;
  separator?: boolean;
}

interface DropdownMenuProps {
  children: ReactNode;
  items: ItemMenu[];
}

export default function DropdownMenu({ children, items }: DropdownMenuProps) {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {items.map((item, index) =>
          item.separator ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownMenuItem
              key={index}
              className={cn("gap-4", item.className)}
              onSelect={(e) =>
                setTimeout(() => item.click && item.click(), 100)
              }
            >
              {item.text}
              <DropdownMenuShortcut>{item.keyboard}</DropdownMenuShortcut>
            </DropdownMenuItem>
          )
        )}
        {/* <RDDM.Arrow className="fill-neutral-300 dark:fill-neutral-500" /> */}
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
