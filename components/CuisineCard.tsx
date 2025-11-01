
import React from 'react';
import { Cuisine } from '../types.ts';

interface CuisineCardProps {
  cuisine: Cuisine;
  onClick: () => void;
}

const CuisineCard: React.FC<CuisineCardProps> = ({ cuisine, onClick }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-square">
        <img 
          src={cuisine.image} 
          alt={cuisine.name} 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h2 className="absolute bottom-2 left-3 right-3 text-lg md:text-xl font-bold text-white text-center">
          {cuisine.emoji} {cuisine.name}
        </h2>
      </div>
    </div>
  );
};

export default CuisineCard;