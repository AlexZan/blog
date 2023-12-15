// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore  } from 'redux-persist';

const reducers = combineReducers({
  // Add more reducers as needed
  posts: postsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);