import React, { useState } from 'react';
import landingimg from '../assets/blue-surface-with-study-tools.jpg';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';


export const CreateBlog = ({ userId }) => {
  const [content, setContent] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [contentExists, setContentExists] = useState(false);
  const [cookies] = useCookies(['accessToken']);
  const navigate = useNavigate();

  const handleAddHeading = () => {
    setContent([...content, { type: 'heading', text: inputValue }]);
    setInputValue('');
    setContentExists(true); 
  };

  const handleAddParagraph = () => {
    setContent([...content, { type: 'paragraph', text: inputValue }]);
    setInputValue('');
  };

  const handleAddImage = () => {
    setContent([...content, { type: 'image', url: imageUrl }]);
    setImageUrl('');
  };

  
  const handleSaveBlog =async (e) => {
    e.preventDefault();
    
        
    try {
      const response = await fetch('/backend/blog/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.accessToken}`,
        },
        body: JSON.stringify({
          content: content,  
        }),
       
      });
  } catch (error) {
    console.error(error);
  }
  };

  
  return (

    <div className=" pb-4 px-4 ">
     
  <div
    className="absolute inset-0 flex flex-col justify-center items-center p-8 sm:p-16 lg:p-32"
    style={{
      backgroundImage: `url(${landingimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    
       
        <div className=" mb-8 text-center  ">
        {!contentExists && (
  <p className="text-2xl text-gray-600 ">
    "Blogging is your canvas. Your words are the brushstrokes.<br />Let your thoughts flow and create a masterpiece."
  </p>
  )}
  <p className="mt-4 text-2xl font-semibold text-gray-600">
    Create your blog!
  </p>
</div>
       
      <div className="max-w-4xl mx-auto  bg-[#14191f] text-white p-6 rounded shadow z-10 ">
     
        <div className="mb-4">
          <input
            className="w-full bg-gray-700 p-2 rounded "
            type="text"
            placeholder="Enter your heading, paragraph, or image URL..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={handleAddHeading}
    >
      Add Heading
    </button>
    <button
      className="px-4 py-2 bg-green-500 text-white rounded"
      onClick={handleAddParagraph}
    >
      Add Paragraph
    </button>
    <div className="flex space-x-2">
      <input
        className="bg-gray-700 p-2 rounded border-none"
        type="text"
        placeholder="Image URL..."
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-indigo-500 text-white rounded"
        onClick={handleAddImage}
      >
        Add Image
      </button>
    </div>
  </div>
        <div className="mt-4 space-y-4 max-h-72 overflow-y-auto">
          {content?.map((item, index) =>
            item.type === 'heading' ? (
              <h2 key={index} className="text-2xl font-semibold break-words">
                {item.text}
              </h2>
            ) : item.type === 'paragraph' ? (
              <p key={index} className="text-base break-words">
                {item.text}
              </p>
            ) : (
              <img
                key={index}
                src={item.url}
                alt={`Image ${index}`}
                className="max-w-full h-auto"
              />
            )
          )}
        </div>
      </div>
      
      <button
         className="mt-4 px-6 py-2 bg-gray-600 text-white rounded transition duration-300 hover:text-gray-950 hover:bg-white z-10"
         type="submit" onClick={handleSaveBlog}
      >
       <Link to="/viewblogs">
        Publish
        </Link>
       
      </button>
     
     
      </div>
    
      </div>
  );
};

