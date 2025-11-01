
import React from 'react';

interface GridSizeControlProps {
  size: number;
  onChange: (newSize: number) => void;
}

const GridSizeControl: React.FC<GridSizeControlProps> = ({ size, onChange }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-400 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
      <input
        type="range"
        min="2"
        max="6"
        step="1"
        value={size}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="w-24 md:w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        aria-label="Grid size control"
      />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  );
};

export default GridSizeControl;
