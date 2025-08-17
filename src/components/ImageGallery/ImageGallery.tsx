"use client";
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ImageItem = { name: string; img: string; category: string };
type GalleryProps = { images: ImageItem[] };

const ImageGallery: React.FC<GalleryProps> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  // Unique categories with "All"
  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

  // Filter images by category
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <>
      <div className="flex gap-3 mb-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{ fontFamily: "Oswald, sans-serif"}}
            className={`bg-[#E41C23] text-xs px-4 py-2 rounded-full hover:bg-[#c9151c] transition-colors
          } ${
              selectedCategory === cat
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredImages.map((image, index) => (
          <div
            key={image.name + index}
            className="relative group cursor-pointer overflow-hidden shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
          >
            <img
              src={image.img}
              alt={image.name}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* <div className="absolute bottom-0 w-full bg-black/10 backdrop-blur-sm py-2 px-3 text-center">
              <h3
                className="text-white text-sm font-semibold"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                {image.name}
              </h3>
            </div> */}
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[95vw] h-[80vh] max-w-none bg-black/80 border-none p-0 flex items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <X size={24} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={showNext}
            className="absolute right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <ChevronRight size={32} />
          </button>

          {filteredImages.length > 0 && (
            <img
              src={filteredImages[currentIndex].img}
              alt={filteredImages[currentIndex].name}
              className="w-[80vw] max-h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
