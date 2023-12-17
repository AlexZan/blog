import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <ListGroup variant="flush">
      {posts.map((post, index) => (
        <ListGroup.Item key={index} className="text-start">
          {post.substring(0, 100)}{post.length > 100 ? '...' : ''}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PostsList;
