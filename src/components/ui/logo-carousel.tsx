"use client";

import React, { useEffect, useRef } from "react";
import { Logo } from "@/types/general.types";

interface LogoCarouselProps {
	logos: Logo[];
	speed?: number;
	gap?: number;
	className?: string;
	maskGradient?: boolean;
}

// ANCHOR: Fix this Logo Carousel Component
const LogoCarousel = ({
	logos,
	speed = 25,
	gap = 32,
	className = "",
	maskGradient = true,
}: LogoCarouselProps) => {
	const logosRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (!logosRef.current) return;

		const ul = logosRef.current;
		const clone = ul.cloneNode(true) as HTMLUListElement;
		clone.setAttribute("aria-hidden", "true");
		ul.parentElement?.appendChild(clone);

		return () => {
			clone.remove();
		};
	}, []);

	return (
		<div
			className={`w-full inline-flex flex-nowrap overflow-hidden ${
				maskGradient
					? "[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
					: ""
			} ${className}`}
		>
			<ul
				ref={logosRef}
				className="flex items-center justify-center md:justify-start"
				style={{
					animation: `infinite-scroll ${speed}s linear infinite`,
					gap: `${gap}px`,
				}}
			>
				{logos.map((logo, index) => (
					<li key={index} className="flex items-center">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={logo.src} alt={logo.alt} className="max-w-none" />
					</li>
				))}
			</ul>
		</div>
	);
};

export default LogoCarousel;
