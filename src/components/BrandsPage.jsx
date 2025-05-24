import React from 'react';
import { Link } from 'react-router-dom';
import { categoryDescriptions } from '../data/WatchData';

const BrandsPage = () => {
  const categories = [
    { id: 'prestigePulse', name: 'PRESTIGE PULSE' },
    { id: 'timelessTech', name: 'TIMELESS TECH' },
    { id: 'signatureCraft', name: 'SIGNATURE CRAFT' },
    { id: 'premiumEssentials', name: 'PREMIUM ESSENTIALS' },
    { id: 'eliteClassics', name: 'ELITE CLASSICS' },
    { id: 'prestigeIcons', name: 'PRESTIGE ICONS' },
    { id: 'masterpieces', name: 'MASTERPIECES' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Watch Collections
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {categoryDescriptions[category.id].split('.')[0]}.
                  </p>
                  <button className="text-gray-800 font-medium hover:text-gray-600 transition-colors">
                    View Collection →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage; 