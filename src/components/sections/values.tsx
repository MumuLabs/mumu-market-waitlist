"use client";

import React from "react";
import Link from "next/link";
import { BusinessValueArray } from "@/data/data";
import { ValueCard } from "@/components/ui/value-card";
import { OutInUnderline } from "../ui/underline";
import { ArrowUpRightFromSquare } from "lucide-react";

// TODO: Change the Text for the Business Values Section.
export function BusinessValuesSection() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-lg font-medium text-slate-600">{"Mumu Business Benefits".toUpperCase()}</h2>
          
          <Link className="text-primary-color font-medium hover:text-[#d2a87c] flex items-center gap-2" href="#">
            <OutInUnderline label="Read more" direction="right"/>
            <ArrowUpRightFromSquare className="w-4 h-4" />
          </Link>
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
           {BusinessValueArray.map((value, index) =>  {
              return (
                <ValueCard 
                  key={index}
                  title={value.title}
                  description={value.description}
                  image={value.image}
                  imageClassName={value.imageClassName}
                  titleClassName={value.titleClassName}
                  descriptionClassName={value.descriptionClassName}
                />
              )
           })}
        </div>
      </div>
    </section>
  );
}