// src/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('http://localhost:5000/posts');
  const posts = await response.json();
  return posts;
});

// Async thunk for adding a new post
export const addPost = createAsyncThunk('posts/addPost', async ({ content, password }, { rejectWithValue }) => {
  try {
    const response = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: content, password }),
    });

    if (!response.ok) {
      // Handle non-2xx responses
      throw new Error('Network response was not ok');
    }

    // Assuming the response includes the full post object
    const newPost = await response.json();
    return newPost; // Return the full post object

  } catch (error) {
    // Handle errors by passing them to rejectWithValue
    return rejectWithValue(error.message);
  }
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
  },
  reducers: {
    // Reducers if needed
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchPosts async thunk actions
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed';
      })
      // Handle addPost async thunk actions
      .addCase(addPost.fulfilled, (state, action) => {
        // Assuming the backend returns the added post
        state.posts.push(action.payload);
      });
  },
});

export default postsSlice.reducer;
