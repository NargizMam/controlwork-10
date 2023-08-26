import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiComment, CommentsMutation } from '../../types';


export const fetchCommentsList = createAsyncThunk<ApiComment[], string>(
  'comments/fetchAll',
  async (id) => {
    const newsResponse = await axiosApi.get<ApiComment[]>(`/comments?news_id=${id}`);
    return newsResponse.data;
  }
);
export const createComments = createAsyncThunk<void, CommentsMutation>(
  'comments/create',
  async (comment ) => {
    const message =  await axiosApi.post('/comments', comment);
    return message.data;
  }
);
export const deleteComment = createAsyncThunk<string, string>(
  'comments/delete/:id',
  async (id) => {
    const message = await axiosApi.delete('/comments/' + id);
    return message.data;
  }
)