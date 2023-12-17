// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';

export const store = configureStore({
  reducer: {
    // Define a reducer mapping without redux-persist
    posts: postsReducer,
  },
  // Middleware can be added here if needed
});

// No need to export persistor since we're not using redux-persist anymore
