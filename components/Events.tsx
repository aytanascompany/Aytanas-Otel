import React from 'react';

interface EventsProps {
  onNavigate: (page: string) => void;
}

const Events: React.FC<EventsProps> = ({ onNavigate }) => {
  return (
    <section id="events" className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="https://picsum.photos/seed/events-hero/1920/1080" alt="Elegant wedding setup" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold">Düğün & Etkinlikler</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">Hayatınızın en özel anlarını unutulmaz kılın.</p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-6">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">Mükemmellik Sanatı</h2>
            <p className="text-gray-600">
              Mortanas Hotel, zarif mekanları, kişiye özel hizmet anlayışı ve gurme lezzetleriyle her türlü etkinliğiniz için mükemmel bir atmosfer sunar. Hayalinizdeki düğünden prestijli kurumsal toplantılara kadar, her detayı sizin için düşünüyoruz.
            </p>
          </div>

          {/* Event Types */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Unforgettable Weddings */}
            <div>
              <img src="https://picsum.photos/seed/wedding-venue/800/600" alt="Wedding ceremony" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-brand-dark mb-3">Unutulmaz Düğünler</h3>
              <p className="text-gray-600 mb-4">
                Büyüleyici balo salonumuzda veya panoramik şehir manzaralı terasımızda 'evet' deyin. Deneyimli düğün planlama ekibimiz, en küçük detaydan en büyük organizasyona kadar her adımda yanınızda olacak.
              </p>
            </div>
            
            {/* Corporate & Private Events */}
             <div className="md:order-2">
               <img src="https://picsum.photos/seed/corporate-event/800/600" alt="Corporate meeting" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-brand-dark mb-3">Kurumsal ve Özel Etkinlikler</h3>
              <p className="text-gray-600 mb-4">
                Son teknoloji ile donatılmış toplantı odalarımız ve esnek etkinlik alanlarımız, konferanslar, lansmanlar veya özel kutlamalar için idealdir. Profesyonel ekibimiz, etkinliğinizin kusursuz geçmesini sağlar.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 bg-brand-light p-12 rounded-lg">
            <h3 className="text-2xl font-playfair font-bold text-brand-dark mb-4">Etkinliğinizi Planlamaya Başlayın</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Hayalinizdeki etkinliği gerçeğe dönüştürmemize izin verin. Detaylı bilgi ve teklif almak için bizimle iletişime geçin.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              Teklif Alın
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;