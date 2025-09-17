import type { Metadata } from "next";
import "./globals.css";

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
        className="font-shilia-light antialiased bg-[#f3f3f3] text-[#0f0e12] overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
