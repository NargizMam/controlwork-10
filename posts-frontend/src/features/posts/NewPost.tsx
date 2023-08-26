import { Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCreating } from './PostsSlice';
import { NewsMutation } from '../../types';
import { createNews } from './PostsThunk';
import NewForm from './components/NewForm';


const NewPost = () => {
  const dispatch = useAppDispatch();
  const creating = useAppSelector(selectCreating);
  const navigate = useNavigate();

  const onFormSubmit = async (newsMutation: NewsMutation) => {
    await dispatch(createNews(newsMutation));
    navigate('/');
  };

  return (
    <Container>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Typography variant="h4" sx={{m: 5}}>Add new post</Typography>
        <NewForm onSubmit={onFormSubmit} loading={creating}/>
      </Grid>
    </Container>
  );
};
export default NewPost;
