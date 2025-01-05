import React from "react";

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function Feature({ icon, title, description }: FeatureProps) {
    return (
        <div className="flex flex-col items-start space-y-2">
        <div className="w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    );
}