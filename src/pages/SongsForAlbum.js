import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

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
  h1: {
    textAlign: "center",
  },
  fuckme: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    
  },
  fuck: {
    fontSize: 55,
    textOverflow: "…",
    
  }
}));

export default function SongsForAlbum() {
  const classes = useStyles();
  var store = require('store')
  var albumID = store.get('albumID')
  var albname = store.get('albname')
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchSongs() {
      console.log(albumID);
      var ALBURL = `http://192.168.0.91:9090/SongsForAlbum?selected=` + albumID['albumID'];
      const response = await fetch(
        ALBURL
      );
      const fetchSongz = await response.json(response);
      setData(fetchSongz);
    }
    fetchSongs();
  }, []);

  function songIdToLocalStorage(songid, art, alb, title, arthttp, songhttp) {
    store.set('songID', { songID:songid })
    store.set('currentArtist', { currentArtist:art })
    store.set('currentAlbum', { currentAlbum:alb })
    store.set('currentSong', { currentSong:title })
    store.set('currentArtHTTP', { currentArtHTTP:arthttp })
    store.set('currentSongHTTP', { currentSongHTTP:songhttp })
    document.getElementById("Audio2").setAttribute('src', songhttp);
  };

  return ( 
  <div>
    <h1 className={classes.h1}>{albname['albname']}</h1>
    <List>
      {data.map(item =>
      <div key={item.fileID}>
        <ListItem >
            <Card className={classes.root} 
                onClick={() => songIdToLocalStorage(item.fileID,
                                                    item.artist,
                                                    item.album,
                                                    item.title,
                                                    item.picHttpAddr,
                                                    item.httpaddr,

              )}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {item.album}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {item.artist}
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.fuckme}>
                <Tooltip title="Add to Playlist">
                  <IconButton>
                    <AddIcon className={classes.fuck}/>
                  </IconButton>
                </Tooltip>
              </div>
            </Card>
        </ListItem>
      </div>
      )}
    </List>
  </div>
  );
}

