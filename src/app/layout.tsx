import "./globals.css";
import type { Metadata } from "next";
import { Azeret_Mono, Inter } from "next/font/google";

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeretMono",
});

export const metadata: Metadata = {
  title: "Url Shortener",
  description: "Url Shortener app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={azeretMono.variable}>{children}</body>
    </html>
  );
}
