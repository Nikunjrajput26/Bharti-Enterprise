import ImageGallery from "@/components/ImageGallery/ImageGallery";

export default function Page() {
  const images = [
    { name: "Office 1", img: "/office1.jpg", category: "Office Images" },
    { name: "Office 1", img: "/office1.jpg", category: "Office Images" },
    { name: "Office 1", img: "/office1.jpg", category: "Office Images" },
    { name: "Office 2", img: "/office2.jpg", category: "Office Images" },
    { name: "Office 2", img: "/office2.jpg", category: "Office Images" },
    { name: "Office 2", img: "/office2.jpg", category: "Office Images" },
    { name: "Store 1", img: "/store1.jpg", category: "Stores" },
    { name: "Store 1", img: "/store1.jpg", category: "Stores" },
    { name: "Store 1", img: "/store1.jpg", category: "Stores" },
    { name: "Store 1", img: "/store1.jpg", category: "Stores" },
    { name: "TPL Event", img: "/tpl1.jpg", category: "TPL" },
    { name: "TPL Event", img: "/tpl1.jpg", category: "TPL" },
    { name: "TPL Event", img: "/tpl1.jpg", category: "TPL" },
    { name: "TPL Event", img: "/tpl1.jpg", category: "TPL" },
    { name: "Tour 1", img: "/tour1.jpg", category: "Tours" },
    { name: "Tour 1", img: "/tour1.jpg", category: "Tours" },
    { name: "Tour 1", img: "/tour1.jpg", category: "Tours" },
    { name: "Tour 1", img: "/tour1.jpg", category: "Tours" },
    { name: "Festival 1", img: "/festival1.jpg", category: "Festivals" },
    { name: "Festival 1", img: "/festival1.jpg", category: "Festivals" },
    { name: "Festival 1", img: "/festival1.jpg", category: "Festivals" },
    { name: "Festival 1", img: "/festival1.jpg", category: "Festivals" },
    { name: "Festival 1", img: "/festival1.jpg", category: "Festivals" },
    { name: "Festival 1", img: "/festival1.jpg", category: "Festivals" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold mb-4 md:mb-12">Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
}
