"use client";

import { ProductArray } from "@/data/data";
import React from "react";
import { InfiniteMovingProductCards } from "@/components/ui/infinite-moving-cards";


export function ProductsSection() {
    return (
        <section id="products" className="relative py-24">
            <div className="h-full flex items-center justify-center overflow-hidden mt-16">
                <InfiniteMovingProductCards
                    items={ProductArray}
                    direction="left"
                    speed="normal"
                    pauseOnHover={true}
                />
            </div>
        </section>
    )
}