"use client";

import React from "react";
import ShinyButton from "../../ui/shiny-button";


// TODO: Change the Text for the Hero Section.
export function Hero() {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Muslim Shopping, Simplified.
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        A Single Marketplace For Muslim-Owned Businesses. Discover, Shop, and Support With Ease.
      </p>
      <div className="flex items-center justify-center space-x-4">
        <ShinyButton className="hover:shadow-[0_0_15px_hsl(var(--primary)/10%)]">
          Join Waitlist!
        </ShinyButton>
        <ShinyButton className="hover:shadow-[0_0_15px_hsl(var(--primary)/10%)]">
          Contact Us
        </ShinyButton>
      </div>
    </div>
  );
}