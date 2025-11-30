
import React from 'react';
import { WhatsAppIcon } from './icons/Icons';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = "905540118888";
    const message = "Merhaba, Mortanas Hotel hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform hover:scale-110 transition-transform z-40"
            aria-label="WhatsApp üzerinden iletişime geçin"
        >
            <WhatsAppIcon className="w-8 h-8" />
        </a>
    );
};

export default WhatsAppButton;
