import "./globals.css";

import type { Metadata } from "next";

import yekanBakh from "@/fonts";

export const metadata: Metadata = {
  title: "X Power | وبسایت تخصصی بدنسازی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} bg-background text-white`}>
        {children}
      </body>
    </html>
  );
}
