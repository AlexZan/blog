// src/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('http://localhost:5000/posts');
  const posts = await response.json();
  return posts;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle', // Represents the loading state
  },
  reducers: {
    // Update the addPost reducer to make an API call
    addPost: (state, action) => {
      // Since we'll be fetching the updated list after adding,
      // we don't need to push the new post into state.posts here anymore
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPosts.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array
      state.posts = action.payload;
    })
    .addCase(fetchPosts.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

// Export the action creators you need
export const { /* addPost, other actions */ } = postsSlice.actions;

export default postsSlice.reducer;
