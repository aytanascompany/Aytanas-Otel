import React, { useState, useEffect } from 'react';
// FIX: Created missing Header component.
import { MenuIcon, CloseIcon } from './icons/Icons';

interface HeaderProps {
  onNavigate: (target: string) => void;
  activePage: string;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; onNavigate: (target: string) => void; isActive: boolean }> = ({ href, children, onNavigate, isActive }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate(href);
    };
    return (
        <a href={`#${href}`} onClick={handleClick} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-brand-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
            {children}
        </a>
    );
};

const Header: React.FC<HeaderProps> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { key: 'home', label: 'Ana Sayfa' },
    { key: 'rooms', label: 'Odalar' },
    { key: 'amenities', label: 'Olanaklar' },
    { key: 'dining', label: 'Yeme & İçme' },
    { key: 'gallery', label: 'Galeri' },
    { key: 'offers', label: 'Teklifler' },
    { key: 'experiences', label: 'Deneyimler' },
    { key: 'explore', label: 'Keşfet' },
    { key: 'events', label: 'Etkinlikler' },
  ];
  
  const handleNav = (target: string) => {
    onNavigate(target);
    setIsMenuOpen(false);
  }

  const getTextColor = () => {
    if (isScrolled || isMenuOpen || activePage !== 'home') {
        return '#1a202c'; // brand-dark
    }
    return '#ffffff';
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled || isMenuOpen || activePage !== 'home' ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div onClick={() => handleNav('home')} className="text-2xl font-playfair font-bold cursor-pointer" style={{color: getTextColor(), textShadow: isScrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.4)'}}>
            Mortanas Hotel
          </div>
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map(item => <NavLink key={item.key} href={item.key} onNavigate={handleNav} isActive={activePage === item.key}>{item.label}</NavLink>)}
             <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activePage === 'contact' ? 'bg-brand-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>İletişim</a>
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
             <button onClick={() => handleNav('my-bookings')} className="text-sm font-medium text-gray-700 hover:text-brand-primary transition">Rezervasyonlarım</button>
             <button onClick={() => handleNav('booking')} className="bg-brand-primary hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-full text-sm transition duration-300 transform hover:scale-105">Rezervasyon Yap</button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{color: getTextColor()}}>
              {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white shadow-lg absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map(item => <a key={item.key} href={`#${item.key}`} onClick={(e) => { e.preventDefault(); handleNav(item.key); }} className={`block px-4 py-3 rounded-md text-base font-medium ${activePage === item.key ? 'bg-brand-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>{item.label}</a>)}
             <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} className={`block px-4 py-3 rounded-md text-base font-medium ${activePage === 'contact' ? 'bg-brand-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>İletişim</a>
            <div className="border-t pt-4 space-y-2">
                <a href="#my-bookings" onClick={(e) => { e.preventDefault(); handleNav('my-bookings'); }} className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Rezervasyonlarım</a>
                <button onClick={() => handleNav('booking')} className="w-full text-left bg-brand-primary text-white font-bold py-3 px-4 rounded-md">Rezervasyon Yap</button>
            </div>
          </nav>
        </div>
    </header>
  );
};

export default Header;
