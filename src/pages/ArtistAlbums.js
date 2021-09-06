import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'; 
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
  }
}));


export default function ArtistAlbums() {
  var store = require('store')
  const classes = useStyles();
  const [data, setData] = useState([])
  var artistID = store.get('artistID')

  useEffect(() => {
    async function fetchArtistsAlbums() {
      console.log(artistID['artistID'])
      var URLL = `http://192.168.0.91:9090/AlbumsForArtist2?selected=` + artistID['artistID'];
      console.log(URLL)
      const response = await fetch(
        URLL
      );
      const fetchArtistsAlbumz = await response.json(response);
      setData(fetchArtistsAlbumz);
    }
    fetchArtistsAlbums();
  }, []);
  console.log(data);

  function albumIdToLocalStorage(albid) {
    console.log(albid)
    store.set('albumID', { albumID:albid })
  };

  return (
    <div >
      {data.map(item =>
        <List container spacing={3} key={item.albumID}>
          {/* <a href="/AlbumsSongs" className={classes.myhref}> */}
            <ListItem onClick={() => albumIdToLocalStorage(item.albumID)}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image={item.picHttpAddr}
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {item.album}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {item.artist}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </ListItem>
          {/* </a> */}
        </List>
      )}
    </div>
  );
}


