import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mumu Market Waitlist",
  description: "Mumu Market Waitlist | Single Marketplace For Muslim-Owned Businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
