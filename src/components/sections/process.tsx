"use client";

import React from "react";
import { processSteps } from "@/data/data";

interface ProcessProps {
	title?: string;
	p?: string;
}

export function Process({ title, p }: ProcessProps) {
	return (
		<section id="process" className="py-32 overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						{title}
					</h2>
					<p className="mt-4 text-lg leading-relaxed text-white/70">{p}</p>
				</div>
				<div className="mt-16 grid divide-x divide-y divide-slate-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
					{processSteps.map((step, index) => {
						return (
							<div
								key={index}
								className="bg-gradient-to-br from-gray-900 to-gray-800 group transition-all duration-300"
							>
								<div className="relative space-y-8 py-12 p-8">
									<div className="text-white">{step.icon}</div>
									<div className="space-y-2">
										<h5 className="text-xl font-semibold text-white">
											{step.title}
										</h5>
										<p className="text-slate-400">{step.description}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
