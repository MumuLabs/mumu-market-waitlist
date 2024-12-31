"use client";

import React from "react";
import { WaitlistModal } from "@/components/sections/waitlist/waitlist";

export function CallToAction() {
	return (
		<section
			id="waitlist"
			className="relative min-h-screen w-full overflow-hidden"
		>
			<div className="relative container mx-auto px-6 lg:px-8 py-24 md:py-32 lg:py-40">
				<div className="flex flex-col items-center space-y-8">
					<div className="flex flex-col items-center space-y-4">
						<h2 className="text-base font-semibold tracking-wide text-[#d4a595] uppercase text-center">
							Join Us Today
						</h2>
						<h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight text-center max-w-3xl">
							Elevate Your Business with Mumu
						</h3>
					</div>

					<p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl text-center">
						We understand how hard it can be to get exposure for your business.
						We are here to help you succeed and build the growth you are looking
						for. Join us today and start your journey with Mumu.
					</p>

					<WaitlistModal />
				</div>
			</div>
		</section>
	);
}

export default CallToAction;
