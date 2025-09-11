import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WatchCard from './WatchCard';
// import { watchData, categoryDescriptions } from '../data/WatchData'; // यह लाइन हटाई गई

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // categoryId को सही फॉर्मेट में बदलने के लिए मैपिंग
  const categoryMapping = {
    'prestigePulse': 'PRESTIGE PULSE',
    'timelessTech': 'TIMELESS TECH',
    'signatureCraft': 'SIGNATURE CRAFT',
    'premiumEssentials': 'PREMIUM ESSENTIALS',
    'eliteClassics': 'ELITE CLASSICS',
    'prestigeIcons': 'PRESTIGE ICONS',
    'masterpieces': 'MASTERPIECES',
  };

  const apiCategory = categoryMapping[categoryId];

  useEffect(() => {
    console.log('categoryId from URL:', categoryId); // Added for debugging
    console.log('Mapped apiCategory:', apiCategory); // Added for debugging
    console.log('Fetching watches for category:', apiCategory);
    
    const fetchWatches = async () => {
      try {
        const response = await fetch(`/api/watches?category=${encodeURIComponent(apiCategory)}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched watches data:', data);
        setWatches(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (apiCategory) {
      fetchWatches();
    } else {
      console.error('Invalid categoryId or apiCategory is undefined. categoryId:', categoryId); // Added for debugging
      setError(new Error('Invalid category'));
      setLoading(false);
    }
  }, [categoryId, apiCategory]);

  if (loading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  // if (error) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="text-center">
  //         <h1 className="text-2xl text-gray-900 mb-4">Error loading watches: {error.message}</h1>
  //         <button 
  //           onClick={() => navigate('/collections')}
  //           className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
  //         >
  //           Back to Collections
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  // Description अब BrandsPage में हार्डकोड किए गए हैं, यहाँ इसका उपयोग नहीं होगा
  // const description = categoryDescriptions[categoryId]; 

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {categoryId.split(/(?=[A-Z])/).join(' ')}
          </h1>
          {/* Description यहाँ से हटा दिया गया है */}
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p> */}
        </div>

        {/* Watch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.length > 0 ? (
            watches.map((watch) => (
              <WatchCard key={watch._id} watch={watch} /> // key को watch._id में बदला गया
            ))
          ) 
          : (
            <div className="text-center col-span-full">No watches found in this category.</div>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;