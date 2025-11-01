import React from 'react';
import { Dish } from '../types';

interface DishModalProps {
  dish: Dish;
  onClose: () => void;
}

const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-gray-900 bg-opacity-95 flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full h-full flex flex-col lg:flex-row items-stretch"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white bg-gray-700/50 rounded-full h-10 w-10 flex items-center justify-center text-2xl hover:bg-gray-600/50 transition z-20"
          aria-label="Close"
        >
          &times;
        </button>
        
        {/* Image Container */}
        <div className="w-full lg:w-2/3 h-1/2 lg:h-full bg-black flex items-center justify-center p-4">
            <img 
                src={dish.image} 
                alt={dish.name} 
                className="max-w-full max-h-full object-contain"
            />
        </div>

        {/* Details Container */}
        <div className="w-full lg:w-1/3 h-1/2 lg:h-full p-8 overflow-y-auto bg-gray-800 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{dish.name}</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-4 font-light italic">{dish.summary}</p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">{dish.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DishModal;