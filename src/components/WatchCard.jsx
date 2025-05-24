import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const WatchCard = ({ watch, isWishlisted, onWishlistToggle }) => {
  const { addToCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleWishlistClick = (e) => {
    e.stopPropagation();  
    if (!currentUser) {
      navigate('/login');
    } else {
      onWishlistToggle(watch._id);
    }
  };

  const handleCardClick = () => {
    navigate(`/watch/${watch._id}`);
  };

  return (
    <div
      className="flex flex-col items-center justify-between bg-white rounded-none"
      style={{ width: '214px', height: '432px', boxShadow: 'none', border: 'none' }}
      onClick={handleCardClick}
    >
      <div className="relative w-full flex justify-center pt-4">
        <img
          src={watch.image}
          alt={watch.name}
          className="object-contain"
          style={{ height: '230px', width: 'auto', maxWidth: '180px' }}
        />
        <button
          className="absolute top-2 right-2 p-1 bg-white rounded-full z-10"
          onClick={handleWishlistClick}
          style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
        >
          {isWishlisted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500 fill-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="flex flex-col items-center w-full mt-4 p-4">
        <span className="font-bold text-base tracking-wide text-black mb-1">{watch.brand}</span>
        <span className="uppercase text-sm text-black mb-2" style={{ letterSpacing: '2px' }}>{watch.model}</span>
        <span className="font-bold text-lg text-black mb-2">₹ {watch.price.toLocaleString('en-IN')}</span>
        {watch.stock === 0 ? (
          <span className="text-sm font-medium text-red-500 mb-2">Out of Stock</span>
        ) : watch.stock > 0 && watch.stock <= 5 ? (
          <span className="text-sm font-medium text-orange-500 mb-2">Low Stock ({watch.stock} left)</span>
        ) : (
          <span className="text-sm font-medium text-green-500 mb-2">In Stock</span>
        )}
        <span className="text-base  text-[#8B2C1F] mt-2" style={{ letterSpacing: '1px' }}>
          CHECK OUR SELLING PRICE
        </span>
      </div>
    </div>
  );
};

export default WatchCard; 