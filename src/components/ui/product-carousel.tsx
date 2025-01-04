"use client";

import React from "react";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/ui/product-card";

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
	// Duplicate your data array so the list can seamlessly loop.
	const repeatedItems = React.useMemo(() => [...items, ...items], [items]);
	const containerRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		setDirection();
		setSpeed();
	}, [direction, speed]);

	function setDirection() {
		if (!containerRef.current) return;
		// 'forwards' means left-to-right in the keyframes animation
		// 'reverse' will reverse the direction
		const newDirection = direction === "left" ? "normal" : "reverse";
		containerRef.current.style.setProperty("--scroll-direction", newDirection);
	}

	function setSpeed() {
		if (!containerRef.current) return;
		let duration = "40s"; // normal
		if (speed === "fast") duration = "20s";
		if (speed === "slow") duration = "80s";
		containerRef.current.style.setProperty("--scroll-duration", duration);
	}

	return (
		<div
			ref={containerRef}
			className={cn(
				"relative z-20 max-w-7xl overflow-hidden",
				// Mask to fade edges
				"[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
			// We'll rely on custom CSS variables for direction & duration
		>
			<ul
				className={cn(
					// The "animate-scroll" class references a custom CSS keyframe
					// that translates X from 0% to -50% continuously
					"flex min-w-full gap-4 py-4 w-[200%] flex-nowrap",
					"animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
				style={{
					animationDirection: `var(--scroll-direction, normal)`,
					animationDuration: `var(--scroll-duration, 40s)`,
					animationTimingFunction: "linear",
					animationIterationCount: "infinite",
				}}
			>
				{repeatedItems.map((product, idx) => (
					<li key={`${product.name}-${idx}`} className="flex-shrink-0">
						<ProductCard
							name={product.name}
							description={product.description}
							price={product.price}
							image={product.image}
							rating={product.rating}
							reviewCount={product.reviewCount}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default InifiniteMovingProductCards;
