import "./globals.css";
import type { Metadata } from "next";
import { Azeret_Mono, Inter, Wix_Madefor_Text } from "next/font/google";
import Navbar from "@/components/Navbar";
import React from "react";

const sansfont = Wix_Madefor_Text({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "LinKut - Url Shortener app",
  description: "Url Shortener app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sansfont.variable}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
