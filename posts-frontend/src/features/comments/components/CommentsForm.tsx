import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { CommentsMutation } from '../../../types';

interface Props {
  onSubmit: (mutation: CommentsMutation) => void;
}

const CommentsForm: React.FC<Props> = ({onSubmit, loading}) => {
  const [state, setState] = useState<CommentsMutation>({
    author: 'Anonymous',
    message: '',
    news_id: '',
  });
  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(state);
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };
  return (
    <form
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            id="message" label="Enter your message"
            value={state.message}
            required
            onChange={inputChangeHandler}
            name="message"
          />
        </Grid>
        <Grid item xs>
          <TextField
            multiline rows={3}
            id="author" label="author"
            value={state.author}
            required
            onChange={inputChangeHandler}
            name="author"
          />
        </Grid>
        <Grid item xs>
          <LoadingButton loading={loading}
                         disabled={state.message === '' || state.author === ''}
                         type="submit" color="primary"
                         variant="contained">Create</LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};
export default CommentsForm;
