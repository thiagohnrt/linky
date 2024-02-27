"use client";

import { Dispatch, ReactNode, SetStateAction, useCallback } from "react";
import * as RD from "@radix-ui/react-dialog";
import { MdClose } from "react-icons/md";

type Position = "none" | "center" | "top";

interface DialogProps {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>> | (() => void);
  title?: string;
  className?: string;
  children?: ReactNode;
  closeIcon?: boolean;
  position?: Position;
  backdrop?: boolean;
}

export default function Dialog({
  open = false,
  onClose,
  title,
  className,
  children,
  closeIcon = false,
  position = "center",
  backdrop = true,
}: DialogProps) {
  const positionClass = useCallback((pos: Position): string => {
    switch (pos) {
      case "center":
        return "top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ";
      case "top":
        return "top-20 left-2/4 -translate-x-2/4 ";
      default:
        return "";
    }
  }, []);

  return (
    <RD.Root open={open} onOpenChange={() => onClose(false)}>
      <RD.Portal>
        {backdrop ? (
          <RD.Overlay className="fixed inset-0 bg-zinc-700/50" />
        ) : (
          <></>
        )}
        <RD.Content
          className={["fixed", positionClass(position), className].join(" ")}
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
