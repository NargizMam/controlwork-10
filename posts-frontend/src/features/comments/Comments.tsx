import React, { useCallback, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCommentsFetching, selectCommentsList } from './CommentsSlice';
import { fetchCommentsList } from './CommentsThunk';
import Spinner from '../../components/UI/Spinner/Spinner';
import OneComment from './components/OneComment';
import { nanoid } from 'nanoid';

const Comments = () => {
  const dispatch = useAppDispatch();
  const commentsList = useAppSelector(selectCommentsList);
  const fetching = useAppSelector(selectCommentsFetching);
  const {id} = useParams();
  const fetchList = useCallback(async () => {
    if(id){
     await dispatch(fetchCommentsList(id));
    }
  }, [dispatch, id]);


  useEffect(() => {
    fetchList().catch();
  }, [fetchList]);

  const oneComments = commentsList.map(comment => (
      <OneComment idComment={comment.id}
                  news_id={comment.news_id}
                  author={comment.author}
                  message={comment.message}
                  key={nanoid()}
      />
    )
  )
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">
            All comments
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} to="/create-news">
            Add new comments
          </Button>
        </Grid>
      </Grid>
      {fetching ? <Spinner/> : null}
      {oneComments}
    </>

  );
};

export default Comments;