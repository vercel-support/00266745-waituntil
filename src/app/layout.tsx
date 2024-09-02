import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "00266745 – test waitUntil()",
  description: "See /api/test-waitUntil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
