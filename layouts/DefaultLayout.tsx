import React from 'react';
import LeftNav from  '../components/LeftNav'
import { Grid } from '@material-ui/core';

const DefaultLayout = ({ children }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <LeftNav/>
      { children}
    </Grid>

  );
}

export default DefaultLayout;