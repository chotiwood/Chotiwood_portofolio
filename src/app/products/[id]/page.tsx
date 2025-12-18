type Props = {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Product Detail</h1>
      <div className="p-6 border rounded-lg">
        <h2 className="text-xl font-semibold">Product ID: {params.id}</h2>
        <p>This is a dynamic route example showing product details</p>
      </div>
    </main>
  );
}
