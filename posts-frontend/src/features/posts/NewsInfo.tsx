import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noImageAvailable from '../../assets/images/noImage.jpg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectNewsInfo } from './PostsSlice';
import { fetchOneNews } from './PostsThunk';
import dayjs from "dayjs";
import { apiUrl } from '../../constants';
import { Container, Grid, Paper, Typography } from '@mui/material';
import Comments from '../comments/Comments';

const NewsInfo= () => {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const newsInfo = useAppSelector(selectNewsInfo);
  const createdAt = dayjs(newsInfo?.createdAt).format('DD-MM-YYYY {HH:mm}');

  let imagePath: string = noImageAvailable
  if (newsInfo?.image) {
    imagePath = apiUrl + '/' + newsInfo.image;
  }

  useEffect(() => {
    if (id){
      dispatch(fetchOneNews(id));
    }
  }, [dispatch, id]);

  return newsInfo && (
    <Container >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper  variant="outlined"  square sx={{padding: "15px"}}>
          <img src={imagePath} alt={newsInfo.title}/>
          <Typography variant="h5">{newsInfo.title}</Typography>
          <Typography variant="body2">{newsInfo.text}</Typography>
          {newsInfo ? <Typography>Published at {createdAt}</Typography> : null}
        </Paper>
      </Grid>
      <Grid>
        <Comments/>
      </Grid>
      <Grid>
      <Typography margin={3}>Add new comments</Typography>
      </Grid>
    </Container>

  );
};

export default NewsInfo;

