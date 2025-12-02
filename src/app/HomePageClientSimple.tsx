'use client';

export default function HomePageClientSimple() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Portfolio Nayzex - Test Simple
      </h1>
      <p className="text-center text-lg text-gray-600">
        Version simplifiée pour débugger l&apos;erreur 500.
      </p>
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Test Button
        </button>
      </div>
    </div>
  );
}
