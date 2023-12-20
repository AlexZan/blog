// src/App.js
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Admin from './Admin';
import PostsList from './PostsList';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Define the routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Container fluid className="App-header">
          <h2>Recent Posts</h2>
          <PostsList />
        </Container>
      ),
    },
    {
      path: '/admin',
      element: <Admin />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
