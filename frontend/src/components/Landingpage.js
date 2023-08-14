import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import landingimg from '../assets/blue-surface-with-study-tools.jpg';

export const Landingpage = () => {
    const [customerinfo, setCustomerinfo] = useState(null);
    const [cookies] = useCookies(['accessToken']);

    useEffect(() => {
      const fetchUserInfo = async () => {
        try {
          const response = await fetch('/backend/users/get_user_info', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
               Authorization: `Bearer ${cookies.accessToken}`,
              
            },
          });
          
          const data = await response.json();
          setCustomerinfo(data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchUserInfo();
    }, [cookies.accessToken]);
 
  return (
    <div>
 {customerinfo === null ? (
        <p>Loading...</p>
      ) : (
        <div className="relative">
    <div className="relative">
        <img className="w-full h-full object-cover" src={landingimg} alt="landing" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-10 text-white p-8 sm:p-16 lg:p-32">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4">Welcome to <span className='text-gray-600'>BlogCrafters</span></h1>
            <p className="text-lg sm:text-2xl lg:text-4xl mb-4 text-center">Explore, Inspire, and Share your Stories with the World.</p>
            <button className="bg-gray-600 text-white px-6 py-3 rounded mb-4 mt-4 hover:bg-white hover:text-gray-950 hover:shadow-md transition duration-300">
                <Link to="/">Get Started</Link>
            </button>
        </div>
    </div>
</div>



      )}
    </div>
  )
}
