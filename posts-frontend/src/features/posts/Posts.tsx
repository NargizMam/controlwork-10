import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFetching, selectNewsList } from './PostsSlice';
import { fetchNewsList } from './PostsThunk';
import Spinner from '../../components/UI/Spinner/Spinner';
import OneNews from './components/OneNews';

const Posts = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector(selectNewsList);
  const fetching = useAppSelector(selectFetching);

  useEffect(() => {
    dispatch(fetchNewsList());
  }, [dispatch]);

  const oneNews = newsList.map(news => (
    <OneNews key={news.id}
             id={news.id}
             title={news.title}
             createdAt={news.createdAt}
             image={news.image}
    />
  ));
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">
            All posts
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} to="/create-news">
            Add new post
          </Button>
        </Grid>
      </Grid>
      {fetching ? <Spinner/> : null}
      {oneNews}
    </>

  );
};

export default Posts;