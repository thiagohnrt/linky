"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { ImportBookmark } from "./ImportBookmark";

export function ImportBookmarkLegacy() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"success" | "loading" | "error" | null>(
    null
  );

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleImport = async () => {
    if (file) {
      setStatus("loading");
      const response = await fetch("/api/import/legacy", {
        method: "post",
        body: file,
        headers: {
          "content-type": file.type,
          "content-length": `${file.size}`,
        },
      });
      if (response.status === 201) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <ImportBookmark
      title="Legacy"
      status={status}
      acceptFile=".home"
      onChangeFile={handleChangeFile}
      onImport={handleImport}
    >
      Download your bookmarks from the{" "}
      <Link
        href="https://thiagohbhonorato.github.io/start-app-js/"
        className="text-blue-500 underline"
        target="_blank"
      >
        legacy app
      </Link>
      .
    </ImportBookmark>
  );
}
