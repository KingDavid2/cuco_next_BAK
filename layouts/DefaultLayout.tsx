import React, { FC } from "react";
import LeftNav from  '../components/LeftNav'
import { Grid } from '@material-ui/core';

interface Props {
  children: object
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={2}>
        <LeftNav/>
      </Grid>
      { children}
    </Grid>
  );
}

export default DefaultLayout;