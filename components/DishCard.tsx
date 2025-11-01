
import React from 'react';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
  onClick: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onClick }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group flex flex-col"
      onClick={onClick}
    >
      <div className="aspect-square w-full">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-3 flex-grow">
        <h3 className="font-semibold text-white text-sm md:text-base leading-tight">
          {dish.name}
        </h3>
      </div>
    </div>
  );
};

export default DishCard;
