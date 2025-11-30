import React from 'react';

// FIX: Defined all necessary types used throughout the application to resolve compilation errors.
export interface Room {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  size: number;
  capacity: number;
  bedType: string;
  amenities: string[];
  fomoTag?: string;
  deal?: string;
  tourUrl?: string;
}

export interface Amenity {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
  imageUrl: string;
  details?: string;
  operatingHours?: string;
  isFeatured?: boolean;
  tourUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface DiningVenue {
    name: string;
    description: string;
    imageUrl: string;
    cuisine: string;
    operatingHours: string;
    dressCode: string;
}

export interface LocalAttraction {
    name: string;
    category: 'Tarihi Yerler' | 'Kültürel Mekanlar' | 'Alışveriş & Eğlence';
    description: string;
    imageUrl: string;
    distance: string;
}

export interface SpecialOffer {
    title: string;
    description: string;
    imageUrl: string;
    discount: string;
    validity: string;
}

export type ExperienceCategory = 'Gastronomi' | 'Kültür & Sanat' | 'Macera & keşif' | 'Rahatlama & Sağlık';

export interface Experience {
    title: string;
    category: ExperienceCategory;
    description: string;
    details: string;
    imageUrl: string;
    duration: string;
    price: string;
    highlights: string[];
    isFeatured?: boolean;
}

export interface SocialProof {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  person: string;
  action: string;
  time: string;
}

export interface Booking {
  id: number;
  confirmationNumber: string;
  guestName: string;
  checkIn: string;
  checkOut:string;
  roomType: string;
  guests: number;
  bookingDate: string;
  status: 'Beklemede' | 'Onaylandı';
}