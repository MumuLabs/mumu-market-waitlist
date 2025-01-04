"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface InfiniteMovingCardsProps {
	items: any[];
	direction?: "left" | "right";
	speed?: "slow" | "normal" | "fast";
	pauseOnHover?: boolean;
	className?: string;
}

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "normal",
	pauseOnHover = false,
	className,
}: InfiniteMovingCardsProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const [isPaused, setIsPaused] = useState(false);

	const handleMouseEnter = () => pauseOnHover && setIsPaused(true);
	const handleMouseLeave = () => pauseOnHover && setIsPaused(false);

	return (
		<div
			ref={containerRef}
			className={cn(
				"relative w-full h-full overflow-hidden",
				className
			)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className={cn(
					"flex gap-4 animate-[infinite-scroll_30s_linear_infinite]",
					direction === "left" && "rtl:flex-row-reverse"
				)}
				style={{
					animationPlayState: isPaused ? "paused" : "running",
				}}
			>
				{items.map((item, index) => (
					<div
						key={index}
						className="shrink-0 w-48 h-64 flex items-center justify-center bg-gray-800 text-white"
					>
						{item.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default InfiniteMovingCards;
