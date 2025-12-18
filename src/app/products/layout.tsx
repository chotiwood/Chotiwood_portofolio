export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* Shared navigation for products section */}
      <nav className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold">Products Section</h2>
      </nav>
      
      {/* Content area */}
      {children}
    </div>
  );
}
