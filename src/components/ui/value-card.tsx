import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ValueCardProps {
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
    className?: string;
    onClick?: () => void;
    imageClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

/// TODO: Improve ProductCard Functional Component.
export function ValueCard({
    title,
    description,
    image,
    className,
    onClick,
    imageClassName,
    titleClassName,
    descriptionClassName
}: ValueCardProps) {
    const defaultDimensions = {
        width: 400,
        height: 400
    };

    return (
        <div
            role="article"
            onClick={onClick}
            className={cn(`
                relative
                bg-white
                rounded-2xl
                p-6
                shadow-lg
                overflow-hidden
                border-2 
                border-slate-200
                transition-all
                duration-300
                ease-in-out
                hover:border-slate-300
                hover:shadow-xl
                ${onClick ? 'cursor-pointer' : ''}
            `, className)}
        >
            <div className="relative space-y-4">
                <div className="aspect-auto overflow-hidden rounded-lg">
                    <Image 
                        {...defaultDimensions}
                        {...image}
                        className={cn(
                            "object-cover w-full h-full transition-transform duration-300 group-hover:scale-105",
                            imageClassName
                        )}
                    />
                </div>
                <h3 className={cn(
                    "text-xl font-semibold text-gray-900",
                    titleClassName
                )}>
                    {title}
                </h3>
                <p className={cn(
                    "text-gray-600 line-clamp-3",
                    descriptionClassName
                )}>
                    {description}
                </p>
            </div>
        </div>
    );
}
