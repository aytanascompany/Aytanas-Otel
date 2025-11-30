

import React, { useState, useEffect } from 'react';

// Import types
import type { Booking, SocialProof } from './types';
import { SOCIAL_PROOFS } from './constants';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Dining from './components/Dining';
import GalleryPage from './components/GalleryPage';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Explore from './components/Explore';
import Events from './components/Events';
import OffersPage from './components/OffersPage';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import MyBookings from './components/MyBookings';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import VirtualTourModal from './components/VirtualTourModal';
import VoiceAssistantModal from './components/VoiceAssistantModal';
import Chatbot from './components/Chatbot';
import SocialProofToast from './components/SocialProofToast';
import WhatsAppButton from './components/WhatsAppButton';
import { MicrophoneIcon } from './components/icons/Icons';

// Mock some initial bookings for demonstration
const initialBookings: Booking[] = [
  {
    id: 1,
    confirmationNumber: 'MH20240721A',
    guestName: 'Ayşe Yılmaz',
    checkIn: '2024-08-10',
    checkOut: '2024-08-15',
    roomType: 'Executive King Süit',
    guests: 2,
    bookingDate: '2024-07-21T10:00:00Z',
    status: 'Onaylandı',
  },
  {
    id: 2,
    confirmationNumber: 'MH20240722B',
    guestName: 'Mehmet Öztürk',
    checkIn: '2024-08-12',
    checkOut: '2024-08-14',
    roomType: 'Deluxe Queen Oda',
    guests: 1,
    bookingDate: '2024-07-22T14:30:00Z',
    status: 'Beklemede',
  },
];


const App: React.FC = () => {
    const [activePage, setActivePage] = useState('home');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [isTourModalOpen, setIsTourModalOpen] = useState(false);
    const [isVoiceAssistantOpen, setIsVoiceAssistantOpen] = useState(false);
    const [tourUrl, setTourUrl] = useState<string | null>(null);
    const [bookings, setBookings] = useState<Booking[]>(initialBookings);
    const [currentSocialProof, setCurrentSocialProof] = useState<SocialProof | null>(null);

    const scrollToSection = (id: string) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80; // Height of the sticky header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    const handleNavigate = (target: string) => {
        const singlePageSections = ['home', 'rooms', 'amenities', 'dining', 'contact', 'about'];
        
        if (target === 'booking') {
            setIsBookingModalOpen(true);
            return;
        }

        if (singlePageSections.includes(target)) {
            setActivePage('home');
            // Use timeout to ensure the home page is rendered before scrolling
            setTimeout(() => scrollToSection(target), 100);
        } else {
            window.scrollTo(0, 0);
            setActivePage(target);
        }
    };

    const handleViewTour = (url: string) => {
        setTourUrl(url);
        setIsTourModalOpen(true);
    };

    const handleSaveBooking = (bookingData: Omit<Booking, 'id' | 'confirmationNumber' | 'bookingDate' | 'status'>): string => {
        const confirmationNumber = `MH${Date.now()}`.slice(0, 10);
        const newBooking: Booking = {
            ...bookingData,
            id: bookings.length > 0 ? Math.max(...bookings.map(b => b.id)) + 1 : 1,
            confirmationNumber,
            bookingDate: new Date().toISOString(),
            status: 'Beklemede'
        };
        setBookings(prev => [...prev, newBooking]);
        return confirmationNumber;
    };
    
    const handleCancelBooking = (id: number) => {
        if (window.confirm("Bu rezervasyonu iptal etmek istediğinizden emin misiniz?")) {
            setBookings(prev => prev.filter(b => b.id !== id));
        }
    };

    const handleConfirmBooking = (id: number) => {
        setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'Onaylandı' } : b));
    };

    // Social proof toast logic
    useEffect(() => {
        if (activePage !== 'home') return; // Only show on home page

        const showToast = () => {
            const randomIndex = Math.floor(Math.random() * SOCIAL_PROOFS.length);
            setCurrentSocialProof(SOCIAL_PROOFS[randomIndex]);
        };
        
        // Show first toast after a delay
        const initialTimeout = setTimeout(showToast, 8000);

        const interval = setInterval(() => {
            // first fade out, then show new one
            setCurrentSocialProof(null);
            setTimeout(showToast, 500);
        }, 12000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, [activePage]);

    const HomePage = () => (
        <>
            <Hero onNavigate={handleNavigate} />
            <div id="about"><About /></div>
            <WhyChooseUs />
            <div id="rooms"><Rooms onBookNow={() => setIsBookingModalOpen(true)} onViewTour={handleViewTour} /></div>
            <div id="amenities"><Amenities onViewTour={handleViewTour} /></div>
            <div id="dining"><Dining onBookNow={() => setIsBookingModalOpen(true)} /></div>
            <Testimonials onBookNow={() => setIsBookingModalOpen(true)} />
            <div id="contact"><Contact /></div>
        </>
    );

    const renderPage = () => {
        switch (activePage) {
            case 'home': return <HomePage />;
            case 'rooms':
            case 'amenities':
            case 'dining':
            case 'contact':
                // These are sections on the home page, handleNavigate scrolls to them.
                // If accessed directly, show home page.
                return <HomePage />;
            case 'gallery': return <GalleryPage />;
            case 'offers': return <OffersPage onBookNow={() => setIsBookingModalOpen(true)} />;
            case 'experiences': return <Experiences onNavigate={handleNavigate} />;
            case 'explore': return <Explore />;
            case 'events': return <Events onNavigate={handleNavigate} />;
            case 'my-bookings': return <MyBookings bookings={bookings} onCancelBooking={handleCancelBooking} onNavigate={handleNavigate} />;
            case 'admin-login': // Redirect to dashboard for simplicity
            case 'admin-dashboard': 
                return <AdminDashboard bookings={bookings} onConfirmBooking={handleConfirmBooking} onCancelBooking={handleCancelBooking} />;
            default: return <HomePage />;
        }
    };

    return (
        <>
            <Header onNavigate={handleNavigate} activePage={activePage} />
            <main>{renderPage()}</main>
            <Footer onNavigate={handleNavigate} />
            
            {/* Modals and Global Components */}
            <BookingModal 
                isOpen={isBookingModalOpen} 
                onClose={() => setIsBookingModalOpen(false)} 
                onSaveBooking={handleSaveBooking}
            />
            <VirtualTourModal
                isOpen={isTourModalOpen}
                onClose={() => setIsTourModalOpen(false)}
                tourUrl={tourUrl}
            />
             <VoiceAssistantModal
                isOpen={isVoiceAssistantOpen}
                onClose={() => setIsVoiceAssistantOpen(false)}
            />
            {currentSocialProof && (
                <SocialProofToast 
                    key={Date.now()} // Use key to re-mount and re-trigger animation
                    proof={currentSocialProof} 
                    onClose={() => setCurrentSocialProof(null)} 
                />
            )}
            <Chatbot onBookNow={() => setIsBookingModalOpen(true)} />
             <button
                onClick={() => setIsVoiceAssistantOpen(true)}
                className="fixed bottom-44 right-6 bg-brand-primary text-white p-4 rounded-full shadow-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transform hover:scale-110 transition-transform z-40"
                aria-label="Sesli asistanı aç"
            >
                <MicrophoneIcon className="w-8 h-8" />
            </button>
            <WhatsAppButton />
        </>
    );
};

export default App;