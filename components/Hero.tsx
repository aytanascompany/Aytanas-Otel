import React, { useState, useEffect } from 'react';

// Define the structure for a slide
interface Slide {
  image: string;
  headline: string;
  subtext: string;
  tagline?: string;
}

// Create slide data
const slides: Slide[] = [
  {
    image: 'https://picsum.photos/seed/hero/1920/1080',
    headline: 'Unutulmaz Lüksü Deneyimleyin',
    subtext: 'Zarafet ve konforun, kişiye özel hizmetle buluştuğu yer.',
    tagline: '✨ Bu hafta sonu rezervasyonlarında %20 indirim kazanın!',
  },
  {
    image: 'https://picsum.photos/seed/hero-dining/1920/1080',
    headline: 'Mükemmel Lezzet Durakları',
    subtext: 'Ödüllü şeflerimizin hazırladığı gurme menülerle damak zevkinizi şımartın.',
  },
  {
    image: 'https://picsum.photos/seed/hero-spa/1920/1080',
    headline: 'Huzur ve Yenilenme Sizi Bekliyor',
    subtext: 'Lüks spa merkezimizde bedeninizi ve ruhunuzu dinlendirin.',
  },
];

interface HeroProps {
  onNavigate: (target: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[80vh] min-h-[500px] text-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <img 
            src={slide.image} 
            alt={slide.headline} 
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[7000ms] ease-in-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`} // Ken Burns effect
          />
        </div>
      ))}
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="relative h-48 w-full flex items-center justify-center">
            {slides.map((slide, index) => (
               <div 
                 key={index}
                 className={`transition-all duration-700 ease-in-out absolute w-full ${index === currentSlide ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-5'}`}
               >
                  {slide.tagline && (
                      <div className="mb-6">
                          <div className="inline-block bg-yellow-400/90 text-gray-900 font-semibold px-6 py-2 rounded-full text-sm shadow-lg">
                              {slide.tagline}
                          </div>
                      </div>
                  )}
                  <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 leading-tight shadow-text">{slide.headline}</h1>
                  <p className="text-lg md:text-xl font-roboto font-light max-w-2xl mx-auto mb-8">{slide.subtext}</p>
              </div>
            ))}
        </div>

        <div className="mt-4">
             <button onClick={() => onNavigate('rooms')} className="bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">Konaklamanızı Planlayın</button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Slayt ${index + 1}'e git`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
          ></button>
        ))}
      </div>
       <style>{`
        .shadow-text {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
};

export default Hero;
