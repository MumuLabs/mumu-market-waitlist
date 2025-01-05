import React from "react";

export function EngineImage() {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-center">
      <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
        <div className="w-12 h-12 bg-gray-200 rounded-lg grid grid-cols-3 gap-0.5 p-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-gray-300 rounded-sm" />
          ))}
        </div>
      </div>
    </div>
  );
}