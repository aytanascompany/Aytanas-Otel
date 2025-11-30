import React from 'react';
import { CloseIcon } from './icons/Icons';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourUrl: string | null;
}

const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose, tourUrl }) => {
  if (!isOpen || !tourUrl) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fade-in-fast" onClick={onClose}>
      <div 
        className="bg-brand-dark w-full h-full max-w-6xl max-h-[90vh] rounded-lg shadow-2xl relative flex flex-col overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 bg-brand-dark text-white border-b border-gray-700">
            <h3 className="font-playfair font-bold text-xl">360° Sanal Tur</h3>
             <button onClick={onClose} className="text-gray-300 hover:text-white z-10 transition">
                <CloseIcon className="w-7 h-7" />
            </button>
        </div>
        <iframe
          src={tourUrl}
          className="w-full h-full border-0"
          allowFullScreen
          title="Sanal Tur"
        ></iframe>
      </div>
       <style>{`
            @keyframes fade-in-fast { from { opacity: 0; } to { opacity: 1; } }
            .animate-fade-in-fast { animation: fade-in-fast 0.3s ease-in-out; }
        `}</style>
    </div>
  );
};

export default VirtualTourModal;