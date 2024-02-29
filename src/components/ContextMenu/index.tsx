import * as RCM from "@radix-ui/react-context-menu";
import { ReactNode } from "react";

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
    <RCM.Root>
      <RCM.Trigger asChild>{children}</RCM.Trigger>
      <RCM.Portal>
        <RCM.Content className="p-1 border bg-white border-neutral-300 shadow dark:bg-neutral-800 dark:border-neutral-500">
          {items.map((item, index) =>
            item.separator ? (
              <RCM.Separator
                key={index}
                className="h-px my-1 bg-neutral-300 dark:bg-neutral-500"
              />
            ) : (
              <RCM.Item
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
              </RCM.Item>
            )
          )}
        </RCM.Content>
      </RCM.Portal>
    </RCM.Root>
  );
}
