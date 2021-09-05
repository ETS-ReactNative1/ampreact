import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IM2 from './images/two2.jpg';

// var store = require('store')

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Home: {
    padding: '2em',
    textAlign: 'center',
  },
  homeImage: {
    width: "150px"
  }
}));

export default function Home() {
const classes = useStyles();
  return (
    <div className={classes.Home}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <img src={IM2} className={classes.homeImage} alt="logo" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img src={IM2} className={classes.homeImage} alt="logo" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img src={IM2} className={classes.homeImage} alt="logo" />
          </Grid>
          <Grid item xs={6} sm={3}>
              <img src={IM2} className={classes.homeImage} alt="logo" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img src={IM2} className={classes.homeImage} alt="logo" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img src={IM2} className={classes.homeImage} alt="logo" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img src={IM2} className={classes.homeImage} alt="logo" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img src={IM2} className={classes.homeImage} alt="logo" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}



