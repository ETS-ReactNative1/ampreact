import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import AmpBarComp from '../components/AmpBarComp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Home: {
    padding: '2em',
    textAlign: 'center',
  },
  homeImage: {
    width: "125px"
  }
}));

export default function Home() {
  const classes = useStyles();
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchHome() {
      const response = await fetch(
        "http://192.168.0.91:9090/RandomPics"
      );
      const fetchHomez = await response.json(response);
      setData(fetchHomez);
    }
    fetchHome();
  }, []);

  return (
  <div>
    {/* <AmpBarComp /> */}
    <div className={classes.Home}>
      
      <div className={classes.root}>
        <Grid container spacing={2}>
          {data.map(item =>
          
            <Grid item xs={6} sm={3} key={item}>
              <a href="/Albums"><img src={item} className={classes.homeImage} alt="logo" /></a>
              
            </Grid>
         
          )}
        </Grid>
      </div>
    </div>
  </div>  
  );
}



