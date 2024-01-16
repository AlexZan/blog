// src/SinglePostView.js

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSinglePost } from './postsSlice';

const SinglePostView = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.singlePost);
  const status = useSelector((state) => state.posts.singlePostStatus);

  useEffect(() => {
    if (postId) {
      dispatch(fetchSinglePost(postId));
    }
  }, [postId, dispatch]);

  if (status === 'loading') {
    return <div className="post-loading">Loading...</div>;
  } else if (status === 'failed' || !post) {
    return <div className="post-error">Unable to fetch post.</div>;
  }

  // Convert ObjectId to a readable date
  const postDate = post._id ? new Date(parseInt(post._id.substring(0, 8), 16) * 1000) : new Date();
  
  return (
    <div className="single-post-container">
      <div className="post-card">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-content">{post.content}</p>
        <p className="post-date text-muted">{postDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default SinglePostView;