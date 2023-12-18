// src/PostsList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const PostsList = () => {
  // Use useSelector to access posts from the Redux store
  const posts = useSelector((state) => state.posts.posts);

  return (
    <ListGroup variant="flush">
      {posts.map((post, index) => (
        <ListGroup.Item key={post._id || index} className="text-start">
          {post.content.substring(0, 100)}{post.content.length > 100 ? '...' : ''}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PostsList;
