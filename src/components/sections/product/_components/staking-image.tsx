import React from "react";

export function StakingImage() {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <div className="text-sm text-gray-400 mb-2">ACTIVE STAKING</div>
      <div className="relative h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" style={{ clipPath: 'polygon(0 0, 75% 0, 75% 100%, 0% 100%)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-16 bg-white transform -rotate-45 origin-bottom rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}