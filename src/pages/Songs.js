import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause'
// import { IconButton } from '@material-ui/core';

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
    fontSize: 70,
  }
}));

export default function SongCard() {
  const classes = useStyles();

  var store = require('store')
  const [data, setData] = useState([])
 


  useEffect(() => {
    async function fetchSongs() {
      const response = await fetch(
        "http://192.168.0.91:9090/InitialSongInfo"
      );
      const fetchSongz = await response.json(response);
      setData(fetchSongz);
    }
    fetchSongs();
  }, []);

  console.log(data);

  function songIdToLocalStorage(songid) {
    console.log(songid)
    store.set('songID', { songID:songid })
  };

  const [showIcon, setShowIcon] = useState(true)
  
  function playAudio(elementID) {
    console.log(elementID)
    const audioEl = document.getElementsByClassName(elementID)[0]
    audioEl.play()
    setShowIcon(false)
  }

  function stopAudio(elementID) {
    const audioEl = document.getElementsByClassName(elementID)[0]
    audioEl.pause()
    setShowIcon(true)
  }




  return ( 
  <div>

    <h1 className={classes.h1}>Songs Page</h1>
    <List>
      {data.map(item =>
      <div key={item.fileID}>
        <ListItem >
          <Card className={classes.root} onClick={() => songIdToLocalStorage(item.fileID)}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {item.artist}
                </Typography>
              </CardContent>
            </div>
          </Card>
          { showIcon ? <PlayArrowIcon id={item.fileID} className={classes.playbtn} onClick={() => playAudio(item.fileID)}/> 
          : <PauseIcon id={item.fileID} className={classes.pausebtn} onClick={() => stopAudio(item.fileID)}/> }
          
          <audio className={item.fileID}>
            <source src={item.httpaddr}></source>
          </audio>    
            
          
        </ListItem>
        
      </div>
      )}
    </List>
  </div>
  );
}

