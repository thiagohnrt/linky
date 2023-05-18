"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import * as RD from "@radix-ui/react-dialog";

interface DialogProps {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>> | (() => void);
  title?: string;
  className?: string;
  children?: ReactNode;
}

export default function Dialog({
  open = false,
  onClose,
  title,
  className,
  children,
}: DialogProps) {
  return (
    <RD.Root open={open} onOpenChange={() => onClose(false)}>
      <RD.Portal>
        <RD.Overlay className="fixed inset-0 bg-zinc-700/50" />
        <RD.Content
          className={
            "fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 " +
            className
          }
        >
          <RD.Title>{title}</RD.Title>
          {children}
        </RD.Content>
      </RD.Portal>
    </RD.Root>
  );
}
