// src/App.js
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Admin from './Admin';
import PostsList from './PostsList';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';
import SinglePostView from './SinglePostView';
import HeaderBar from './HeaderBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Define the routes using createHashRouter
  const router = createHashRouter([
    {
      path: '/',
      element: (
        <>
          <HeaderBar />
          <Container fluid className="App-header">
            <h2>Recent Posts</h2>
            <PostsList />
          </Container>
        </>
      ),
    },
    {
      path: '/admin',
      element: (
        <>
          <HeaderBar />
          <Admin />
        </>
      ),
    },
    {
      path: '/posts/:postId', // Route with a path parameter
      element: (
        <>
          <HeaderBar />
          <SinglePostView />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
