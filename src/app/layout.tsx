import { ThemeProvider } from "@/providers/themeProvider";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Linky | Your Bookmark Manager",
  description: "Bookmark Manager",
};

const inter = Inter({ subsets: ["latin"] });

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
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
