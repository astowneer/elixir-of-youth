import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "../providers/store-provider";

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
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
