import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Golos_Text } from "next/font/google";
import Navbar from "@/components/sections/layout/navbar";
import { Footer } from "@/components/sections/layout/footer";

import "./globals.css";

const golosFont = Golos_Text({
	variable: "--font-golos-text",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mumu Market | Waitlist",
	description: "Official Waitlist for Mumu Marketplace.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
			<body className={`${golosFont.variable} antialiased`}>
				<Navbar />
				<Toaster />
				{children}
				<Footer />
			</body>
		</html>
	);
}
