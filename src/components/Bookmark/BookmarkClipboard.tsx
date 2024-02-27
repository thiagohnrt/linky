"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import Dialog from "../Dialog";
import { Button } from "../Form/Button";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { Bookmark } from "@/interfaces/Bookmark";
import { ProgressBar } from "../ProgressBar";

export function BookmarkClipboard() {
  const { setIsOpenFormBookmark, setBookmarkData, bookmarks } =
    useContext(BookmarkContext);
  const [isOpen, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const isURL = useCallback((text: string): boolean => {
    try {
      return new URL(text).protocol.startsWith("http");
    } catch (_) {
      return false;
    }
  }, []);

  const hasURL = useCallback(
    (url: string): boolean => {
      let found = bookmarks.some(({ data }) =>
        data.some((bookmark) => bookmark.url === url)
      );
      if (!found) {
        const urls: string[] = JSON.parse(
          sessionStorage.getItem("clipboardUrl") ?? "[]"
        );
        found = urls.some((_url) => _url === url);
        if (!found) {
          urls.push(url);
          sessionStorage.setItem(
            "clipboardUrl",
            JSON.stringify(Array.from(new Set(urls)))
          );
        }
      }
      return found;
    },
    [bookmarks]
  );

  const clipboardRead = useCallback(() => {
    navigator.clipboard.readText().then((clipText) => {
      if (isURL(clipText) && !hasURL(clipText)) {
        setOpen(true);
      }
    });
  }, [hasURL, isURL]);

  useEffect(() => {
    window.removeEventListener("focus", clipboardRead);
    window.addEventListener("focus", clipboardRead);
  }, [clipboardRead]);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        close();
      }, 200);
      return () => clearTimeout(timeout);
    } else if (isOpen) {
      const timeout = setTimeout(() => {
        setProgress(progress + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, progress]);

  const close = () => {
    setOpen(false);
    setProgress(0);
  };

  const handleNewBookmark = () => {
    close();
    navigator.clipboard.readText().then((clipText) => {
      setBookmarkData({ url: clipText } as Bookmark);
      setIsOpenFormBookmark(true);
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={setOpen}
      className="bottom-8 right-8 bg-neutral-200 dark:bg-neutral-950"
      position="none"
      backdrop={false}
    >
      <div className="flex gap-8 items-center px-6 py-3">
        <div className="message">
          <div>URL copied</div>
          <div>Want to create a new bookmark?</div>
        </div>
        <div className="action">
          <Button onClick={handleNewBookmark}>New Bookmark</Button>
        </div>
      </div>
      <ProgressBar value={progress} className="w-full h-1" />
    </Dialog>
  );
}
