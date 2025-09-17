import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "teenage engineering",
  description: "teenage engineering creates high quality, well designed, electronic products for all people who love sound and music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#f3f3f3] text-[#0f0e12] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
