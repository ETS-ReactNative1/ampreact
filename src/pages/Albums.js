import React, { useEffect, useState } from 'react';
// import ReactRouterDOM from 'react-router-dom';
// const { Link } = ReactRouterDOM;
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AmpBarComp from '../components/AmpBarComp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%",
    background: "gold",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 125,
    height: 125,
  },
  myhref: {
    textDecoration: "none",
  },
  h1: {
    textAlign: "center",
  }
}));

export default function AlbumCard() {
  const classes = useStyles();
  var store = require('store')
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchAlbums() {
      const response = await fetch(
        "http://192.168.0.91:9090/InitAlbumInfo"
      );
      const fetchAlbumz = await response.json(response);
      setData(fetchAlbumz);
    }
    fetchAlbums();
  }, []);

  console.log(data);

  function albumIdToLocalStorage(albid) {
    console.log(albid)
    store.set('albumID', { albumID:albid })
  };

  return (
    <div >
      <AmpBarComp />
      <h1 className={classes.h1}>Albums Page</h1>
      {data.map(item =>
        <List spacing={3} key={item.AlbumID}>
            <ListItem onClick={() => albumIdToLocalStorage(item.AlbumID)}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image={item.PicPath}
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {item.Album}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Mac Miller
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </ListItem>
        </List>
      )}
    </div>
  );
}
