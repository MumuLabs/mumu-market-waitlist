"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ShoppingCartIcon, HeartIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

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

const ProductCard: React.FC<ProductCardProps> = ({
	name,
	description,
	price,
	image,
	rating,
	reviewCount,
	tags = [],
	className,
}) => {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ duration: 0.2 }}
			className={cn("w-full max-w-sm", className)}
		>
			<Card className="relative h-full">
				<CardHeader className="p-0">
					<div className="relative h-64 w-full">
						<Image
							src={image}
							alt={name}
							fill
							className="object-cover rounded-t-lg"
						/>
					</div>
				</CardHeader>

				<CardContent className="p-4">
					<div className="flex flex-wrap gap-2 mb-2">
						{tags.map((tag) => (
							<Badge key={tag} variant="secondary" className="text-xs">
								{tag}
							</Badge>
						))}
					</div>

					<h3 className="text-xl font-semibold line-clamp-1 mb-1">{name}</h3>

					<div className="flex items-center gap-2 mb-2">
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<StarIcon
									key={i}
									className={cn(
										"w-4 h-4",
										i < rating
											? "text-[#F5DEB3] fill-[#F5DEB3]" // ANCHOR: Change this Color.
											: "text-gray-300",
									)}
								/>
							))}
						</div>
						<span className="text-sm text-gray-500">({reviewCount})</span>
					</div>

					<p className="text-sm text-gray-600 line-clamp-2 mb-4">
						{description}
					</p>

					<div className="flex items-baseline gap-2 mb-2">
						<span className="text-2xl font-bold">${price.toFixed(2)}</span>
					</div>
				</CardContent>

				<CardFooter className="p-4 pt-0 flex gap-2">
					<Button
						className="flex-1"
						onClick={() => console.log("This Feature is Coming Soon!")}
					>
						<ShoppingCartIcon className="w-4 h-4 mr-2" />
						Add to Cart
					</Button>
					<Button
						variant="outline"
						onClick={() => console.log("This Feature is Coming Soon!")}
					>
						<HeartIcon className="w-4 h-4" />
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
};

export default ProductCard;
