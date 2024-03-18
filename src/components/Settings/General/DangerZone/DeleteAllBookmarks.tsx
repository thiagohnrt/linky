"use client";

import Dialog from "@/components/Dialog";
import { Button } from "@/components/Form/Button";
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

  const handleClose = () => {
    close();
  };

  const handleCancel = () => {
    close();
  };

  return (
    <div className="flex justify-between p-4">
      <div>
        <h3 className="font-semibold">Delete all bookmarks</h3>
        <span style={{ fontSize: ".9em" }}>
          Once you delete all bookmarks, there is no going back. Please be
          certain.
        </span>
      </div>
      <Button color="danger" variant="reversed" onClick={() => setOpen(true)}>
        Delete all bookmarks
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        title="Are you sure?"
        className="px-8 pt-4 pb-6 w-[450px] bg-neutral-100 dark:bg-neutral-950"
      >
        <p>
          This action cannot be undone. This will permanently delete all your
          bookmarks.
        </p>
        <div className="flex gap-4 mt-4">
          <Button color="danger" loading={isLoading} onClick={handleDelete}>
            Yes, delete
          </Button>
          <Button
            type="button"
            variant="outlined"
            disabled={isLoading}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
