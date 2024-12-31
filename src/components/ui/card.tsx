"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
	title: string;
	selected: boolean;
	p?: string;
	className?: string;
	content?: string;
	onClick: () => void;
}

const Card: React.FC<CardProps> = ({
	title,
	p,
	selected,
	className,
	content,
	onClick,
}) => {
	const baseClasses = `
    cursor-pointer bg-[#F5DEB3] text-black rounded-xl shadow-lg 
    flex flex-col items-center justify-center
    w-[40rem] h-[12rem] transition-all duration-300 p-4
  `;

	const stateClasses = selected
		? "scale-105 opacity-100 z-20"
		: "scale-95 opacity-75 z-10";

	return (
		<div className={`${baseClasses} ${stateClasses}`} onClick={onClick}>
			<h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-center">
				{title}
			</h3>
			<p className="text-xl text-center mb-2 px-4">{p}</p>
			<button
				className={twMerge(
					"bg-white text-black border border-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-colors mt-auto",
					className,
				)}
			>
				{content ? content : "Learn More"}
			</button>
		</div>
	);
};

export default Card;
