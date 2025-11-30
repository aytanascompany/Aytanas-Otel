import React, { useState } from 'react';

// A reusable form component
const BookingForm = ({ onBookingSuccess }: { onBookingSuccess: () => void }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onBookingSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">Giriş Tarihi</label>
                    <input type="date" id="checkin" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary" />
                </div>
                <div>
                    <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">Çıkış Tarihi</label>
                    <input type="date" id="checkout" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary" />
                </div>
            </div>
             <div>
                <label htmlFor="room-type" className="block text-sm font-medium text-gray-700">Oda Tipi</label>
                <select id="room-type" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary bg-white">
                    <option>Deluxe Queen Oda</option>
                    <option>Executive King Süit</option>
                    <option>Aile Odası</option>
                </select>
            </div>
            <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Misafir Sayısı</label>
                <input type="number" id="guests" min="1" defaultValue="2" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary" />
            </div>
             <div className="pt-4">
                <button type="submit" className="w-full bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105">
                    Müsaitliği Kontrol Et
                </button>
            </div>
        </form>
    );
};

// A reusable confirmation message component
const BookingConfirmation = ({ onReturnHome }: { onReturnHome: () => void }) => (
    <div className="p-8 text-center">
         <h2 className="text-2xl font-playfair font-bold text-brand-dark mb-4">Talebiniz Alındı!</h2>
         <p className="text-gray-600 mb-6">Rezervasyon talebinizi aldık. Ekibimiz müsaitliği kontrol edecek ve onay için size en kısa sürede bir e-posta gönderecektir.</p>
         <button onClick={onReturnHome} className="w-full max-w-xs mx-auto bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
            Yeni Rezervasyon Yap
         </button>
    </div>
);

/**
 * A full-page component for handling hotel reservations.
 * This component is self-contained and manages its own state for the booking process.
 * It's created to fix compilation errors from an invalid file, and is not currently
 * integrated into the main application navigation flow.
 */
const BookingPage: React.FC = () => {
    const [step, setStep] = useState(1);
    
    return (
        <section className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                    {step === 1 ? (
                        <>
                            <div className="p-8 border-b">
                                <h2 className="text-3xl font-playfair font-bold text-brand-dark">Rezervasyon Yap</h2>
                                <p className="text-gray-600 mt-2">Konaklamanızı planlamak için bilgileri doldurun.</p>
                            </div>
                            <div className="p-8">
                                <BookingForm onBookingSuccess={() => setStep(2)} />
                            </div>
                        </>
                    ) : (
                        <BookingConfirmation onReturnHome={() => setStep(1)} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default BookingPage;