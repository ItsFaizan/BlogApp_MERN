import React from 'react'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import landingimg from '../assets/blue-surface-with-study-tools.jpg'

export const ViewBlog = () => {
    
  const [bloginfo, setBloginfo] = useState([]);
  const [cookies] = useCookies(['accessToken']);
  useEffect(() => {
    const fetchBlogInfo = async () => {
      try {
        const response = await fetch('/backend/blog/getmyblogs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        });
        const data = await response.json();
        setBloginfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogInfo();
  }, [cookies.accessToken]);

  return (
    <div className="bg-gray-100 min-h-screen">
    <div
      className="p-4 sm:p-8 lg:p-16 "
      style={{
        backgroundImage: `url(${landingimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-600 mb-10 sm:mb-4 md:mt-8 text-center  ">My Blogs</h1>
      {bloginfo.map(blog => (
        <div key={blog._id} className=" p-4 sm:p-6 md:p-8 rounded-lg shadow-md mb-4">
          {blog.content.map((contentItem, index) => (
            <div key={index} className="mb-4">
              {contentItem.type === 'heading' && <h2 className="text-lg sm:text-xl font-semibold">{contentItem.text}</h2>}
              {contentItem.type === 'image' && <img src={contentItem.url} alt="Blog Image" className="w-full rounded-lg max-w-md mx-auto" />}
              {contentItem.type === 'paragraph' && <p className="text-gray-700">{contentItem.text}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  )
}
