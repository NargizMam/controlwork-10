import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import FileInput from '../../../components/UI/FileInput/FileInput';
import LoadingButton from '@mui/lab/LoadingButton';
import { NewsMutation } from '../../../types';

interface Props {
  onSubmit: (mutation: NewsMutation) => void;
  loading: boolean
}

const NewForm: React.FC<Props> = ({onSubmit, loading}) => {
  const [state, setState] = useState<NewsMutation>({
    title: '',
    text: '',
    image: null,
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
  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: files && files[0] ? files[0] : null,
    }))
  };
  return (
    <form
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            id="title" label="Title"
            value={state.title}
            required
            onChange={inputChangeHandler}
            name="title"
          />
        </Grid>
        <Grid item xs>
          <TextField
            multiline rows={3}
            id="text" label="News text"
            value={state.text}
            required
            onChange={inputChangeHandler}
            name="text"
          />
        </Grid>
        <Grid item xs>
          <FileInput
            onChange={fileInputChangeHandler}
            name="image"
            label="Image"/>
        </Grid>
        <Grid item xs>
          <LoadingButton loading={loading}
                         disabled={state.title === '' || state.text === ''}
                         type="submit" color="primary"
                         variant="contained">Create</LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};
export default NewForm;
