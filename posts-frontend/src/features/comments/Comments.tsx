import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';

const Comments = () => {
  const dispatch = useAppDispatch();
  // const commentsList = useAppSelector(selectCommentsList);
  // const fetching = useAppSelector(selectFetching);
  //
  // useEffect(() => {
  //   dispatch(fetchNewsList());
  // }, [dispatch]);
  //
  // const oneNews = commentsList.map(comment => (
  //   <OneComment key={comment.id}
  //            id={comment.id}
  //            title={comment.title}
  //            createdAt={comment.createdAt}
  //            image={comment.image}
  //   />
  // ));
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
      {/*{fetching ? <Spinner/> : null}*/}
      {/*{oneNews}*/}
    </>

  );
};

export default Comments;