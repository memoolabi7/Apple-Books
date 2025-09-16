import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { DefaultHeader, DefaultFooter } from "@/components/main";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <DefaultHeader />
        <main className="dark:bg-gray-900">
          {children}
        </main>
        <DefaultFooter />
      </body>
    </html>
  );
}
