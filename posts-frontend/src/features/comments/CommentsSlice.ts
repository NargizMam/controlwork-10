import { createSlice } from '@reduxjs/toolkit';
import { deleteComment, fetchCommentsList } from './CommentsThunk';
import { RootState } from '../../app/store';
import { ApiComment } from '../../types';

interface CommentsState {
  commentsList: ApiComment[];
  fetching: boolean;
  creating: boolean;
  deleting: boolean;
}
const initialState: CommentsState = {
  commentsList: [],
  fetching: false,
  creating: false,
  deleting: false,
}
export const CommentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsList.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(fetchCommentsList.fulfilled, (state, {payload: commentsList}) => {
      state.commentsList = commentsList;
      state.fetching = false;
    });
    builder.addCase(fetchCommentsList.rejected, (state) => {
      state.fetching = false;
    });
    builder.addCase(deleteComment.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(deleteComment.fulfilled, (state) => {
      state.fetching = false;
    });
    builder.addCase(deleteComment.rejected, (state) => {
      state.fetching = false;
    });
  }
});

export const commentsReducer = CommentsSlice.reducer;
export const selectCommentsList = (state: RootState) => state.comments.commentsList;
export const selectCommentsFetching = (state: RootState) => state.comments.fetching;
export const selectCommentsCreating = (state: RootState) => state.comments.creating;
export const selectCommentsDeleting = (state: RootState) => state.comments.deleting;