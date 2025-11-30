
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">Anlardan Kareler</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">Otelimizin güzelliğini ve sunduğu eşsiz deneyimleri keşfedin.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {GALLERY_IMAGES.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md">
                            <img 
                                className="h-auto max-w-full rounded-lg transform hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer" 
                                src={image.src} 
                                alt={image.alt} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
