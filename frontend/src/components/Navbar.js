import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center px-4 text-gray-600 shadow-md z-10'>
      <ul className={`md:flex font-bold space-x-8 ${!nav ? 'hidden' : 'md:flex'}`}>
        <li>
          <Link to="/" onClick={handleClick} className="hover:text-white transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/category/sports" onClick={handleClick} className="hover:text-white transition-colors" >Sports</Link>
        </li>
        <li>
          <Link to="/category/technology" onClick={handleClick} className="hover:text-white transition-colors">Technology</Link>
        </li>
        <li>
          <Link to="/category/general" onClick={handleClick} className="hover:text-white transition-colors">General</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick} className="hover:text-white transition-colors">Contact</Link>
        </li>
      </ul>

      <div className='md:hidden z-10 ml-auto'>
        <div onClick={handleClick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'md:hidden absolute top-0 left-0 w-full h-screen bg-[#b8def2] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/" className="hover:text-white transition-colors">Home</Link> </li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/category/sports" className="hover:text-white transition-colors">Sports</Link> </li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/category/technology" className="hover:text-white transition-colors">Technology</Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/category/general" className="hover:text-white transition-colors">General</Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
      </ul>
    </div>
  );
};
