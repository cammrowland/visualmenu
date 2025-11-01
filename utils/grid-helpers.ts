
export const getGridColsClass = (size: number): string => {
  switch (size) {
    case 2: // Largest images
      return 'grid-cols-1 sm:grid-cols-2';
    case 3:
      return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    case 4:
      return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';
    case 5: // Default
      return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
    case 6: // Smallest images
      return 'grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6';
    default:
      return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
  }
};
