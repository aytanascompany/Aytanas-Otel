import React from 'react';
// FIX: Corrected import path for Icons.
import { PhoneIcon, MailIcon, LocationMarkerIcon } from './icons/Icons';

const Contact = () => {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mesajınız için teşekkür ederiz! En kısa sürede sizinle iletişime geçeceğiz.');
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">Bize Ulaşın</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">Sorularınız, talepleriniz veya geri bildirimleriniz için buradayız. Aşağıdaki formu kullanarak veya iletişim bilgilerimiz aracılığıyla bizimle iletişime geçebilirsiniz.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-playfair font-bold text-brand-dark mb-4">İletişim Bilgileri</h3>
                            <div className="space-y-4 text-gray-700">
                                <p className="flex items-center">
                                    <LocationMarkerIcon className="w-6 h-6 mr-3 text-brand-primary" />
                                    <span>Söğütözü, Söğütözü Cd. No:2, 06510 Çankaya/Ankara</span>
                                </p>
                                <p className="flex items-center">
                                    <PhoneIcon className="w-6 h-6 mr-3 text-brand-primary" />
                                    <a href="tel:+905540118888" className="hover:text-brand-primary">+90 554 011 8888</a>
                                </p>
                                <p className="flex items-center">
                                    <MailIcon className="w-6 h-6 mr-3 text-brand-primary" />
                                    <a href="mailto:info@mortanas.com" className="hover:text-brand-primary">info@mortanas.com</a>
                                </p>
                            </div>
                        </div>
                        <div>
                             <h3 className="text-2xl font-playfair font-bold text-brand-dark mb-4">Konumumuz</h3>
                             <div className="rounded-lg overflow-hidden shadow-xl">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.2836440645765!2d32.79891229047275!3d39.912668198104974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d348b24d0d5bd3%3A0x10c842d2b3be1d6!2sKo%C3%A7%20Kuleleri!5e0!3m2!1str!2str!4v1761254761183!5m2!1str!2str" 
                                    className="w-full h-80 md:h-96"
                                    style={{ border: 0 }} 
                                    allowFullScreen={true} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Otel Konumu Haritası"
                                ></iframe>
                             </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-brand-light p-8 rounded-lg shadow-xl">
                         <h3 className="text-2xl font-playfair font-bold text-brand-dark mb-6">Mesaj Gönderin</h3>
                         <form onSubmit={handleSubmit} className="space-y-6">
                             <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Adınız</label>
                                <input type="text" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta Adresiniz</label>
                                <input type="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesajınız</label>
                                <textarea id="message" rows={5} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105">
                                    Gönder
                                </button>
                            </div>
                         </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;