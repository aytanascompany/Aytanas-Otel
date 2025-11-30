import React, { useState, useEffect } from 'react';
import { CloseIcon, FireIcon } from './icons/Icons';
import { Booking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveBooking: (bookingData: Omit<Booking, 'id' | 'confirmationNumber' | 'bookingDate' | 'status'>) => string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onSaveBooking }) => {
  const [step, setStep] = useState(1);
  const [guestName, setGuestName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('Deluxe Queen Oda');
  const [guests, setGuests] = useState(2);
  const [latestConfirmation, setLatestConfirmation] = useState('');

  const resetForm = () => {
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    
    setGuestName('');
    setCheckIn(today);
    setCheckOut(tomorrowStr);
    setRoomType('Deluxe Queen Oda');
    setGuests(2);
  };
  
  // Set default dates when the modal opens
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = {
      guestName,
      checkIn,
      checkOut,
      roomType,
      guests,
    };
    const confirmationNumber = onSaveBooking(bookingData);
    setLatestConfirmation(confirmationNumber);
    setStep(2); // Move to confirmation step
  };
  
  const handleClose = () => {
    onClose();
    // Reset to step 1 for next time it opens, with a delay for the animation
    setTimeout(() => {
      setStep(1);
      resetForm();
    }, 300); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in-fast">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full relative transform transition-all duration-300 scale-95 animate-slide-up">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10">
          <CloseIcon className="w-6 h-6" />
        </button>
        
        {step === 1 && (
            <>
                <div className="p-8 border-b">
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-brand-dark">Rezervasyon Yap</h2>
                    <p className="text-gray-600 mt-2">Konaklamanızı planlamak için bilgileri doldurun.</p>
                </div>
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                             <label htmlFor="guestName" className="block text-sm font-medium text-gray-700">Ad Soyad</label>
                             <input type="text" id="guestName" value={guestName} onChange={(e) => setGuestName(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">Giriş Tarihi</label>
                                <input type="date" id="checkin" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary" />
                            </div>
                            <div>
                                <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">Çıkış Tarihi</label>
                                <input type="date" id="checkout" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary" />
                            </div>
                        </div>
                         <div>
                            <label htmlFor="room-type" className="block text-sm font-medium text-gray-700">Oda Tipi</label>
                            <select id="room-type" value={roomType} onChange={(e) => setRoomType(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary bg-white">
                                <option>Deluxe Queen Oda</option>
                                <option>Executive King Süit</option>
                                <option>Aile Odası</option>
                            </select>
                            <div className="flex items-center gap-2 text-sm text-red-600 font-semibold mt-2">
                                <FireIcon className="w-4 h-4" />
                                <span>Bu fiyatta sadece 3 oda kaldı!</span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Misafir Sayısı</label>
                            <input type="number" id="guests" min="1" value={guests} onChange={(e) => setGuests(Number(e.target.value))} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary" />
                        </div>
                         <div className="pt-4">
                            <button type="submit" className="w-full bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105">
                                Rezervasyon Talebi Gönder
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )}

        {step === 2 && (
             <div className="p-8 text-center">
                 <h2 className="text-2xl font-playfair font-bold text-brand-dark mb-4">Talebiniz Alındı!</h2>
                 <p className="text-gray-600 mb-2">Rezervasyon talebinizi aldık ve kaydettik. Onay için size en kısa sürede bir e-posta göndereceğiz.</p>
                  <p className="text-sm text-gray-800 bg-gray-100 p-3 rounded-md mb-6">
                    Onay Numaranız: <strong className="font-mono text-brand-primary">{latestConfirmation}</strong>
                 </p>
                 <button onClick={handleClose} className="w-full bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                    Kapat
                 </button>
            </div>
        )}
      </div>
       <style>{`
            @keyframes fade-in-fast { from { opacity: 0; } to { opacity: 1; } }
            .animate-fade-in-fast { animation: fade-in-fast 0.3s ease-in-out; }
            @keyframes slide-up { from { transform: translateY(20px) scale(0.98); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
            .animate-slide-up { animation: slide-up 0.3s ease-in-out; }
        `}</style>
    </div>
  );
};

export default BookingModal;