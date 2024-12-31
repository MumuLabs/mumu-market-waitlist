"use client";

import React from "react";

import { Hero } from "@/components/sections/hero";
import { AboutUs } from "@/components/sections/about-us";

import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { CallToAction } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";

export default function Home() {
	return (
		<div className="min-h-screen w-full overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
			<main className="container mx-auto flex flex-col items-center">
				<Hero />
				<AboutUs />
				<Testimonials />
				<Faq />
				<Services
					title="Why Choose Mumu Marketplace?"
					p="We understand how hard it can be to get exposure for your business. We are here to help you succeed and build that growth you are looking for. Join us today and start your journey with Mumu."
				/>
				<CallToAction />
			</main>
		</div>
	);
}
