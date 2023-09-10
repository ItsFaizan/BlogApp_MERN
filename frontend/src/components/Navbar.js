import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';


export const Navbar = () => {
  const [cookies] = useCookies(['accessToken']);
  const handleLogout = async () =>  {
   
      const response = await fetch('/backend/user_auth/user_logout', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.accessToken}`,
  
      }});
    };

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
   <div className='fixed w-full h-[80px] flex justify-center items-center px-4 text-gray-600 shadow-md z-50 ' >
      <ul className={`md:flex font-bold space-x-8 ${!nav ? 'hidden' : 'md:flex'}`}>
        <li>
          <Link to="/landingpage" onClick={handleClick} className="hover:text-white transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/createblog" onClick={handleClick} className="hover:text-white transition-colors" >Create Blog</Link>
        </li>
        <li>
          <Link to="/profile" onClick={handleClick} className="hover:text-white transition-colors">Profile</Link>
        </li>
        <li>
          <Link to="/viewblogs" onClick={handleClick} className="hover:text-white transition-colors">MyBlogs</Link>
        </li>
        <li>
          <Link to="/blogs" onClick={handleClick} className="hover:text-white transition-colors">Blogs</Link>
        </li>
        <li>
          <Link to="/likedblogs" onClick={handleClick} className="hover:text-white transition-colors">Liked Blogs</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout} className="hover:text-white transition-colors">Logout</Link>
        </li>
      </ul>

      <div className='md:hidden z-10 ml-auto'>
        <div onClick={handleClick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'md:hidden absolute top-0 left-0 w-full h-screen bg-[#b8def2] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/landingpage" className="hover:text-white transition-colors">Home</Link> </li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/createblog" className="hover:text-white transition-colors">Create Blog</Link> </li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/profile" className="hover:text-white transition-colors">Profile</Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/viewblogs" className="hover:text-white transition-colors">MyBlogs</Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/likedblogs" className="hover:text-white transition-colors">Liked Blogs</Link></li>
      </ul>
      </div>
    
  );
};
