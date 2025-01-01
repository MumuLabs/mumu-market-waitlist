"use client";

import React from "react";
import LogoCarousel from "@/components/ui/logo-carousel";
import { logos } from "@/data/data";
import { Button } from "../ui/button";

export function Hero() {
	const handleButtonClickedScrollToWaitlist = () => {
		const element = document.querySelector("#waitlist");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="hero" className="py-56 overflow-hidden">
			<div className="text-center">
				<h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">
					Muslim Shopping, Simplified.
				</h1>
				<p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto drop-shadow-md">
					A single marketplace for Muslim-owned businesses—Discover, Shop, and
					Support with ease.
				</p>

				<Button
					onClick={handleButtonClickedScrollToWaitlist}
					className="px-8 py-7 rounded-full bg-gradient-to-b from-[#d4a595] to-[#d4a595]/80 via-[#d4a595]/80 text-white font-bold mt-5 hover:scale-105 transition-transform duration-300"
				>
					Join Waitlist
				</Button>
			</div>
		</section>
	);
}
