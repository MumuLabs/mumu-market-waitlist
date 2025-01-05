import React from "react";
import { ProductCard } from "@/components/ui/product-card";
import { EngineImage } from "./_components/engine-image";
import { StakingImage } from "./_components/staking-image";
import { TriggerImage } from "./_components/trigger-image";

export function ProductsSection() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-lg font-medium text-gray-600">OUR PRODUCTS</h2>
          <button className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-2">
            Read more
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="w-full h-px bg-gray-200 my-6" />

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 max-w-2xl">
            You control the budget and growth targets. Nock does the rest.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Nock's AI monitors the market and trades for you, 24/7. Perfect for beginners and experts alike. No coding, no guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            number={1}
            title="Stay informed, always"
            description="Get instant alerts on key market movements or when your trade triggers are met."
            image={<StakingImage />}
          />
          <ProductCard
            number={2}
            title="AI-Powered precision"
            description="Smart and accurate AI-driven engine makes split-second decisions for optimal trading results."
            image={<EngineImage />}
          />
          <ProductCard
            number={3}
            title="Tailor your experience"
            description="Customize your strategies to fit your unique investment style, creating just for you."
            image={<TriggerImage />}
          />
        </div>
      </div>
    </section>
  );
}