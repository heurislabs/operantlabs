import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Operant Labs",
  description: "Operant Labs creates high quality, well designed, robotic products for all people who love automation and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className="font-shilia-light antialiased bg-[#f3f3f3] text-[#0f0e12] overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
