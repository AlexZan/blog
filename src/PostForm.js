// src/PostForm.js
import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';

const PostForm = () => {
  const [post, setPost] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!post.trim()) return;

    // Dispatch the addPost action with post content and password
    dispatch(addPost({ content: post, password }));
    setPost('');
  };

  return (
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
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-0"
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="rounded-0">Submit Post</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default PostForm;
