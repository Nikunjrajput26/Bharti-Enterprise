
const categories = [
  { name: "Industrial Fans", image: "/categories/fans.jpg" },
  { name: "Pedestal Fans", image: "/categories/pedestal.jpg" },
  { name: "Wall Mounted Fans", image: "/categories/wall.jpg" },
  { name: "Air Circulators", image: "/categories/air.jpg" },
  { name: "Axial Flow Fans", image: "/categories/axial.jpg" },
  { name: "Centrifugal Fans", image: "/categories/centrifugal.jpg" },
  { name: "Centrifugal Fans", image: "/categories/centrifugal.jpg" },
  { name: "Centrifugal Fans", image: "/categories/centrifugal.jpg" },
];

export function CategoriesGrid() {
  return (
    <div className="w-full bg-gray-50 py-10 px-4 m-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Product Categories
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <p className="font-medium">{cat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
