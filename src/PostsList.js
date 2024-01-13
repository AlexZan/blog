// src/PostsList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <ListGroup variant="flush" className="my-3">
      {posts.map((post, index) => (
        <ListGroup.Item 
          key={post._id || index} 
          className="text-start bg-light border-0 my-2 shadow-sm"
        >
          <Link to={`/posts/${post._id}`} className="post-link">
            {post.content.substring(0, 100)}{post.content.length > 100 ? '...' : ''}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PostsList;
