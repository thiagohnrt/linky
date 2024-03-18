"use client";

import { ChangeEvent, ReactNode, useState } from "react";
import { Button } from "../Form/Button";

interface ImportBookmarkProps {
  title: string;
  children: ReactNode;
  onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
  onImport: () => Promise<void>;
  status: "success" | "loading" | "error" | null;
  acceptFile: string;
}

export function ImportBookmark({
  title,
  children,
  onChangeFile,
  onImport,
  status,
  acceptFile,
}: ImportBookmarkProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeFile(e);
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="p-4 rounded-md border border-neutral-400">
      <h2 className="text-xl">{title}</h2>
      <p className="my-8">{children}</p>
      <input
        type="file"
        name="import"
        onChange={handleChangeFile}
        accept={acceptFile}
        className="w-full p-2 border-2 border-dashed border-neutral-400 cursor-pointer"
      />
      <div className="mt-8">
        <Button
          color={
            status === "success"
              ? "success"
              : status === "error"
              ? "danger"
              : "primary"
          }
          className="rounded-md "
          onClick={onImport}
          disabled={!file}
          loading={status === "loading"}
        >
          {status === "success"
            ? "Success"
            : status === "error"
            ? "Error. Try again."
            : "Import"}
        </Button>
      </div>
    </div>
  );
}
