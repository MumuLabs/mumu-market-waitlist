"use client";

import React from "react";
import { testimonials } from "@/data/data";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonials() {
	return (
		<section id="testimonials" className="py-16">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
					See What Our Customers Are Saying
				</h2>
				<p className="mt-4 text-lg leading-relaxed text-white/70 mb-10">
					We appreciate all the feedback and support everyone who has joined
					Mumu already, thank you!
				</p>
			</div>
			<div className="h-[30rem] flex flex-col gap-0">
				<div className="h-1/2 flex items-center justify-center overflow-hidden">
					<InfiniteMovingCards
						items={testimonials}
						pauseOnHover={true}
						speed="slow"
						direction="left"
					/>
				</div>
				<div className="h-1/2 flex items-center justify-center overflow-hidden">
					<InfiniteMovingCards
						items={testimonials}
						pauseOnHover={true}
						speed="slow"
						direction="right"
					/>
				</div>
			</div>
		</section>
	);
}
