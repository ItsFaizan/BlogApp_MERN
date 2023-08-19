import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const BlogDetails = () => {
  const { id } = useParams(); 
  const [blogDetail, setBlogDetail] = useState({});
  const [claps, setClaps] = useState(0);
  const [hasClapped, setHasClapped] = useState(false);
  const [cookies] = useCookies(['accessToken']); 

    const handleClap = async () => {
          const response = await fetch(`/backend/blog/${id}/clap`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${cookies.accessToken}`,
            },
          });
        setHasClapped(true);
        setClaps(prevClaps => prevClaps + 1);
    };
    
  
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
        setClaps(data.claps);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogDetail();
  }, [cookies.accessToken, id, setClaps]);



  
  

  return (
    <div className='pt-24 bg-[#b8def2]'> 
    
      <div className=' w-full  p-4 md:p-8 lg:p-16'>
        {blogDetail.content &&
          blogDetail?.content?.map((contentItem, index) => (
            <div key={index} className="mb-4">
              {contentItem.type === 'heading' && <h1 className='font-bold'>{contentItem.text}</h1>}
              {contentItem.type === 'image' && <img src={contentItem.url} alt="Blog Image" className="w-full rounded-lg max-w-md mx-auto" />}
              {contentItem.type === 'paragraph' && <p>{contentItem.text}</p>}
            </div>
          ))}
      </div>

      <div className="flex items-center justify-end">
            <button
              onClick={handleClap}
              className={`bg-gray-600 text-white hover:bg-white hover:text-gray-950 px-4 py-2 rounded-md ${
                hasClapped ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              disabled={hasClapped}
            >
              {hasClapped ? 'Clapped' : 'Clap'}
            </button>
            <p className="ml-2">{claps} claps</p>
          </div>
    </div>
  );
};

