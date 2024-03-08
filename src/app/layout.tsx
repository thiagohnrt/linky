import { Providers } from "@/providers/providers";
import "./globals.css";
import { Inter } from "next/font/google";
import { FaBookmark, FaGithub } from "react-icons/fa";
import Search from "@/components/Header/Search";
import Icon from "@/components/Header/Icon";
import { Settings2Icon } from "lucide-react";
import ThemeIcon from "@/components/Header/ThemeIcon";
import Link from "next/link";

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
          <header className="h-[55px] px-8 flex justify-between items-center bg-neutral-200 dark:bg-neutral-950 transition-colors duration-300">
            <div className="flex gap-2 items-center">
              <FaBookmark size={20} />
              <div className="select-none ml-2 flex">
                <span className="text-3xl">Linky</span>
                <span className="text-2xl self-end">.io</span>
                <span className="text-xs ml-4 self-center">
                  Your <br /> Bookmark Manager
                </span>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-64 bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors duration-300">
                <Search />
              </div>
              <div className="flex justify-end gap-2 items-center">
                <Icon title="Settings">
                  <Settings2Icon size={20} />
                </Icon>
                <ThemeIcon />
                <div className="w-px h-6 bg-black dark:bg-white"></div>
                <Link
                  href="https://github.com/thiagohbhonorato/linky"
                  target="_blank"
                  tabIndex={-1}
                >
                  <Icon title="View GitHub">
                    <FaGithub size={20} />
                  </Icon>
                </Link>
              </div>
            </div>
          </header>
          <main className="h-[calc(100vh-55px)] flex">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
