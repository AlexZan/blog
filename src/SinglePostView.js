// src/SinglePostView.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePostView = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams(); // Get the post ID from URL params

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/posts/${postId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const postData = await response.json();
        setPost(postData);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default SinglePostView;
