import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workings NG",
  description: "Get more work done, easily!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(comfortaa.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
