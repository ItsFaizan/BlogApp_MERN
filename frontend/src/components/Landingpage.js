import React from 'react';
import { Link } from 'react-router-dom';
import landingimg from '../assets/blue-surface-with-study-tools.jpg';

export const Landingpage = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-5 text-white p-8 sm:p-16 lg:p-32"
        style={{
          backgroundImage: `url(${landingimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 text-center">
          Welcome to <span className='text-gray-600'>BlogCrafters</span>
        </h1>
        <p className="text-base sm:text-xl lg:text-3xl mb-4 text-center">
          Explore, Inspire, and Share your Stories with the World.
        </p>
        <Link to="/blog"> <button className="bg-gray-600 text-white px-6 py-3 rounded mb-4 mt-4 hover:bg-white hover:text-gray-950 hover:shadow-md transition duration-300">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
};
