import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const BlogDetails = () => {
  const { id } = useParams(); 
  const [blogDetail, setBlogDetail] = useState({});
  const [claps, setClaps] = useState(0);
  const [hasClapped, setHasClapped] = useState(false);
  const [authorEmail, setAuthorEmail] = useState(); 
  const [emailSubject, setEmailSubject] = useState('');
  const [emailText, setEmailText] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [cookies] = useCookies(['accessToken']); 

  const fetchAuthorEmail = async (authid) => {
    try {
      const response = await fetch(`/backend/users/${authid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      });
      const authorData = await response.json();
      setAuthorEmail(authorData);
    } catch (error) {
      console.log(error);
    }
  };


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
    
    const postComment = async () => {
      try {
        const response = await fetch(`/backend/blog/${id}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.accessToken}`,
          },
          body: JSON.stringify({ text: newComment }),
        });
    
        if (response.ok) {
          const commentData = await response.json();
          setComments([...comments, commentData]);
          setNewComment('');
        } else {
          console.error('Error posting comment');
        }
      } catch (error) {
        console.error(error);
      }
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
        setComments(data.comments);
        console.log(data);
        if (data.author) {
          fetchAuthorEmail(data.author); 
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogDetail();
    
  }, [cookies.accessToken, id, setClaps]);

  const sendEmailToAuthor = async () => {
    try {
      const response = await fetch(`/backend/blog/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.accessToken}`,
        },
        body: JSON.stringify({
          to: (authorEmail && authorEmail.user.email),
          subject: emailSubject, 
          text: emailText, 
        }),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error(error);
    }
  };

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

          
      <div className="container mx-auto p-6 ">
        <h1 className="text-2xl font-bold mb-4">Author: {authorEmail && authorEmail.user.fullName}</h1>
        <div className="mb-4">
          <a href={`mailto:${authorEmail && authorEmail.user.email}`} className="text-blue-600 hover:underline">
           Email to Author: {authorEmail && authorEmail.user.email}
          </a>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter email subject"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
            className="px-4 py-2 border rounded-md w-full sm:w-auto mb-2 sm:mb-0"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Enter email text"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            className="px-4 py-2 border rounded-md w-full sm:w-auto"
          ></textarea>
        </div>
        <button
          onClick={sendEmailToAuthor}
          className="bg-gray-600 text-white hover:bg-white hover:text-gray-600 px-4 py-2 rounded-md"
        >
          Send Email
        </button>

        <div className="mt-8">
  <h2 className="text-xl font-semibold mb-4">Comments</h2>
  {comments.map((comment, index) => (
    <div key={index} className="border p-3 mb-3">
      <p>{comment.text}</p>
    </div>
  ))}
</div>

<div className="mt-8">
  <h2 className="text-xl font-semibold mb-4">Add a Comment</h2>
  <textarea
    placeholder="Enter your comment..."
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}
    className="px-4 py-2 border rounded-md w-full"
  />
  <button
    onClick={postComment}
    className="bg-gray-600 text-white hover:bg-white hover:text-gray-600 px-4 py-2 rounded-md mt-2"
  >
    Post Comment
  </button>
</div>
      </div>
    </div>

  );
};

