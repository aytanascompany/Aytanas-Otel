import React, { useState } from 'react';
import type { Amenity } from '../types';
import { AMENITIES } from '../constants';
import { ArrowRightIcon, CubeIcon } from './icons/Icons';

// More engaging hover effect
const AmenityCard: React.FC<{ amenity: Amenity; onSelect: () => void }> = ({ amenity, onSelect }) => {
    const Icon = amenity.icon;
    return (
        <div 
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-2"
            onClick={onSelect}
        >
            <div className="bg-brand-secondary p-5 rounded-full mb-5 transition-colors duration-300 group-hover:bg-brand-primary">
                <Icon className="w-9 h-9 text-brand-primary transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-playfair font-bold text-brand-dark mb-2">{amenity.name}</h3>
            <p className="text-gray-600 flex-grow text-sm">{amenity.description}</p>
        </div>
    );
};

// More elegant featured card
const FeaturedAmenityCard: React.FC<{ amenity: Amenity; onSelect: () => void, onViewTour: (url: string) => void, isReversed?: boolean }> = ({ amenity, onSelect, onViewTour, isReversed = false }) => {
    const Icon = amenity.icon;
    return (
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`rounded-lg overflow-hidden shadow-2xl ${isReversed ? 'md:order-2' : ''}`}>
                 <img src={amenity.imageUrl} alt={amenity.name} className="w-full h-96 object-cover" />
            </div>
            <div className={`${isReversed ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                     <div className="bg-brand-secondary p-3 rounded-full">
                        <Icon className="w-7 h-7 text-brand-primary" />
                     </div>
                     <h3 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark">{amenity.name}</h3>
                </div>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">{amenity.details}</p>
                {amenity.operatingHours && <p className="font-semibold text-brand-dark mb-6">Çalışma Saatleri: <span className="font-normal text-gray-600">{amenity.operatingHours}</span></p>}
                <div className="flex flex-wrap gap-4">
                    <button 
                        onClick={onSelect} 
                        className="group inline-flex items-center text-brand-primary font-bold transition"
                    >
                        <span>Detayları Keşfet</span>
                        <ArrowRightIcon className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    {amenity.tourUrl && (
                         <button 
                            onClick={() => onViewTour(amenity.tourUrl!)} 
                            className="group inline-flex items-center text-gray-700 font-bold transition hover:text-brand-primary"
                        >
                             <CubeIcon className="w-5 h-5 mr-2" />
                            <span>360° Turu Görüntüle</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

// Refined modal
const AmenityModal: React.FC<{ amenity: Amenity; onClose: () => void }> = ({ amenity, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fade-in-fast">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full relative transform transition-all duration-300 scale-95 animate-slide-up overflow-hidden">
                <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-1 hover:bg-black/60 transition z-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <img src={amenity.imageUrl} alt={amenity.name} className="w-full h-72 object-cover" />
                <div className="p-8">
                     <h3 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">{amenity.name}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{amenity.details}</p>
                    {amenity.operatingHours && (
                        <p className="font-semibold text-brand-dark mt-6 border-t border-gray-200 pt-4">
                            Çalışma Saatleri: <span className="font-normal text-gray-600">{amenity.operatingHours}</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};


const Amenities: React.FC<{ onViewTour: (url: string) => void }> = ({ onViewTour }) => {
    const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);

    const featuredAmenities = AMENITIES.filter(a => a.isFeatured);
    const otherAmenities = AMENITIES.filter(a => !a.isFeatured);

    return (
        <>
            <section id="amenities" className="py-20 bg-brand-light">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-dark mb-4">Olanaklar ve Hizmetler</h2>
                        <p className="max-w-3xl mx-auto text-gray-600 text-lg">Konaklamanızı unutulmaz kılmak için tasarlanmış birinci sınıf olanaklarımızla deneyiminizi zenginleştirin.</p>
                    </div>

                    <div className="space-y-20">
                        {featuredAmenities.map((amenity, index) => (
                            <FeaturedAmenityCard 
                                key={amenity.name} 
                                amenity={amenity} 
                                onSelect={() => setSelectedAmenity(amenity)} 
                                onViewTour={onViewTour}
                                isReversed={index % 2 !== 0} 
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">Deneyiminizi Tamamlayan Ayrıcalıklar</h3>
                         <p className="max-w-3xl mx-auto text-gray-600">Konsiyerj hizmetlerinden fitness merkezine kadar her ayrıntı sizin için düşünüldü.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {otherAmenities.map((amenity, index) => (
                            <AmenityCard key={index} amenity={amenity} onSelect={() => setSelectedAmenity(amenity)} />
                        ))}
                    </div>
                </div>
            </section>

            {selectedAmenity && <AmenityModal amenity={selectedAmenity} onClose={() => setSelectedAmenity(null)} />}
            
            <style>{`
                @keyframes fade-in-fast { from { opacity: 0; } to { opacity: 1; } }
                .animate-fade-in-fast { animation: fade-in-fast 0.3s ease-in-out; }
                @keyframes slide-up { from { transform: translateY(20px) scale(0.98); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
                .animate-slide-up { animation: slide-up 0.3s ease-in-out; }
            `}</style>
        </>
    );
};

export default Amenities;