import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elixir of youth",
  description: "Powered by Astowner",
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
