import React, { useEffect } from 'react';
import { Card, CardActionArea, CardActions, CardHeader, Grid, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectCommentsDeleting } from '../CommentsSlice';
import { deleteComment, fetchCommentsList } from '../CommentsThunk';
import { useParams } from 'react-router-dom';

interface Props {
  idComment: string,
  news_id: string,
  author: string | null,
  message: string
}

const OneComment: React.FC<Props> = ({author, message}) => {
  const dispatch = useAppDispatch();
  const deleting = useAppSelector(selectCommentsDeleting);
  const {id} = useParams();

  useEffect(() => {
    if(id){
      dispatch(fetchCommentsList(id));
    }
  }, [dispatch, id])
  const onDelete = async () => {
    if(id){
      await dispatch(deleteComment(id));
    }
  };
  return (
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <Card sx={{maxWidth: 400, margin: 5}}>
        <CardActions sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <CardActionArea>
          <CardHeader title={message}/>
          <Typography >{author}</Typography>
        </CardActionArea>
          <LoadingButton
            loading={deleting}
            onClick={onDelete}
            variant="outlined"
            color="error">
            Delete
          </LoadingButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default OneComment;



