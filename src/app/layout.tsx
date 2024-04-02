import { Header } from "@/components/Header";
import { Providers } from "@/providers/providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linky | Your Bookmark Manager",
  description: "Bookmark Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          inter.className + "text-black dark:text-white overflow-hidden"
        }
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          <main className="h-[calc(100vh-55px)] flex">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
