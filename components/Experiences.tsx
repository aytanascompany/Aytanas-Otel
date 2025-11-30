import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import type { Experience } from '../types';
import { ClockIcon, TagIcon, StarIcon, CheckIcon, ArrowLeftIcon } from './icons/Icons';

interface ExperiencesProps {
  onNavigate: (target: string) => void;
}

const ExperienceCard: React.FC<{ experience: Experience; onSelect: () => void }> = ({ experience, onSelect }) => {
  return (
    <div onClick={onSelect} className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
      <div className="relative">
        <img src={experience.imageUrl} alt={experience.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-0 left-0 bg-brand-primary text-white text-xs font-bold px-4 py-1 rounded-br-lg shadow-md">
            {experience.category}
        </div>
        {experience.isFeatured && (
             <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-bl-lg shadow-md flex items-center gap-1">
                <StarIcon className="w-4 h-4" />
                <span>Misafir Favorisi</span>
            </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-playfair font-bold text-brand-dark mb-3">{experience.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{experience.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 mr-2 text-brand-primary" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center">
            <TagIcon className="w-5 h-5 mr-2 text-brand-primary" />
            <span className="font-semibold">{experience.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceDetail: React.FC<{ experience: Experience; onBack: () => void; onNavigate: (target: string) => void }> = ({ experience, onBack, onNavigate }) => {
    return (
        <div className="animate-fade-in-fast">
             {/* Hero Section for Detail */}
            <div className="relative h-[50vh] min-h-[400px]">
                 <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <img src={experience.imageUrl} alt={experience.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-12">
                     <button onClick={onBack} className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors rounded-full p-3 flex items-center gap-2">
                        <ArrowLeftIcon className="w-5 h-5" />
                    </button>
                    <p className="text-white font-semibold">{experience.category}</p>
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white shadow-lg">{experience.title}</h1>
                </div>
            </div>

            <div className="bg-white">
                <div className="container mx-auto px-6 py-16">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-playfair font-bold text-brand-dark mb-4">Deneyim Hakkında</h2>
                            <p className="text-gray-700 leading-relaxed">{experience.details}</p>

                            <h3 className="text-2xl font-playfair font-bold text-brand-dark mt-10 mb-4">Neler Dahil?</h3>
                             <ul className="space-y-3">
                                {experience.highlights.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-brand-light p-8 rounded-lg shadow-lg sticky top-24">
                                <h3 className="text-xl font-playfair font-bold text-brand-dark mb-4 border-b pb-3">Detaylar</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center">
                                        <ClockIcon className="w-6 h-6 mr-3 text-brand-primary" />
                                        <div>
                                            <p className="font-semibold text-brand-dark">Süre</p>
                                            <p className="text-gray-600">{experience.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <TagIcon className="w-6 h-6 mr-3 text-brand-primary" />
                                        <div>
                                            <p className="font-semibold text-brand-dark">Fiyat</p>
                                            <p className="text-gray-600">{experience.price}</p>
                                        </div>
                                    </div>
                                </div>
                                 <button onClick={() => onNavigate('contact')} className="w-full bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105">
                                    Bilgi Al ve Rezerve Et
                                </button>
                            </div>
                        </div>
                    </div>
                     <div className="text-center mt-16">
                        <button onClick={onBack} className="text-brand-primary font-bold hover:underline">
                           &larr; Tüm Deneyimlere Geri Dön
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Experiences: React.FC<ExperiencesProps> = ({ onNavigate }) => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const categories = ['Tümü', ...Array.from(new Set(EXPERIENCES.map(a => a.category)))];

  const filteredExperiences = activeCategory === 'Tümü' 
    ? EXPERIENCES 
    : EXPERIENCES.filter(a => a.category === activeCategory);

  if (selectedExperience) {
    return <ExperienceDetail experience={selectedExperience} onBack={() => setSelectedExperience(null)} onNavigate={onNavigate} />
  }

  return (
    <div className="bg-brand-light animate-fade-in-fast">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[300px] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="https://picsum.photos/seed/experiences-hero/1920/1080" alt="Exclusive experiences background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold">Özel Deneyimler</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">Konaklamanızı, sizin için özel olarak hazırladığımız unutulmaz anılarla zenginleştirin.</p>
        </div>
      </div>

      {/* Experiences Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
             <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">Size Özel Anlar</h2>
                <p className="text-gray-600">
                  Mortanas Hotel olarak, misafirlerimize sadece bir konaklama değil, aynı zamanda şehrin ruhunu yansıtan benzersiz deneyimler sunuyoruz. Gastronomiden sanata, maceradan dinlenmeye kadar her zevke uygun aktivitelerimizle tatilinizi unutulmaz kılın.
                </p>
            </div>
             {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-3 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                            activeCategory === category
                                ? 'bg-brand-primary text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-200 shadow-sm'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredExperiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} onSelect={() => setSelectedExperience(exp)} />
            ))}
          </div>
        </div>
      </section>
       <style>{`
            @keyframes fade-in-fast { from { opacity: 0; } to { opacity: 1; } }
            .animate-fade-in-fast { animation: fade-in-fast 0.5s ease-in-out; }
        `}</style>
    </div>
  );
};

export default Experiences;