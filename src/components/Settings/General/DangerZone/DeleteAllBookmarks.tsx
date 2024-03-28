"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function DeleteAllBookmarks() {
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);

    const { status } = await fetch(`/api/bookmark/all`, {
      method: "delete",
    });

    if (status === 204) {
      close();
    }

    setIsLoading(false);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <h3 className="font-semibold">Delete all bookmarks</h3>
        <span style={{ fontSize: ".9em" }}>
          Once you delete all bookmarks, there is no going back. Please be
          certain.
        </span>
      </div>
      <Dialog open={isOpen} onOpenChange={(open) => setOpen(open)}>
        <DialogTrigger asChild>
          <Button variant="destructive" onClick={() => setOpen(true)}>
            Delete all bookmarks
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete all
              your bookmarks.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="destructive"
              disabled={isLoading}
              onClick={handleDelete}
            >
              <ReloadIcon
                className={cn(
                  "mr-2 h-4 w-4 animate-spin",
                  isLoading ? "" : "hidden"
                )}
              />
              Yes, delete
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isLoading}>
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
