"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface ProductCardProps {
	name: string;
	description: string;
	price: number;
	image: string;
	rating: number;
	reviewCount: number;
	tags?: string[];
	className?: string;
}

export const InifiniteMovingProductCards = ({
	items,
	direction = "left",
	speed = "normal",
	pauseOnHover = true,
	className,
}: {
	items: ProductCardProps[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);
	const [start, setStart] = useState(false);

	useEffect(() => {
		addAnimation();
	}, []);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards",
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse",
				);
			}
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}
			>
				{items.map((product, idx) => (
					<li
						className="w-[300px] max-w-full relative rounded-2xl border flex-shrink-0 border-slate-700 overflow-hidden bg-slate-900"
						key={`${product.name}-${idx}`}
					>
						<div className="relative h-[200px] w-full overflow-hidden flex items-center justify-center bg-slate-800">
							<img
								src={product.image}
								alt={product.name}
								className="max-h-full max-w-full object-contain"
							/>
						</div>
						<div className="p-4">
							<h3 className="text-lg font-semibold text-white mb-1">
								{product.name}
							</h3>
							<p className="text-sm text-gray-400 line-clamp-2 mb-2">
								{product.description}
							</p>
							<div className="flex flex-col gap-2">
								<div className="flex items-center justify-between">
									<span className="text-lg font-bold text-white">
										${product.price.toFixed(2)}
									</span>
									<div className="flex items-center gap-1">
										<div className="flex items-center">
											{[...Array(5)].map((_, i) => (
												<svg
													key={i}
													className={cn(
														"w-4 h-4",
														i < product.rating
															? "text-yellow-400"
															: "text-gray-600",
													)}
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
											))}
										</div>
										<span className="text-sm text-gray-400">
											({product.reviewCount})
										</span>
									</div>
								</div>
								{product.tags && product.tags.length > 0 && (
									<div className="flex flex-wrap gap-1">
										{product.tags.map((tag) => (
											<span
												key={tag}
												className="bg-slate-900/80 border border-white/20 text-white px-2 py-1 rounded-full text-sm"
											>
												{tag}
											</span>
										))}
									</div>
								)}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default InifiniteMovingProductCards;
