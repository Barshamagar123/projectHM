import React from "react";
import gallery1 from "../../assets/Gallery1.jpg"
import gallery2 from "../../assets/gallery2.jpg"
import gallery3 from "../../assets/gallery3.jpg"
import gallery4 from "../../assets/gallery4.jpg"

const GallerySection = () => {
  const galleryImages = [
    { src: gallery1, alt: "Gallery 1" },
    { src: gallery2, alt: "Gallery 2" },
    { src: gallery3, alt: "Gallery 3" },
    { src: gallery4, alt: "Gallery 4" }
  ];

  return (
    <section className="py-16 bg-gray-50" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Campus Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/gallery" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

const GalleryImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="rounded-lg shadow-md object-cover h-40 w-full" />
);

export default GallerySection;