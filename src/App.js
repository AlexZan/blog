// src/App.js
import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import PostForm from './PostForm'; // Import the new component
import { useDispatch } from 'react-redux';
import PostsList from './PostsList'; 
import { fetchPosts } from './postsSlice';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  return (
    <div className="App">
      <Container fluid className="App-header">
        <PostForm />
        <h2>Recent Posts</h2>
        <PostsList />
      </Container>
    </div>
  );
}

export default App;
