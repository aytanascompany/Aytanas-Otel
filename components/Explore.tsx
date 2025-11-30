import React, { useState } from 'react';
import ItineraryPlanner from './ItineraryPlanner';
import { LOCAL_ATTRACTIONS } from '../constants';
import type { LocalAttraction } from '../types';
import { RouteIcon } from './icons/Icons';

const AttractionCard: React.FC<{ attraction: LocalAttraction }> = ({ attraction }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <img src={attraction.imageUrl} alt={attraction.name} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm font-semibold text-brand-primary mb-2">{attraction.category}</p>
      <h3 className="text-xl font-playfair font-bold text-brand-dark mb-3 flex-grow">{attraction.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{attraction.description}</p>
      {attraction.distance && (
        <div className="mt-auto border-t border-gray-100 pt-3 flex items-center text-sm text-gray-500">
            <RouteIcon className="w-4 h-4 mr-2 text-gray-400" />
            <span>Otelden yaklaşık {attraction.distance}</span>
        </div>
      )}
    </div>
  </div>
);

const Explore: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  
  const categories = ['Tümü', ...Array.from(new Set(LOCAL_ATTRACTIONS.map(a => a.category)))];

  const filteredAttractions = activeCategory === 'Tümü' 
    ? LOCAL_ATTRACTIONS 
    : LOCAL_ATTRACTIONS.filter(a => a.category === activeCategory);

  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
       <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="https://picsum.photos/seed/ankara-hero/1920/1080" alt="Ankara Kalesi'nden panoramik manzara" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold">Ankara'yı Keşfedin</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">Mortanas Hotel, başkentin zengin tarihini ve canlı kültürünü keşfetmek için mükemmel bir başlangıç noktasıdır.</p>
        </div>
      </div>
      
      {/* Local Attractions Section */}
      <section id="local-attractions" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">Yakın Çevredeki Güzellikler</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Otelimizden kolayca ulaşabileceğiniz, şehrin en ikonik ve büyüleyici yerlerinden bazıları.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                        activeCategory === category
                            ? 'bg-brand-primary text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-200 shadow-sm'
                    }`}
                >
                    {category}
                </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((attraction) => (
              <AttractionCard key={attraction.name} attraction={attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Planner Section */}
      <ItineraryPlanner />
    </div>
  );
};

export default Explore;