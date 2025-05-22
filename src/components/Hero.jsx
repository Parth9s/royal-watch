import React from 'react';
import './Hero.css'; 

const Hero = () => {
  return (
    <div className="mx-11 mt-0 ">
     
      <div className="relative aspect-[1376/550] overflow-hidden">
        <img
          src="image.png"
          alt="Description"
          className="w-full h-full object-cover object-[center_40%] shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl"
        />
      </div>
      
      <div className="text-center py-6">
        <h4 className="text-black text-2xl quote">WHERE TIME MEETS PRESTIGE</h4>
        <p className="text-gray-600 text-lg mt-2 quotep">Every detail speaks of distinction—crafted for those who move through the world with purpose, our timepieces unite impeccable craftsmanship with the timeless aura of prestige</p>
      </div>
      
    </div>
  );
};

export default Hero;