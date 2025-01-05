import React from "react";

export function TriggerImage() {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="text-sm font-medium mb-4">ACTIVE STRATEGIES</div>
      <div className="space-y-3">
        {['Solana', 'Cena Stellar', 'Etherum', 'Bitcoin'].map((crypto) => (
          <div key={crypto} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <span>{crypto}</span>
            <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">+</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}