
import React, { useState } from 'react';
import { Cuisine } from '../types.ts';
import CuisineCard from './CuisineCard.tsx';
import GridSizeControl from './GridSizeControl.tsx';
import { getGridColsClass } from '../utils/grid-helpers.ts';

interface CuisineSelectionProps {
  cuisines: Cuisine[];
  onSelectCuisine: (cuisine: Cuisine) => void;
  gridSize: number;
  onGridSizeChange: (newSize: number) => void;
}

const CuisineSelection: React.FC<CuisineSelectionProps> = ({ cuisines, onSelectCuisine, gridSize, onGridSizeChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCuisines = cuisines.filter(cuisine =>
    cuisine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          What Are You Looking For?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <div className="w-full md:max-w-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cuisines..."
            aria-label="Search cuisines"
            className="w-full px-5 py-3 bg-gray-800 text-white border-2 border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          />
        </div>
        <GridSizeControl size={gridSize} onChange={onGridSizeChange} />
      </div>
      <div className={`grid ${getGridColsClass(gridSize)} gap-4 md:gap-6`}>
        {filteredCuisines.length > 0 ? (
          filteredCuisines.map((cuisine) => (
            <CuisineCard 
              key={cuisine.name} 
              cuisine={cuisine} 
              onClick={() => onSelectCuisine(cuisine)} 
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 mt-8">No cuisines found.</p>
        )}
      </div>
    </div>
  );
};

export default CuisineSelection;