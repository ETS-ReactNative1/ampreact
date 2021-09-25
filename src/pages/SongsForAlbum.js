import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddToPlaylistButton from '../components/AddToPlaylistButton';
// import AddIcon from '@material-ui/icons/Add'
// import Tooltip from '@material-ui/core/Tooltip';
// import IconButton from '@material-ui/core/IconButton';

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
  var albumIDD = localStorage.getItem('albumID')
  var albumID = JSON.parse(albumIDD)

  var albumm = localStorage.getItem('album')
  var album  = JSON.parse(albumm)

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchSongs() {
      console.log(albumID);
      var ALBURL = `http://192.168.0.91:9090/SongsForAlbum?selected=` + albumID;
      const response = await fetch(
        ALBURL
      );
      const fetchSongz = await response.json(response);
      setData(fetchSongz);
    }
    fetchSongs();
  }, []);
  console.log(data);

  function songIdToLocalStorage(songid, art, alb, title, arthttp, songhttp) {
    localStorage.setItem('songID', JSON.stringify(songid))
    localStorage.setItem('currentArtist', JSON.stringify(art))
    localStorage.setItem('currentAlbum', JSON.stringify(alb))
    localStorage.setItem('currentSong', JSON.stringify(title))
    localStorage.setItem('currentArtHTTP', JSON.stringify(arthttp))
    localStorage.setItem('currentSongHTTP', JSON.stringify(songhttp))
    document.getElementById("Audio2").setAttribute('src', songhttp);
  };

  return ( 
  <div>
    <h1 className={classes.h1}>{album}</h1>
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
            </Card>
            <div className={classes.fuckme}>
                <AddToPlaylistButton fileID={item.fileID}/>
            </div>
        </ListItem>
      </div>
      )}
    </List>
  </div>
  );
}

