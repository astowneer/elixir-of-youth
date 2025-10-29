import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "../providers/store-provider";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Elixir of youth",
  description: "Powered by Astowner",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
          {modal}
        </StoreProvider>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
