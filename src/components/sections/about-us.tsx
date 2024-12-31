"use client";

import React from "react";
import GradientCard from "@/components/ui/grid-card";
import { twMerge } from "tailwind-merge";
import { teamMembers } from "@/data/data";

export function AboutUs() {
	return (
		<section id="about-us" className="py-32 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8"> {/* Changed to text-white */}
						About MuMu
					</h2>

					<p className="mt-8 text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
						We are a team of passionate software engineers who connected through
						a fellowship called
						<span className="font-semibold text-[#F5DEB3]">
							{" "}
							Headstarter AI
						</span>
						. As a team, we have a shared vision of uplifting the Ummah and 
						empowering Muslim-owned businesses. We believe that by working 
						together, we can create innovative, community-driven solutions 
						that will benefit everyone. At
						<span className="font-semibold text-[#F5DEB3]">
							{" "}
							Mumu
						</span>,
						we are more than a marketplace—we are a movement focused on 
						empowering Muslim-owned businesses, streamlining the path to 
						discovery, and nurturing meaningful connections worldwide. 
						Through dedication and collaboration, we strive to build an 
						accessible, inclusive platform that enriches the global Muslim 
						community and helps it thrive.
					</p>
				</div>
			</div>

			{/* ANCHOR: Grid Cards for About Us Section */}
			<div className="mt-24 grid grid-cols-1 gap-8 place-items-center">
				{teamMembers.map((member, index) => (
					<div key={index} className="relative w-full">
						<GradientCard
							title={member.name}
							subtitle={member.title}
							description={member.description}
							icon={null}
						/>
					</div>
				))}
			</div>
		</section>
	)
}