import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WatchCard from './WatchCard';
import { watchData, categoryDescriptions } from '../data/WatchData';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const watches = watchData[categoryId];
  const description = categoryDescriptions[categoryId];

  if (!watches) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-gray-900 mb-4">Category not found</h1>
          <button 
            onClick={() => navigate('/collections')}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Back to Collections
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {categoryId.split(/(?=[A-Z])/).join(' ')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Watch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage; 