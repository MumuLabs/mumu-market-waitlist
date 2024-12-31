"use client";

import React from "react";
import { testimonials } from "@/data/data";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonials() {
	return (
		<section id="testimonials" className="py-16">
			<div className="h-[15rem] flex flex-colitems-center justify-center overflow-hidden">
				<InfiniteMovingCards
					items={testimonials}
					pauseOnHover={true}
					speed="slow"
					direction="left"
				/>
			</div>
		</section>
	);
}
