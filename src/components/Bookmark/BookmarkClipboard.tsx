"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { Bookmark } from "@/interfaces/Bookmark";
import { useCallback, useContext, useEffect } from "react";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";

export function BookmarkClipboard() {
  const { setIsOpenFormBookmark, setBookmarkData, bookmarks } =
    useContext(BookmarkContext);
  const { toast } = useToast();

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

  const handleNewBookmark = useCallback(() => {
    navigator.clipboard.readText().then((clipText) => {
      setBookmarkData({ url: clipText } as Bookmark);
      setIsOpenFormBookmark(true);
    });
  }, [setBookmarkData, setIsOpenFormBookmark]);

  const clipboardRead = useCallback(() => {
    navigator.clipboard.readText().then((clipText) => {
      if (isURL(clipText) && !hasURL(clipText)) {
        toast({
          duration: 10000,
          title: "URL copied",
          description: "Want to create a new bookmark?",
          action: (
            <ToastAction altText="New Bookmark" onClick={handleNewBookmark}>
              New Bookmark
            </ToastAction>
          ),
        });
        // <ProgressBar value={progress} className="w-full h-1" />
      }
    });
  }, [handleNewBookmark, hasURL, isURL, toast]);

  useEffect(() => {
    window.removeEventListener("focus", clipboardRead);
    window.addEventListener("focus", clipboardRead);
  }, [clipboardRead]);

  return <></>;
}
