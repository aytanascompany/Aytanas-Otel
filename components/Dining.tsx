import React from 'react';
import { DINING_VENUES } from '../constants';
import type { DiningVenue } from '../types';
import { ChefHatIcon, ShirtIcon, ClockIcon, ArrowRightIcon } from './icons/Icons';


interface DiningProps {
  onBookNow: () => void;
}

const VenueCard: React.FC<{ venue: DiningVenue, onBookNow: () => void, isReversed?: boolean }> = ({ venue, onBookNow, isReversed = false }) => (
  <div className="group bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 items-center gap-8 md:gap-0">
    <div className={`overflow-hidden ${isReversed ? 'md:order-2' : ''}`}>
      <img src={venue.imageUrl} alt={venue.name} className="w-full h-80 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className={`p-8 md:p-12 ${isReversed ? 'md:order-1' : ''}`}>
      <p className="inline-block bg-brand-secondary text-brand-dark font-semibold px-4 py-1 rounded-full text-sm mb-4">{venue.cuisine}</p>
      <h3 className="text-4xl font-playfair font-bold text-brand-dark mb-4">{venue.name}</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">{venue.description}</p>
      
      <div className="space-y-4 text-gray-700 mb-8">
        <div className="flex items-center">
            <ChefHatIcon className="w-6 h-6 mr-3 text-brand-primary flex-shrink-0" />
            <div>
              <strong className="block text-brand-dark text-sm">Mutfak</strong>
              <span>{venue.cuisine}</span>
            </div>
        </div>
        <div className="flex items-center">
            <ShirtIcon className="w-6 h-6 mr-3 text-brand-primary flex-shrink-0" />
            <div>
              <strong className="block text-brand-dark text-sm">Kıyafet Kodu</strong>
              <span>{venue.dressCode}</span>
            </div>
        </div>
        <div className="flex items-center">
            <ClockIcon className="w-6 h-6 mr-3 text-brand-primary flex-shrink-0" />
            <div>
              <strong className="block text-brand-dark text-sm">Çalışma Saatleri</strong>
              <span>{venue.operatingHours}</span>
            </div>
        </div>
      </div>

      <button onClick={onBookNow} className="inline-flex items-center gap-2 bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
        <span>Masa Ayırt</span>
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const Dining: React.FC<DiningProps> = ({ onBookNow }) => {
  return (
    <section id="dining" className="py-20 bg-brand-light relative overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-5" 
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-zebra-3d.png')" }}
        ></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-dark mb-4">Yeme & İçme</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Damak zevkinize hitap eden lezzet yolculuklarına çıkın. Mortanas Hotel, her anınıza eşlik edecek eşsiz gurme deneyimleri sunar.
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {DINING_VENUES.map((venue, index) => (
            <VenueCard key={venue.name} venue={venue} onBookNow={onBookNow} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dining;