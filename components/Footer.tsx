import React from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon, FacebookIcon, InstagramIcon, TwitterIcon } from './icons/Icons';

interface FooterProps {
    onNavigate: (target: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    
    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Bültenimize abone olduğunuz için teşekkür ederiz!');
    };

    return (
        <footer className="bg-brand-dark text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About */}
                    <div className="col-span-1">
                        <h3 className="text-xl font-playfair font-bold mb-4">Mortanas Hotel</h3>
                        <p className="text-gray-400">Şehrin kalbinde lüks ve konforun adresi. Unutulmaz bir deneyim için sizi bekliyoruz.</p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition"><FacebookIcon className="w-6 h-6" /></a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition"><InstagramIcon className="w-6 h-6" /></a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition"><TwitterIcon className="w-6 h-6" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-playfair font-bold mb-4">Hızlı Bağlantılar</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about');}} className="text-gray-400 hover:text-white transition">Hakkımızda</a></li>
                            <li><a href="#rooms" onClick={(e) => { e.preventDefault(); onNavigate('rooms');}} className="text-gray-400 hover:text-white transition">Odalar</a></li>
                            <li><a href="#dining" onClick={(e) => { e.preventDefault(); onNavigate('dining');}} className="text-gray-400 hover:text-white transition">Restoranlar</a></li>
                            <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact');}} className="text-gray-400 hover:text-white transition">İletişim</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-playfair font-bold mb-4">İletişim</h3>
                        <ul className="space-y-3 text-gray-400">
                             <li className="flex items-start">
                                <LocationMarkerIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <span>Söğütözü, Söğütözü Cd. No:2, 06510 Çankaya/Ankara</span>
                            </li>
                             <li className="flex items-center">
                                <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                                <a href="tel:+905540118888" className="hover:text-white">+90 554 011 8888</a>
                            </li>
                             <li className="flex items-center">
                                <MailIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                                <a href="mailto:info@mortanas.com" className="hover:text-white">info@mortanas.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-playfair font-bold mb-4">Bültenimize Abone Olun</h3>
                        <p className="text-gray-400 mb-4">Özel teklifler ve haberler için bültenimize kaydolun.</p>
                        <form onSubmit={handleNewsletterSubmit}>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="E-posta adresiniz" 
                                    required 
                                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                />
                                <button type="submit" className="bg-brand-primary text-white px-4 py-2 rounded-r-md hover:bg-violet-700 transition">
                                    Abone Ol
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Mortanas Hotel. Tüm hakları saklıdır. | <button onClick={() => onNavigate('admin-login')} className="hover:text-white underline">Yönetici Girişi</button></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;