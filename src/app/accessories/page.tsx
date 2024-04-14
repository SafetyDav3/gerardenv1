// Page for auxiliary products

import Link from "next/link";

export default function Accessories() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Accessories</h1>
      <p className="text-xl text-gray-500 mb-8">Coming soon...</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((pack) => (
          <div className="bg-gray-200 rounded-lg p-6 shadow-md" key={pack}>
            <h2 className="text-xl font-bold mb-2">Pack {pack}</h2>
            <p className="text-gray-600">
              Details for Pack {pack} coming soon...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
