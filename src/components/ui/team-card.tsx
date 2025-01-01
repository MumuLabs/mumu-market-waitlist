"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

interface CardProps {
	name: string;
	description: string;
	avatar?: string;
	linkedin?: string;
	github?: string;
	imageStyle?: React.CSSProperties;
	className?: string;
}

const GradientCard: React.FC<CardProps> = ({
	name,
	description,
	avatar,
	linkedin,
	github,
	imageStyle,
	className,
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

			<div className="relative z-10 flex flex-col items-center">
				{avatar && (
					<div className="mb-4 w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
						<Image
							src={avatar}
							alt={name}
							width={100}
							height={100}
							className="rounded-full"
							style={imageStyle}
						/>
					</div>
				)}
				<h3 className="text-2xl font-bold text-center text-white mb-3">
					{name}
				</h3>
				<div className="flex gap-4 mb-4">
					{linkedin && (
						<a
							href={linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors"
						>
							<LinkedInLogoIcon className="w-5 h-5" />
						</a>
					)}
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors"
						>
							<GitHubLogoIcon className="w-5 h-5" />
						</a>
					)}
				</div>
				<p className="text-base text-center text-gray-400">{description}</p>
			</div>
		</motion.div>
	);
};

export default GradientCard;
