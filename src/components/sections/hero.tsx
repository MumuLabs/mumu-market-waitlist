"use client";

import React from "react";
import { productDataSectionOne, productDataSectionTwo } from "@/data/data";
import { InifiniteMovingProductCards } from "@/components/ui/product-carousel";

export function Hero() {
	const handleButtonClickedScrollToWaitlist = () => {
		const element = document.querySelector("#waitlist");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="hero" className="py-56 overflow-hidden flex flex-col items-center">
			<div className="text-center py-10">
				<h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">
					Muslim Shopping, Simplified.
				</h1>
				<p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto drop-shadow-md">
					A single marketplace for Muslim-owned businesses—Discover, Shop, and
					Support with ease.
				</p>

				<button
					onClick={handleButtonClickedScrollToWaitlist}
					className="px-8 py-4 rounded-full bg-gradient-to-b from-[#d4a595] to-[#d4a595]/80 via-[#d4a595]/80 text-white font-medium  hover:scale-105 transition-transform duration-300"
				>
					Join Waitlist 🐫
				</button>
			</div>
			

			<div className="flex flex-col mt-10">
				<div className="h-full flex items-center justify-center overflow-hidden">
					<InifiniteMovingProductCards
						items={productDataSectionOne}
						direction="left"
						speed="normal"
						pauseOnHover={true}
					/>
				</div>
				<div className="h-1/2 flex items-center justify-center overflow-hidden">
					<InifiniteMovingProductCards
						items={productDataSectionTwo}
						direction="right"
						speed="normal"
						pauseOnHover={true}
					/>
				</div>
			</div>
		</section>
	);
}
