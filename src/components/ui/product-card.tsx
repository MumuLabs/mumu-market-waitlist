"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
	BriefcaseIcon,
	ShoppingBagIcon,
	StoreIcon,
	Building2Icon
} from "lucide-react";
import {
	Card,
	CardContent,
	CardHeader,
} from "@/components/ui/card";

interface ProductCardProps {
	name: string;
	description: string;
	price: number;
	image: string;
	rating: number;
	reviewCount: number;
	className?: string;
}

// Random Muslim-inspired company names and icons for variety
const muslimCompanyNames = [
	"Noor Textiles",
	"Barakah Bazaar",
	"HalalHub",
	"SunnahMart",
	"Taqwa & Co.",
	"Ihsan Industries"
];
const muslimCompanyIcons = [
	BriefcaseIcon,
	ShoppingBagIcon,
	StoreIcon,
	Building2Icon
];

// Helper to get a random array item
function getRandomItem<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Maps specific product-name keywords/phrases to custom meta tags:
 *  • "noor abaya" => "Abaya"
 *  • "palestine braided jewelry" => "Jewelry"
 *  • "palestine t-shirt" => "T-Shirt"
 *  • "musk amber cologne" => "Cologne"
 *  • "deluxe quran gift set" => "Quran"
 *  • "modefa perfume concentrated oil" => "Perfume"
 *  • "kaabba mat" => "Prayer Mat"
 */
function getMetaTagFromName(productName: string) {
	const lowerName = productName.toLowerCase().trim();

	if (lowerName.includes("noor abaya")) return "Abaya";
	if (lowerName.includes("palestine braided jewelry")) return "Jewelry";
	if (lowerName.includes("palestine t-shirt")) return "T-Shirt";
	if (lowerName.includes("musk amber cologne")) return "Cologne";
	if (lowerName.includes("deluxe quran gift set")) return "Quran";
	if (lowerName.includes("modefa perfume concentrated oil")) return "Perfume";
	if (lowerName.includes("kaabba mat")) return "Prayer Mat";

	// Fallback if no keywords matched
	return "Unique Islamic Product";
}

const ProductCard: React.FC<ProductCardProps> = ({
	name,
	description,
	price,
	image,
	rating,
	reviewCount,
	className
}) => {
	// Randomly chosen company name + icon once per mount
	const [companyName] = React.useState(() => getRandomItem(muslimCompanyNames));
	const [IconComponent] = React.useState(() => getRandomItem(muslimCompanyIcons));

	// Dynamically determine meta tag from product name
	const metaTag = getMetaTagFromName(name);

	return (
		<motion.div
			whileHover={{ y: -3 }}
			transition={{ duration: 0.2 }}
			className={cn(
				// Fixed card dimensions for uniform sizing
				"w-64 h-[420px] rounded-xl shadow-md bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden",
				className
			)}
		>
			<Card className="h-full border-none bg-inherit shadow-none flex flex-col">
				{/* Fake Company Info */}
				<div className="flex items-center gap-2 p-3">
					<IconComponent className="w-5 h-5 text-gray-400 dark:text-gray-500" />
					<span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
						{companyName}
					</span>
				</div>

				{/* Image container */}
				<CardHeader className="p-0">
					<div className="relative w-full h-44">
						<Image
							src={image}
							alt={name}
							fill
							className="object-contain object-center"
						/>
					</div>
				</CardHeader>

				{/* Content area */}
				<CardContent className="p-4 flex flex-col flex-1">
					{/* Product Name */}
					<h3 className="text-md font-bold mb-1 text-left">{name}</h3>
					
					{/* Meta tag */}
					<div className="mb-3">
						<span className="inline-block bg-[#d4a595]/10 text-[#9f785e] py-1 px-2 rounded text-xs font-medium">
							{metaTag}
						</span>
					</div>

					{/* Description */}
					<p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
						{description}
					</p>

					{/* Bottom row: Price (left) & Single-Star Rating (right) */}
					<div className="flex items-center justify-between mt-auto">
						<span className="text-sm font-semibold">${price.toFixed(2)}</span>
						<span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
							{/* Single star + rating + reviewCount */}
							<span className="text-yellow-500">★</span>
							{rating.toFixed(1)} ({reviewCount})
						</span>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default ProductCard;
