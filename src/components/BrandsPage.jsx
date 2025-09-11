import React from 'react';
import { Link } from 'react-router-dom';



const BrandsPage = () => {
  const categories = [
    { id: 'prestigePulse', name: 'PRESTIGE PULSE', description: 'Luxury watches with cutting-edge technology.' },
    { id: 'timelessTech', name: 'TIMELESS TECH', description: 'Innovate watches with advanced features.' },
    { id: 'signatureCraft', name: 'SIGNATURE CRAFT', description: 'Handcrafted watches with unique designs.' },
    { id: 'premiumEssentials', name: 'PREMIUM ESSENTIALS', description: 'Essential watches for everyday wear.' },
    { id: 'eliteClassics', name: 'ELITE CLASSICS', description: 'Classic watches with timeless appeal.' },
    { id: 'prestigeIcons', name: 'PRESTIGE ICONS', description: 'Iconic watches from renowned brands.' },
    { id: 'masterpieces', name: 'MASTERPIECES', description: 'Exceptional watches that are true works of art.' }
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
                    {category.description}
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