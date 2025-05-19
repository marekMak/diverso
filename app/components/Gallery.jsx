import React from "react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
];

const Gallery = () => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-20 px-4 pb-2 relative">
      <h2 className="fixed top-40 left-[50%] translate-x-[-50%] uppercase z-10 text-[12vh] lg:text-[20vh] font-serif font-bold">
        Diverso
      </h2>
      <div className="flex flex-wrap w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 p-1 aspect-square relative group"
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover block opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
