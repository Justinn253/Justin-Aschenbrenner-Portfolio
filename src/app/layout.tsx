import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Portfolio from "./dashboard/Portfolio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin's Portfolio",
  description: "Website made to display my portfolio as a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Portfolio></Portfolio>
      </body>
    </html>
  );
}
