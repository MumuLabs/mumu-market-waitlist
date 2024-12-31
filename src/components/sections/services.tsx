"use client";

import React from "react";
import GradientCard from "@/components/ui/grid-card";
import { cardData } from "@/data/data";

interface ServicesProps {
	title?: string;
	p?: string;
}

export function Services({ title, p }: ServicesProps) {
	return (
		<section id="business-reasons" className="py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						{title}
					</h2>
					<p className="mt-4 text-lg leading-relaxed text-white/70">{p}</p>
				</div>
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{cardData.map((card, index) => (
						<GradientCard
							key={index}
							title={card.title}
							subtitle={card.subtitle}
							description={card.description}
							icon={card.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
