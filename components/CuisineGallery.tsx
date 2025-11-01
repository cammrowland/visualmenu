
import React, { useState } from 'react';
import { Cuisine, Dish } from '../types';
import DishCard from './DishCard';
import GridSizeControl from './GridSizeControl';
import { getGridColsClass } from '../utils/grid-helpers';

interface CuisineGalleryProps {
  cuisine: Cuisine;
  onBack: () => void;
  onSelectDish: (dish: Dish) => void;
  gridSize: number;
  onGridSizeChange: (newSize: number) => void;
}

const CuisineGallery: React.FC<CuisineGalleryProps> = ({ cuisine, onBack, onSelectDish, gridSize, onGridSizeChange }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...cuisine.categories];

  const filteredDishes = activeCategory === 'All'
    ? cuisine.dishes
    : cuisine.dishes.filter(dish => dish.category === activeCategory);

  return (
    <div className="animate-fade-in">
      <header className="mb-6">
        <button onClick={onBack} className="text-blue-400 hover:text-blue-300 transition mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Cuisines
        </button>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {cuisine.emoji} {cuisine.name}
              </h1>
              <p className="mt-2 text-gray-300 md:text-lg max-w-3xl">{cuisine.description}</p>
            </div>
            <GridSizeControl size={gridSize} onChange={onGridSizeChange} />
        </div>
      </header>
      
      <div className="sticky top-0 bg-gray-900 py-3 z-10 -mx-4 px-4 mb-6 border-b border-gray-700">
          <div className="flex space-x-2 overflow-x-auto whitespace-nowrap pb-2 -mb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
      </div>

      <div className={`grid ${getGridColsClass(gridSize)} gap-4 md:gap-6`}>
        {filteredDishes.map(dish => (
          <DishCard 
            key={dish.name}
            dish={dish}
            onClick={() => onSelectDish(dish)}
          />
        ))}
      </div>
    </div>
  );
};

export default CuisineGallery;