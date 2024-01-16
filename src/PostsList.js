// src/PostsList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);

  // Helper function to extract and format the creation date from ObjectId
  const extractDateFromObjectId = objectId => {
    const timestamp = parseInt(objectId.substring(0, 8), 16);
    const date = new Date(timestamp * 1000);
    return format(date, 'PPP'); // Using date-fns to format the date, or you can use any other method
  };

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
          <div className="text-muted">
            Posted on {extractDateFromObjectId(post._id)}
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PostsList;
