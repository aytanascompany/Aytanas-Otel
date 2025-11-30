import React from 'react';
import type { Booking } from '../types';
import { CalendarIcon, UsersIcon, BedIcon, TrashIcon } from './icons/Icons';

interface MyBookingsProps {
  bookings: Booking[];
  onCancelBooking: (id: number) => void;
  onNavigate: (target: string) => void;
}

const BookingCard: React.FC<{ booking: Booking; onCancelBooking: (id: number) => void }> = ({ booking, onCancelBooking }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-brand-dark text-white p-4">
                <p className="text-sm">Onay Numaranız:</p>
                <p className="font-bold font-mono text-lg">{booking.confirmationNumber}</p>
            </div>
            <div className="p-6 space-y-4">
                <div className="flex items-center text-gray-700">
                    <CalendarIcon className="w-6 h-6 mr-3 text-brand-primary" />
                    <div>
                        <p className="font-semibold">Giriş: <span className="font-normal">{new Date(booking.checkIn).toLocaleDateString('tr-TR')}</span></p>
                        <p className="font-semibold">Çıkış: <span className="font-normal">{new Date(booking.checkOut).toLocaleDateString('tr-TR')}</span></p>
                    </div>
                </div>
                 <div className="flex items-center text-gray-700">
                    <BedIcon className="w-6 h-6 mr-3 text-brand-primary" />
                    <p><strong className="font-semibold">Oda:</strong> {booking.roomType}</p>
                </div>
                 <div className="flex items-center text-gray-700">
                    <UsersIcon className="w-6 h-6 mr-3 text-brand-primary" />
                    <p><strong className="font-semibold">Misafir:</strong> {booking.guests} kişi</p>
                </div>
            </div>
            <div className="p-4 bg-gray-50 border-t">
                <button
                    onClick={() => onCancelBooking(booking.id)}
                    className="w-full flex items-center justify-center gap-2 text-sm text-red-600 font-semibold hover:bg-red-100 p-2 rounded-md transition-colors"
                >
                    <TrashIcon className="w-5 h-5" />
                    <span>Rezervasyonu İptal Et</span>
                </button>
            </div>
        </div>
    );
};

const MyBookings: React.FC<MyBookingsProps> = ({ bookings, onCancelBooking, onNavigate }) => {
  return (
    <div className="bg-brand-light animate-fade-in-fast min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[300px] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="https://picsum.photos/seed/my-bookings-hero/1920/1080" alt="Hotel lobby background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold">Rezervasyonlarım</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">Konaklama detaylarınızı burada görüntüleyin ve yönetin.</p>
        </div>
      </div>

      {/* Bookings Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {bookings.length > 0 ? (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} onCancelBooking={onCancelBooking} />
                ))}
             </div>
          ) : (
            <div className="text-center bg-white p-12 rounded-lg shadow-xl max-w-2xl mx-auto">
                 <h2 className="text-2xl font-playfair font-bold text-brand-dark mb-4">Henüz Rezervasyonunuz Yok</h2>
                 <p className="text-gray-600 mb-6">
                    Görünüşe göre henüz bir konaklama planlamadınız. Sizin için mükemmel odayı bulalım!
                 </p>
                 <button 
                    onClick={() => onNavigate('booking')}
                    className="bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                    Hemen Rezervasyon Yapın
                 </button>
            </div>
          )}
        </div>
      </section>
       <style>{`
            @keyframes fade-in-fast { from { opacity: 0; } to { opacity: 1; } }
            .animate-fade-in-fast { animation: fade-in-fast 0.5s ease-in-out; }
        `}</style>
    </div>
  );
};

export default MyBookings;