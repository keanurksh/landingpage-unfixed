'use client'
import { useState } from "react"

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const images = Array.from({ length: 10 }, (_, i) => i + 1)

    return (
        <section
            id="gallery"
            className="py-20 bg-gradient-to-t from-gray-100 to-white relative"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Galeri Properti</h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((item) => (
                            <div
                                key={item}
                                className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg shadow-md"
                                onClick={() => setSelectedImage(item)}
                                >
                                  <img
                                    src={`/images/gallery-${item}.jpg`}
                                    alt={`Gallery ${item}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                   />
                                   <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                  </div>  
                        ))}
                    </div>

                    {/* modal preview dengan navigasi */}
                    {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={`/images/gallery-${selectedImage}.jpg`}
                alt={`Gallery ${selectedImage}`}
                className="w-full h-auto rounded-lg"
              />
              {/* tombol navigasi */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-xl p-2 bg-black bg-opacity-50 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage === 1 ? 10 : selectedImage - 1)
                }}
              >
                ←
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl p-2 bg-black bg-opacity-50 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage === 10 ? 1 : selectedImage + 1)
                }}
              >
                →
              </button>
              {/* tombol close */}
              <button
                className="absolute top-4 right-4 text-white text-xl font-bold bg-black bg-opacity-50 w-8 h-8 rounded-full flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery