'use client';

import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const router = useRouter();

  const products = [
    { id: 1, name: 'Product 1', description: 'Description of product 1' },
    { id: 2, name: 'Product 2', description: 'Description of product 2' }
  ];

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  const handleBackHome = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Our Products</h1>
          <div className="space-x-4">
            <button
              onClick={handleGoBack}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={handleBackHome}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-6 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => handleProductClick(product.id)}
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-full"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
