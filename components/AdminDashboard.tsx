import React from 'react';
import type { Booking } from '../types';
import { CheckIcon, TrashIcon } from './icons/Icons';

interface AdminDashboardProps {
  bookings: Booking[];
  onConfirmBooking: (id: number) => void;
  onCancelBooking: (id: number) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ bookings, onConfirmBooking, onCancelBooking }) => {
  const sortedBookings = [...bookings].sort((a, b) => new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime());

  return (
    <div className="bg-brand-light min-h-screen animate-fade-in-fast">
      <div className="container mx-auto px-6 py-12 pt-28">
        <h1 className="text-4xl font-playfair font-bold text-brand-dark mb-8">Yönetici Paneli</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark">Toplam Rezervasyon: {bookings.length}</h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
          {sortedBookings.length > 0 ? (
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">Onay No</th>
                  <th scope="col" className="px-6 py-3">Müşteri Adı</th>
                  <th scope="col" className="px-6 py-3">Giriş / Çıkış</th>
                  <th scope="col" className="px-6 py-3">Oda Tipi</th>
                  <th scope="col" className="px-6 py-3">Kişi</th>
                  <th scope="col" className="px-6 py-3">Rez. Tarihi</th>
                  <th scope="col" className="px-6 py-3">Durum</th>
                  <th scope="col" className="px-6 py-3">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {sortedBookings.map((booking) => (
                  <tr key={booking.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono font-medium text-gray-900">{booking.confirmationNumber}</td>
                    <td className="px-6 py-4">{booking.guestName}</td>
                    <td className="px-6 py-4">
                        {new Date(booking.checkIn).toLocaleDateString('tr-TR')} - {new Date(booking.checkOut).toLocaleDateString('tr-TR')}
                    </td>
                    <td className="px-6 py-4">{booking.roomType}</td>
                    <td className="px-6 py-4 text-center">{booking.guests}</td>
                    <td className="px-6 py-4">{new Date(booking.bookingDate).toLocaleString('tr-TR')}</td>
                    <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'Onaylandı' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                            {booking.status}
                        </span>
                    </td>
                    <td className="px-6 py-4 flex items-center gap-2">
                      {booking.status === 'Beklemede' && (
                        <button 
                            onClick={() => onConfirmBooking(booking.id)}
                            className="text-green-600 hover:text-green-900 font-medium flex items-center gap-1"
                            title="Onayla"
                        >
                            <CheckIcon className="w-5 h-5" />
                        </button>
                      )}
                      <button 
                        onClick={() => onCancelBooking(booking.id)}
                        className="text-red-600 hover:text-red-900 font-medium"
                        title="Sil"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <p>Henüz hiç rezervasyon yok.</p>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-fast { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in-fast { animation: fade-in-fast 0.5s ease-in-out; }
      `}</style>
    </div>
  );
};

export default AdminDashboard;