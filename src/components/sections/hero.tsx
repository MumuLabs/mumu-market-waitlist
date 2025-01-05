import React from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Alternate Payments Made Easy
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        The most convenient way for merchants in Africa to easily accept mobile money, crypto,
        cash payments and third-party wallet services from their customers.
      </p>
      <div className="flex items-center justify-center space-x-4">
        <Button>Join the waitlist</Button>
        <Button variant="secondary">Contact sales</Button>
      </div>
    </div>
  );
}