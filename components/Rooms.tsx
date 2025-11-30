import React from 'react';
import { ROOMS } from '../constants';
import type { Room } from '../types';
import { FireIcon, CubeIcon } from './icons/Icons';

interface RoomsProps {
  onBookNow: () => void;
  onViewTour: (url: string) => void;
}

const RoomCard: React.FC<{ room: Room; onBookNow: () => void; onViewTour: (url: string) => void; }> = ({ room, onBookNow, onViewTour }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative">
        <img src={room.imageUrl} alt={room.name} className="w-full h-60 object-cover" />
        {room.deal && (
            <div className="absolute top-0 left-0 bg-brand-primary text-white text-xs font-bold px-4 py-1 rounded-br-lg shadow-md">
                {room.deal}
            </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-playfair font-bold text-brand-dark">{room.name}</h3>
        </div>
         {room.fomoTag && (
            <div className="flex items-center gap-2 text-sm text-red-600 font-semibold mb-3">
                <FireIcon className="w-4 h-4" />
                <span>{room.fomoTag}</span>
            </div>
        )}
        <p className="text-gray-600 mb-4 flex-grow">{room.description}</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 mb-4">
          <p><strong>Boyut:</strong> {room.size} m²</p>
          <p><strong>Kapasite:</strong> {room.capacity} kişi</p>
          <p><strong>Yatak:</strong> {room.bedType}</p>
        </div>
        <div className="border-t border-brand-secondary pt-4 mt-auto">
          <p className="font-bold text-2xl text-brand-primary mb-4">${room.price} <span className="text-sm font-normal text-gray-500">/ gece</span></p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button onClick={onBookNow} className="flex-1 bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105">
                Rezervasyon Yap
            </button>
            {room.tourUrl && (
                <button onClick={() => onViewTour(room.tourUrl!)} className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                    <CubeIcon className="w-5 h-5" />
                    <span>360° Tur</span>
                </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Rooms: React.FC<RoomsProps> = ({ onBookNow, onViewTour }) => {
  return (
    <section id="rooms" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">Odalarımız ve Süitlerimiz</h2>
          <p className="max-w-2xl mx-auto text-gray-600">Her biri konfor ve zarafetle tasarlanmış, ihtiyaçlarınıza uygun mükemmel alanı bulun.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <RoomCard key={room.name} room={room} onBookNow={onBookNow} onViewTour={onViewTour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;