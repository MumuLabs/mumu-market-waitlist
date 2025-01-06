"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
	ShoppingBagIcon,
	StoreIcon,
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

const muslimCompanyNames = [
	"Noor Textiles",
	"Barakah Bazaar",
	"HalalHub",
	"SunnahMart",
	"Taqwa & Co.",
	"Ihsan Industries"
];

const muslimCompanyIcons = [
	ShoppingBagIcon,
	StoreIcon,
];

// Simple deterministic “hash” for illustration
function simpleDeterministicIndex(str: string) {
	let sum = 0
	for (let i = 0; i < str.length; i++) {
		sum = (sum + str.charCodeAt(i)) % 9999
	}
	return sum
}

// ANCHOR: Maps Specific Product-Name Keywords/Phrases to Custom Meta Tags
function getMetaTagFromName(productName: string) {
	const lowerName = productName.toLowerCase().trim();

	if (lowerName.includes("noor abaya")) return "Abaya";
	if (lowerName.includes("palestine braided jewelry")) return "Jewelry";
	if (lowerName.includes("palestine t-shirt")) return "T-Shirt";
	if (lowerName.includes("musk amber cologne")) return "Cologne";
	if (lowerName.includes("deluxe quran gift set")) return "Quran";
	if (lowerName.includes("modefa perfume concentrated oil")) return "Perfume";
	if (lowerName.includes("kaabba mat")) return "Prayer Mat";

	return "Unique Muslim Product";
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
	// Use a memo so the same product name yields the same icon each render.
	const iconIndex = React.useMemo(() => {
		return simpleDeterministicIndex(name) % muslimCompanyIcons.length
	}, [name ])

	const nameIndex = React.useMemo(() => {
		return simpleDeterministicIndex(name) % muslimCompanyNames.length
	}, [name])

	const IconComponent = muslimCompanyIcons[iconIndex]
	const companyName = muslimCompanyNames[nameIndex]

	const metaTag = getMetaTagFromName(name);

	return (
		<motion.div
			whileHover={{ y: -3 }}
			transition={{ duration: 0.2 }}
			className={cn(
				"w-64 h-[420px] rounded-xl shadow-md bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden",
				className
			)}
		>
			<Card className="h-full border-none bg-inherit shadow-none flex flex-col">
				<div className="flex items-center gap-2 p-3">
					<IconComponent className="w-5 h-5 text-gray-400 dark:text-gray-500" />
					<span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
						{companyName}
					</span>
				</div>

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

				<CardContent className="p-4 flex flex-col flex-1">
					<h3 className="text-md font-bold mb-1 text-left">{name}</h3>
					
					<div className="mb-3">
						<span className="inline-bloc text-left bg-[#d4a595]/10 text-[#9f785e] py-1 px-2 rounded text-xs font-medium">
							{metaTag}
						</span>
					</div>

					<p className="text-sm text-left text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
						{description}
					</p>

					<div className="flex items-center justify-between mt-auto">
						<span className="text-sm font-semibold">${price.toFixed(2)}</span>
						<span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
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
