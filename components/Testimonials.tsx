import React, { useState, useEffect, useRef } from 'react';
import type { Testimonial } from '../types';
import { TESTIMONIALS } from '../constants';
import { QuoteIcon, UserCircleIcon, StarIcon, ArrowLeftIcon, ArrowRightIcon } from './icons/Icons';

interface TestimonialsProps {
  onBookNow: () => void;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full relative overflow-hidden">
        <QuoteIcon className="absolute top-4 left-4 w-16 h-16 text-brand-secondary opacity-80" />
        <div className="relative z-10 flex-grow">
             <div className="mb-4">
                <StarRating rating={testimonial.rating} />
            </div>
            <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
        </div>
        <div className="flex items-center mt-auto pt-4 border-t border-gray-100 relative z-10">
            <UserCircleIcon className="w-10 h-10 text-brand-primary mr-3" />
            <div>
                <p className="font-bold text-brand-dark">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC<TestimonialsProps> = ({ onBookNow }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const testimonialsPerPage = 3;
    const numPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage);

    const pages = Array.from({ length: numPages }, (_, i) =>
        TESTIMONIALS.slice(i * testimonialsPerPage, i * testimonialsPerPage + testimonialsPerPage)
    );

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setCurrentIndex((prevIndex) => (prevIndex === numPages - 1 ? 0 : prevIndex + 1)),
            6000 // Change testimonial page every 6 seconds
        );
        return () => {
            resetTimeout();
        };
    }, [currentIndex, numPages]);

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? numPages - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === numPages - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section id="testimonials" className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">Misafirlerimiz Ne Diyor?</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">Mortanas Hotel'i seçen mutlu misafirlerimizin deneyimlerini okuyun.</p>
                </div>
                
                <div className="relative max-w-6xl mx-auto">
                     <div className="overflow-hidden relative">
                         <div
                            className="flex transition-transform ease-in-out duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {pages.map((page, pageIndex) => (
                                <div key={pageIndex} className="w-full flex-shrink-0 p-1">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {page.map((testimonial, testimonialIndex) => (
                                            <TestimonialCard key={testimonialIndex} testimonial={testimonial} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button onClick={prevSlide} aria-label="Önceki yorumlar" className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition z-10">
                        <ArrowLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <button onClick={nextSlide} aria-label="Sonraki yorumlar" className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition z-10">
                        <ArrowRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    
                    {/* Dot Indicators */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {Array.from({ length: numPages }).map((_, slideIndex) => (
                            <button
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-brand-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Yorum sayfası ${slideIndex + 1}'e git`}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="text-center mt-20 bg-white p-12 rounded-lg shadow-xl">
                    <h3 className="text-2xl font-playfair font-bold text-brand-dark mb-4">Siz de Unutulmaz Bir Deneyim Yaşayın</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                      Binlerce memnun misafirimiz arasına katılın. Hayalinizdeki tatil sadece bir tık uzağınızda.
                    </p>
                    <button 
                      onClick={onBookNow}
                      className="bg-brand-primary hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                      Hemen Rezervasyon Yapın
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;