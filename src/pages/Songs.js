import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton'

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
  playbtn: {
    color: 'gold',
    fontSize: 80,
  },
  pausebtn: {
    color: "gold",
    fontSize: 80,
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

export default function SongCard() {
  const classes = useStyles();
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchSongs() {
      const response = await fetch(
        // "http://192.168.0.91:9090/InitialSongInfo"
        `http://192.168.0.91:9090/SongAlpha?alpha=A`
      );
      const fetchSongz = await response.json(response);
      setData(fetchSongz);
    }
    fetchSongs();
  }, []);
  
  function songIdToLocalStorage(songid) {
    var songidd = JSON.stringify(songid);
    localStorage.setItem('songID', songidd);
    playAudio(songid);
  };
  
  function playAudio(sid) {
    const audioEl = document.getElementsByClassName('Audio2')[0]
    audioEl.setAttribute('src', sid);
    audioEl.play();
  };

  function addSongToPlaylist(songid) {

      // NEEED A SERVER FUNCTION HERE

  };

  return ( 
    <div>
      <h1 className={classes.h1}>Songs</h1>
      <List>
        {data.map(item =>
        <div key={item.fileID}>
          <ListItem >
            <Card className={classes.root} onClick={() => songIdToLocalStorage(item.httpaddr)}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h6" variant="h6">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {item.artist}
                  </Typography>
                </CardContent>
              </div>
            </Card>
            <div key={item.fileID} className={classes.fuckme}>
                <Tooltip title="Add to Playlist">
                  <IconButton style={{color: "gold"}} onClick={() => addSongToPlaylist(item.fileID)} >
                    <AddIcon className={classes.fuck}/>
                  </IconButton>
                </Tooltip>
              </div>
          </ListItem>
        </div>
        )}
      </List>
    </div>
  );
}

