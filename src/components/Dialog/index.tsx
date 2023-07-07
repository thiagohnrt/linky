"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import * as RD from "@radix-ui/react-dialog";
import { MdClose } from "react-icons/md";

interface DialogProps {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>> | (() => void);
  title?: string;
  className?: string;
  children?: ReactNode;
  closeIcon?: boolean;
}

export default function Dialog({
  open = false,
  onClose,
  title,
  className,
  children,
  closeIcon = false,
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
          {title ? (
            <RD.Title className="text-2xl pb-5">{title}</RD.Title>
          ) : (
            <></>
          )}
          {children}
          {closeIcon ? (
            <RD.Close asChild>
              <button aria-label="Close">
                <MdClose />
              </button>
            </RD.Close>
          ) : (
            <></>
          )}
        </RD.Content>
      </RD.Portal>
    </RD.Root>
  );
}
