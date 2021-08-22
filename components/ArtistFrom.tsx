import React, { FC, useEffect } from 'react';
import { IArtist } from '../types/api'
import TextFieldHook from './form-components/TextFieldHook'
import { Button, Grid, TextField } from '@material-ui/core';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Props {
  artist: IArtist
}

const ArtistForm: FC<Props> = ({ artist }) => {
  console.log(artist)
  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState, setValue, control, watch } = useForm<IArtist>();

  useEffect(() => {
    reset(artist)
  }, [ reset]);

  const onSubmit: SubmitHandler<IArtist> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        >
          <Grid item xs={12}>
            <TextFieldHook name="name" control={control} label="name" />
          </Grid>
          <Grid item xs={12}>
            <TextFieldHook name="lastName" control={control} label="lastName" />
          </Grid>
          <Grid item xs={12}>
            <TextFieldHook name="description" control={control} label="description" />
          </Grid>
          <Grid item xs={12}>
            <TextFieldHook name="image" control={control} label="image" />
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" type="submit" value="Submit">
              Submit
            </Button>
          </Grid>
      </Grid>
    </form>
  );
};

export default ArtistForm
