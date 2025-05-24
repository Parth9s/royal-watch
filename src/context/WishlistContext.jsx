import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (watch) => {
    setWishlistItems(prevItems => {
      if (!prevItems.find(item => item.id === watch.id)) {
        return [...prevItems, watch];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (watchId) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== watchId));
  };

  const isInWishlist = (watchId) => {
    return wishlistItems.some(item => item.id === watchId);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    getWishlistCount
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
} 