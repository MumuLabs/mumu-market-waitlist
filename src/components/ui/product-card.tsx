import React from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    title: string;
    description: string;
    image: React.ReactNode;
    className?: string;
}

export function ProductCard({ title, description, image, className }: ProductCardProps) {
    return (
        <div className={cn(`
            relative
            bg-white rounded-2xl p-6 shadow-lg
            overflow-hidden
            transition-all duration-300 ease-in-out
            hover:shadow-xl
            group`, className)}>

            {/* Glare effect */}
            <div className="
              absolute inset-0
              bg-gradient-to-r from-[#458588] via-[#689d6a] to-[#b16286]
              opacity-50 blur-3xl
              translate-x-[-100%] group-hover:translate-x-[100%] group-hover:rotate-12 group-hover:scale-110
              transition-all duration-1000 ease-in-out
            "/>
            <div className="
              absolute inset-0
              bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
              opacity-30 blur-2xl
              translate-x-[100%] group-hover:translate-x-[-100%] group-hover:-rotate-12 group-hover:scale-110
              transition-all duration-1000 ease-in-out delay-100
            "/>

            {/* Content */}
            <div className="relative">
                <Image 
                    src="/images/products/engine.png"
                    alt="Engine Image"
                    width={400}
                    height={400}
                    className="rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-6 mb-3">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}