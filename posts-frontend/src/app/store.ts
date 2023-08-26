import {configureStore} from "@reduxjs/toolkit";
import { newsReducer } from '../features/posts/PostsSlice';
import { commentsReducer } from '../features/comments/CommentsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    comments: commentsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;