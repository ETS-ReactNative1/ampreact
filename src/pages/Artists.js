import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import history from './History';
// import ReactRouterDOM from 'react-router-dom';
// const { Link } = ReactRouterDOM;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    background: "gold",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  myh1: {
    textAlign: 'center',
  },
  mycard: {
    width: "100%",
    textDecoration: 'none',
  }
}));

export default function ArtistCard() {
  var store = require('store')
  const classes = useStyles();
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchArtists() {
      const response = await fetch(
        "http://192.168.0.91:9090/InitArtistInfo"
      );
      const fetchArtistz = await response.json(response);
      setData(fetchArtistz);
    }
    fetchArtists();
  }, []);

  function artistIdToLocalStorage(artid) {
    console.log(artid)
    store.set('artistID', { artistID:artid })
  };

  return ( 
    <div>
      <h1 className={classes.myh1}>Artist Page</h1>
      
      <List >
        {data.map(item =>
          <ListItem key={item.artistID} onClick={() => artistIdToLocalStorage(item.artistID)}>
            <a href="/ArtistAlbums" className={classes.mycard} >
              <Card className={classes.root} >
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {item.artist} 
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {item.albcount} albums
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </a>
          </ListItem>
        )}
      </List>
    </div>
  );
}
