
import React, { useState } from 'react';
import foodData from './data/foodData.ts';
import { Cuisine, Dish } from './types.ts';
import CuisineSelection from './components/CuisineSelection.tsx';
import CuisineGallery from './components/CuisineGallery.tsx';
import DishModal from './components/DishModal.tsx';

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine | null>(null);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [gridSize, setGridSize] = useState(5);

  const handleSelectCuisine = (cuisine: Cuisine) => {
    window.scrollTo(0, 0);
    setSelectedCuisine(cuisine);
  };

  const handleBackToHome = () => {
    window.scrollTo(0, 0);
    setSelectedCuisine(null);
  };

  const handleSelectDish = (dish: Dish) => {
    setSelectedDish(dish);
  };

  const handleCloseModal = () => {
    setSelectedDish(null);
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-4 md:p-8">
        {!selectedCuisine ? (
          <CuisineSelection 
            cuisines={foodData} 
            onSelectCuisine={handleSelectCuisine}
            gridSize={gridSize}
            onGridSizeChange={setGridSize}
          />
        ) : (
          <CuisineGallery 
            cuisine={selectedCuisine} 
            onBack={handleBackToHome} 
            onSelectDish={handleSelectDish}
            gridSize={gridSize}
            onGridSizeChange={setGridSize}
          />
        )}
      </main>
      
      {selectedDish && <DishModal dish={selectedDish} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;