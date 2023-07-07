"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { BookmarkProvider } from "./bookmarkProvider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class">
      <BookmarkProvider>{children}</BookmarkProvider>
    </ThemeProvider>
  );
}
