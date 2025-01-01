"use client";

import React from "react";

import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { CallToAction } from "@/components/sections/cta";
import { AboutUs } from "@/components/sections/about-us";
import { ContactUs } from "@/components/sections/contact-us";

// ANCHOR: Sections Not Used (For Waitlist)
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";

export default function Home() {
	return (
		<div className="min-h-screen w-full overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
			<main className="container mx-auto flex flex-col items-center">
				<Hero />
				<Process
					title="How Mumu Works"
					p="It's simple, sign-up, browse, shop, and order. Our job is to make it easy for you to find what you like, and get it delivered to you."
				/>
				<Services
					title="Why Choose Mumu Marketplace?"
					p="We understand how hard it can be to get exposure for your business. We are here to help you succeed and build that growth you are looking for. Join us today and start your journey with Mumu."
				/>
				<AboutUs />
				<ContactUs />
				<CallToAction />
			</main>
		</div>
	);
}
