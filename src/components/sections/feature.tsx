import React from "react";

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconBgColor?: string;
}

export function Feature({ icon, title, description, iconBgColor = "bg-slate-300/30" }: FeatureProps) {
  return (
      <div className="group relative flex flex-col items-start space-y-2 p-6 shadow-md rounded-2xl hover:shadow-xl transition-all ease-in-out duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gradient-from to-gradient-to opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30" />
          <div className={`relative w-12 h-12 ${iconBgColor} text-primary-color dark:text-primary-color-dark rounded-full flex items-center justify-center`}>
              {icon}
          </div>
          <h3 className="relative text-xl font-semibold text-gray-900">{title}</h3>
          <p className="relative text-gray-600 leading-relaxed">{description}</p>
      </div>
  );
}