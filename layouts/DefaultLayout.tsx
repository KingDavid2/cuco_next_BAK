import React, { FC } from "react";
import LeftNav from  '../components/navs/LeftNav'
import TopNav from  '../components/navs/TopNav'
import { Container, Grid, Paper } from '@material-ui/core';

interface Props {
  children: object
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <TopNav/>
      <Container
        maxWidth={false}>
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
          <Grid item xs>
            { children}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DefaultLayout;