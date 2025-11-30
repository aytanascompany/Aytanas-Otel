import React from 'react';
import { CloseIcon } from './icons/Icons';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({ isOpen, onClose }) => {
  return (
    <div 
        className={`fixed bottom-0 right-0 md:m-6 bg-white rounded-t-lg md:rounded-lg shadow-2xl w-full h-full md:w-[400px] md:h-[600px] flex flex-col transition-transform duration-500 ease-in-out z-50 ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
    >
      <div className="flex justify-between items-center p-4 bg-brand-light border-b border-gray-200 flex-shrink-0 rounded-t-lg">
        <h3 className="font-playfair font-bold text-xl text-brand-dark">Sesli Asistan</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 z-10 transition">
            <CloseIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-grow w-full h-full">
          <iframe
            src="https://hh-453604928185.us-west1.run.app/"
            className="w-full h-full border-0"
            allow="microphone"
            title="Sesli Yapay Zeka Asistanı"
          ></iframe>
      </div>
    </div>
  );
};

export default VoiceAssistantModal;
