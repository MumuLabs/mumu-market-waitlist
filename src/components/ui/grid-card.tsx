"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
	title: string;
	subtitle: string;
	description: string;
	className?: string;
	icon?: React.ReactNode;
}

const GradientCard: React.FC<CardProps> = ({
	title,
	subtitle,
	description,
	className,
	icon,
}) => {
	return (
		<motion.div
			className={cn(
				"relative w-full max-w-md p-8 rounded-xl overflow-hidden",
				"bg-gradient-to-br from-gray-900 to-gray-800",
				"group transition-all duration-300",
				className,
			)}
			whileHover={{ scale: 1.02 }}
		>
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
				<div className="absolute inset-0 bg-gradient-to-r from-[#b06e54] via-[#ba8674] to-[#d4a595] animate-gradient-xy" />
				<div className="absolute inset-0 bg-black/50 blur-2xl animate-blur-in" />
			</div>

			<div className="relative z-10">
				<div className="mb-4 text-3xl text-white">{icon}</div>
				<h3 className="text-2xl font-bold text-left text-white mb-2">
					{title}
				</h3>
				<h4 className="text-md font-semibold text-left text-gray-100/50 mb-4">
					{subtitle}
				</h4>
				<p className="text-base text-left text-gray-400">{description}</p>
			</div>
		</motion.div>
	);
};

export default GradientCard;
