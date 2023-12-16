// src/PostsList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

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
