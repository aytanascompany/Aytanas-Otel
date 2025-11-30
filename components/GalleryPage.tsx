import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon, ExpandIcon } from './icons/Icons';

const GalleryPage: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const showNextImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => 
        prevIndex === null ? 0 : (prevIndex + 1) % GALLERY_IMAGES.length
    );
  }, [selectedImageIndex]);

  const showPrevImage = useCallback(() => {
     if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => 
      prevIndex === null ? 0 : (prevIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, closeLightbox, showNextImage, showPrevImage]);

  return (
    <div className="bg-white animate-fade-in-fast">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[300px] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="https://picsum.photos/seed/gallery-hero/1920/1080" alt="Hotel ambiance" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold">Galerimiz</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">Mortanas Hotel'in zarafetini ve eşsiz anlarını keşfedin.</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
           <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {GALLERY_IMAGES.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md break-inside-avoid group cursor-pointer relative" onClick={() => openLightbox(index)}>
                        <img 
                            className="h-auto w-full max-w-full rounded-lg transform group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                            src={image.src} 
                            alt={image.alt} 
                        />
                         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <ExpandIcon className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />
                        </div>
                    </div>
                ))}
             </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in-fast"
          onClick={closeLightbox}
        >
          <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-2 hover:bg-black/70 transition-colors z-50">
            <CloseIcon className="w-7 h-7" />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); showPrevImage(); }} className="absolute left-4 md:left-8 text-white bg-black/40 rounded-full p-3 hover:bg-black/70 transition-colors z-50">
            <ArrowLeftIcon className="w-8 h-8" />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); showNextImage(); }} className="absolute right-4 md:right-8 text-white bg-black/40 rounded-full p-3 hover:bg-black/70 transition-colors z-50">
            <ArrowRightIcon className="w-8 h-8" />
          </button>

          <div className="relative max-w-screen-lg max-h-[90vh] w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
             <img 
                src={GALLERY_IMAGES[selectedImageIndex].src} 
                alt={GALLERY_IMAGES[selectedImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-slide-up"
             />
             <p className="text-white text-center mt-4 text-lg bg-black/50 px-4 py-2 rounded-md">{GALLERY_IMAGES[selectedImageIndex].alt}</p>
          </div>
        </div>
      )}

       <style>{`
            @keyframes fade-in-fast { from { opacity: 0; } to { opacity: 1; } }
            .animate-fade-in-fast { animation: fade-in-fast 0.3s ease-in-out; }
            @keyframes slide-up { from { transform: translateY(10px) scale(0.98); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
            .animate-slide-up { animation: slide-up 0.3s ease-out; }
        `}</style>
    </div>
  );
};

export default GalleryPage;
