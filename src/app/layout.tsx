import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opencejav Waitlist",
  description: "Waitlist site for Opencejav | Startup for University Students in Tech",
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
