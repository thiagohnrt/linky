import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { BookmarkProvider } from "@/providers/bookmarkProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookmarkProvider>
      <Header />
      <main className="h-[calc(100vh-55px)] flex">{children}</main>
      <Toaster />
    </BookmarkProvider>
  );
}
