
import React, { useEffect, useState } from 'react';

export const LikedBlogsPage = () => {
    const [likedBlogs, setLikedBlogs] = useState([]);
  
    useEffect(() => {
      const fetchLikedBlogs = async () => {
        try {
          const response = await fetch(`/backend/users/${loggedInUserId}/liked-blogs`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${cookies.accessToken}`,
            },
          });
          if (response.ok) {
            const likedBlogsData = await response.json();
            setLikedBlogs(likedBlogsData);
          } else {
            console.error('Error fetching liked blogs');
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchLikedBlogs();
    }, []);
  
    return (
      <div>
        <h1>Liked Blogs</h1>
        <ul>
          {likedBlogs.map((blog) => (
            <li key={blog._id}>{blog.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  