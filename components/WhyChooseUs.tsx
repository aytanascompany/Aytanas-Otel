import React from 'react';
import { MedalIcon, StarIcon, LocationMarkerIcon, SparklesIcon } from './icons/Icons';

const features = [
  {
    icon: MedalIcon,
    title: 'Ödüllü Hizmet',
    description: 'Misafir memnuniyetine olan bağlılığımızla tanınıyor, kişiye özel hizmet sunuyoruz.',
  },
  {
    icon: LocationMarkerIcon,
    title: 'Mükemmel Konum',
    description: 'Şehrin kalbinde, başlıca turistik yerlere ve iş merkezlerine kolay erişim imkanı.',
  },
  {
    icon: SparklesIcon,
    title: 'Lüks Olanaklar',
    description: 'Spa, gurme restoranlar ve modern odalarla konforunuz için her şey düşünüldü.',
  },
  {
    icon: StarIcon,
    title: '5 Yıldızlı Değerlendirme',
    description: 'Misafirlerimiz tarafından sürekli olarak en yüksek puanlarla değerlendiriliyoruz.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">Neden Mortanas Hotel?</h2>
          <p className="max-w-2xl mx-auto text-gray-600">Lüks, konfor ve unutulmaz anları bir araya getiren eşsiz bir deneyim sunuyoruz.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
                <div className="inline-block bg-brand-secondary p-4 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-brand-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
