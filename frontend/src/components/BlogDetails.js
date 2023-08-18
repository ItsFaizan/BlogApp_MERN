import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import landingimg from '../assets/blue-surface-with-study-tools.jpg';

export const BlogDetails = () => {
  const { id } = useParams(); 
  const [blogDetail, setBlogDetail] = useState({});
    const [cookies] = useCookies(['accessToken']); 

  useEffect(() => {
    
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`/backend/blog/${id}`, {  
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        });
        const data = await response.json();
        setBlogDetail(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogDetail();
  }, [cookies.accessToken, id]);

  return (
    <div className='pt-24 bg-[#b8def2]'> 
    
      <div className=' w-full  p-4 md:p-8 lg:p-16'>
        {blogDetail.content &&
          blogDetail.content.map((contentItem, index) => (
            <div key={index} className="mb-4">
              {contentItem.type === 'heading' && <h1 className='font-bold'>{contentItem.text}</h1>}
              {contentItem.type === 'image' && <img src={contentItem.url} alt="Blog Image" className="w-full rounded-lg max-w-md mx-auto" />}
              {contentItem.type === 'paragraph' && <p>{contentItem.text}</p>}
            </div>
          ))}
      </div>
    </div>
  );
};

