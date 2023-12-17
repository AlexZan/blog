import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';

import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';
import PostsList from './PostsList'; 

function App() {
  const [post, setPost] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setPost('');
  };
  
  return (
    <div className="App">
      <Container fluid className="App-header">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h1>Blog Post Submission</h1>
            <Form onSubmit={handleSubmit} className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control 
                  type="text" 
                  placeholder="Write your post here" 
                  value={post} 
                  onChange={(e) => setPost(e.target.value)}
                  className="rounded-0"
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="rounded-0">Submit Post</Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md={6}>
            <h2>Recent Posts</h2>
            <PostsList /> {/* Use the PostsList component */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;