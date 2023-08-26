import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { ArrowForward } from '@mui/icons-material';
import { selectCallbackMessage, selectDeleting } from '../PostsSlice';
import { apiUrl } from '../../../constants';
import { deleteNews, fetchNewsList } from '../PostsThunk';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import noImageAvailable from '../../../assets/images/noImage.jpg';

interface Props {
  id: string,
  title: string,
  image: string | null,
  createdAt: string
}

const OneNews: React.FC<Props> = ({id, title, image, createdAt}) => {
  const dispatch = useAppDispatch();
  const deleting = useAppSelector(selectDeleting);
  const callbackMessage = useAppSelector(selectCallbackMessage);
  let imagePath: string = noImageAvailable
  if (image) {
    imagePath = apiUrl + '/' + image;
  }

  const atDate = dayjs(createdAt).format('DD-MM-YYYY {HH:mm}');

  const onDeleteNews = async () => {
    await dispatch(deleteNews(id));
    await dispatch(fetchNewsList());
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={3}>
      {deleting ? <Typography>{callbackMessage}</Typography> : null}
      <Card sx={{maxWidth: 700, margin: 5}}>
        <CardActionArea>
          <CardMedia sx={{height: 140}} image={imagePath}/>
          <CardHeader title={title}/>
          <CardContent>
            {createdAt ? `Published ${atDate}` : null}
          </CardContent>
        </CardActionArea>
        <CardActions sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <IconButton component={Link} to={'/news-info/' + id}>
            Read full post
            <ArrowForward/>
          </IconButton>
          <LoadingButton
            loading={deleting}
            onClick={onDeleteNews}
            variant="outlined"
            color="error">
            Delete
          </LoadingButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default OneNews;



