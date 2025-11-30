import React from 'react';
import { SPECIAL_OFFERS } from '../constants';
import type { SpecialOffer } from '../types';

interface OffersPageProps {
  onBookNow: () => void;
}

const OfferCard: React.FC<{ offer: SpecialOffer; onBookNow: () => void }> = ({ offer, onBookNow }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative">
        <img src={offer.imageUrl} alt={offer.title} className="w-full h-64 object-cover" />
        <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 font-bold px-4 py-1 rounded-bl-lg shadow-md">
            {offer.discount}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-playfair font-bold text-brand-dark mb-2">{offer.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{offer.validity}</p>
        <p className="text-gray-600 mb-6 flex-grow">{offer.description}</p>
        <div className="mt-auto">
          <button onClick={onBookNow} className="w-full bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
            Bu Teklifi Rezerve Et
          </button>
        </div>
      </div>
    </div>
  );
};


const OffersPage: React.FC<OffersPageProps> = ({ onBookNow }) => {
  return (
    <div className="bg-brand-light animate-fade-in-fast">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[300px] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="https://picsum.photos/seed/offers-hero/1920/1080" alt="Special offers background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold">Özel Teklifler</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">Konaklamanızı daha da özel kılacak paketlerimizi keşfedin.</p>
        </div>
      </div>

      {/* Offers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIAL_OFFERS.map((offer, index) => (
              <OfferCard key={index} offer={offer} onBookNow={onBookNow} />
            ))}
          </div>
        </div>
      </section>
       <style>{`
            @keyframes fade-in-fast { from { opacity: 0; } to { opacity: 1; } }
            .animate-fade-in-fast { animation: fade-in-fast 0.5s ease-in-out; }
        `}</style>
    </div>
  );
};

export default OffersPage;
