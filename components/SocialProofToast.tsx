import React, { useEffect, useState } from 'react';
import type { SocialProof } from '../types';
import { CloseIcon } from './icons/Icons';

interface SocialProofToastProps {
    proof: SocialProof;
    onClose: () => void;
}

const SocialProofToast: React.FC<SocialProofToastProps> = ({ proof, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const Icon = proof.icon;
    
    useEffect(() => {
        // This triggers the animation on mount
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Allow time for fade-out animation before calling parent's onClose
        setTimeout(onClose, 300); 
    };

    return (
        <div 
            className={`fixed bottom-6 left-6 bg-white rounded-xl shadow-2xl w-80 p-4 flex items-start gap-4 z-50 transition-all duration-300 ease-in-out ${isVisible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-12 opacity-0'}`}
        >
            <div className="flex-shrink-0 bg-brand-secondary text-brand-primary p-3 rounded-full">
                <Icon className="w-6 h-6" />
            </div>
            <div className="flex-grow">
                <p className="text-sm text-brand-dark leading-tight">
                    <strong>{proof.person}</strong> {proof.action}
                </p>
                <p className="text-xs text-gray-500 mt-1">{proof.time}</p>
            </div>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-700 flex-shrink-0">
                <CloseIcon className="w-4 h-4" />
            </button>
        </div>
    );
};

export default SocialProofToast;