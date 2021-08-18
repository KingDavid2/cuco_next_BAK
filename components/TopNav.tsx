import React from "react";
import { Container, Paper } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  outerPaper: {
    marginBottom: '16px',
    padding: '16px'
    
  },
}));

const TopNav = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.outerPaper}>
      <Container maxWidth="xl">
        asd
      </Container>
    </Paper>

  );
}

export default TopNav;