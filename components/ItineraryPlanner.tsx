import React, { useState, useCallback } from 'react';
import { generateItinerary } from '../services/geminiService';
// FIX: Corrected import path for Icons.
import { SparklesIcon, MapIcon } from './icons/Icons';

// Simple Markdown parser to convert text to styled JSX
const parseInlineMarkdown = (line: string): React.ReactNode => {
    // Split by bold syntax (**text**)
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold text-brand-dark">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

const parseMarkdown = (markdown: string): React.ReactNode[] => {
  const elements: React.ReactNode[] = [];
  if (!markdown) return elements;

  const lines = markdown.split('\n');
  let inList = false;
  let listItems: React.ReactNode[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(<ul key={`ul-${elements.length}`} className="space-y-2 pl-5 list-disc">{listItems}</ul>);
      listItems = [];
    }
    inList = false;
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    if (trimmedLine === '') {
      flushList();
      return;
    }

    if (trimmedLine.startsWith('## ')) {
      flushList();
      elements.push(<h4 key={index} className="text-xl font-playfair font-bold text-brand-dark mt-6 mb-3 border-b border-brand-secondary pb-2">{trimmedLine.substring(3)}</h4>);
      return;
    }

    if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
      if (!inList) {
        inList = true;
      }
      listItems.push(<li key={index} className="text-gray-700 leading-relaxed">{parseInlineMarkdown(trimmedLine.substring(2))}</li>);
      return;
    }
    
    flushList();
    elements.push(<p key={index} className="my-2 text-gray-700 leading-relaxed">{parseInlineMarkdown(trimmedLine)}</p>);
  });

  flushList();
  return elements;
};


const ItineraryPlanner = () => {
  const [days, setDays] = useState(3);
  const [interests, setInterests] = useState('müzeler, yerel yemekler, tarihi yerler');
  const [city, setCity] = useState('Ankara');
  const [itinerary, setItinerary] = useState<React.ReactNode[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = useCallback(async () => {
    if (!interests.trim() || !city.trim()) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }
    setLoading(true);
    setError('');
    setItinerary(null);
    try {
      const result = await generateItinerary(days, interests, city);
      const formattedResult = parseMarkdown(result);
      setItinerary(formattedResult);
    } catch (err) {
      setError('Seyahat programı oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [days, interests, city]);

  const ItineraryDisplay = () => {
    if (loading) {
      return (
        <div className="text-center p-8 flex flex-col items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
          <p className="mt-4 font-semibold text-brand-dark">Yapay zeka sizin için en iyi planı hazırlıyor...</p>
          <p className="text-sm text-gray-500">Bu işlem birkaç saniye sürebilir.</p>
        </div>
      );
    }
    if (error) {
      return <div className="p-6 text-red-600 bg-red-50 rounded-lg">{error}</div>;
    }
    if (itinerary) {
      return <div className="prose max-w-none">{itinerary}</div>;
    }
    return (
      <div className="text-center p-8 flex flex-col items-center justify-center h-full text-gray-500">
        <MapIcon className="w-16 h-16 mb-4 text-gray-300" />
        <h3 className="font-semibold text-lg text-brand-dark">Maceranız burada başlıyor!</h3>
        <p>Bilgileri girin ve size özel seyahat planınızı oluşturalım.</p>
      </div>
    );
  };

  return (
    <section id="planner" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-8 md:p-12 lg:flex lg:items-start lg:gap-12">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4 flex items-center gap-3">
              <SparklesIcon className="w-8 h-8 text-brand-primary" />
              Yapay Zeka Planlayıcısı
            </h2>
            <p className="text-gray-600 mb-6">Maceranızı kişiselleştirin. İlgi alanlarınızı bize bildirin, sizin için özel bir seyahat programı oluşturalım.</p>
            <div className="space-y-4 bg-white/50 p-6 rounded-lg shadow-inner">
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700">Şehir</label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary transition"
                  placeholder="örn. İstanbul"
                />
              </div>
              <div>
                <label htmlFor="days" className="block text-sm font-semibold text-gray-700">Gün Sayısı: <span className="font-bold text-brand-primary">{days}</span></label>
                <input
                  type="range"
                  id="days"
                  min="1"
                  max="10"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
              </div>
              <div>
                <label htmlFor="interests" className="block text-sm font-semibold text-gray-700">İlgi Alanları</label>
                <input
                  type="text"
                  id="interests"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-brand-primary focus:border-brand-primary transition"
                  placeholder="örn. sanat, yemek, doğa"
                />
              </div>
              <button
                type="button"
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {loading ? 'Oluşturuluyor...' : 'Program Oluştur'}
              </button>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="bg-white/70 rounded-lg h-[32rem] overflow-y-auto border border-gray-200 shadow-lg p-6">
               <ItineraryDisplay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItineraryPlanner;