import { ReactNode } from "react";
import * as RDDM from "@radix-ui/react-dropdown-menu";

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
    <RDDM.Root>
      <RDDM.Trigger asChild>{children}</RDDM.Trigger>
      <RDDM.Portal>
        <RDDM.Content
          align="start"
          className="p-1 border bg-white border-neutral-300 shadow dark:bg-neutral-800 dark:border-neutral-500"
        >
          {items.map((item, index) =>
            item.separator ? (
              <RDDM.Separator
                key={index}
                className="h-px my-1 bg-neutral-300 dark:bg-neutral-500"
              />
            ) : (
              <RDDM.Item
                key={index}
                className={
                  "flex justify-between py-1 px-2 gap-8 hover:outline-none cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-300 " +
                  item.className
                }
                onSelect={(e) =>
                  setTimeout(() => item.click && item.click(), 100)
                }
              >
                {item.text}
                <div className="flex items-center text-sm">{item.keyboard}</div>
              </RDDM.Item>
            )
          )}
          <RDDM.Arrow className="fill-neutral-300 dark:fill-neutral-500" />
        </RDDM.Content>
      </RDDM.Portal>
    </RDDM.Root>
  );
}
