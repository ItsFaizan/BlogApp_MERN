import React from 'react'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'
import landingimg from '../assets/blue-surface-with-study-tools.jpg'

export const AllBlogs = () => {
    const [bloginfo, setBloginfo] = useState([]);
    const [cookies] = useCookies(['accessToken']);
    useEffect(() => {
      const fetchBlogInfo = async () => {
        try {
          const response = await fetch('/backend/blog/getallblogs', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${cookies.accessToken}`,
            },
          })
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
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-600 mb-10 sm:mb-4 md:mt-8 text-center">
          Blogs
        </h1>
        {bloginfo.map((blog) => (
          <div
            key={blog._id}
            className="p-4 sm:p-6 md:p-8 rounded-lg shadow-md mb-4"
          >
            {blog.content.map((contentItem, index) => (
              <div key={index} className="mb-4">
                {contentItem.type === 'heading' && (
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {contentItem.text}
                  </h2>
                )}
              </div>
            ))}
            <button
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-white hover:text-gray-950"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
