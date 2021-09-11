import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import AddIcon from '@material-ui/icons/Add';
import AmpBarComp from '../components/AmpBarComp';

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

  function songIdToLocalStorage(songid) {
    console.log(songid)
    store.set('songID', { songID:songid })
  };

  const [showIcon, setShowIcon] = useState(true)
  
  // function playAudio(elementID) {
  //   console.log(elementID)
  //   const audioEl = document.getElementsByClassName(elementID)[0]
  //   audioEl.play()
  //   setShowIcon(false)
  // }

  // function stopAudio(elementID) {
  //   const audioEl = document.getElementsByClassName(elementID)[0]
  //   audioEl.pause()
  //   setShowIcon(true)
  // }

  function playAudio() {
    const audioEl = document.getElementsByClassName("Audio2")[0]
    audioEl.play()
    setShowIcon(false)
  }

  function stopAudio() {
    const audioEl = document.getElementsByClassName("Audio2")[0]
    audioEl.pause()
    setShowIcon(true)
  }


  return ( 
    <div>
      <AmpBarComp />
      <h1 className={classes.h1}>Songs Page</h1>
      <List>
        {data.map(item =>
        <div key={item.fileID}>
          <ListItem >
            <Card className={classes.root} onClick={() => songIdToLocalStorage(item.fileID)}>
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
              {/* <ButtonGroup>
                { showIcon ? <PlayArrowIcon id={item.fileID} className={classes.fuck} onClick={() => playAudio(item.fileID)}/> 
                : <PauseIcon id={item.fileID} className={classes.fuck} onClick={() => stopAudio(item.fileID)}/> }
              </ButtonGroup> */}

{/* <PlayArrowIcon style={{ display: showIcon ? "block" : "none" }} key={item.fileID} className={classes.fuck} onClick={() => playAudio(item.fileID)}/> 
<PauseIcon style={{ display: showIcon ? "none" : "block" }} key={item.fileID} className={classes.fuck} onClick={() => stopAudio(item.fileID)}/> */}

              <div key={item.fileID} className={classes.fuckme}>
                { showIcon ? <PlayArrowIcon key={item.fileID} className={classes.fuck} onClick={() => playAudio(item.fileID)}/> 
                : <PauseIcon key={item.fileID} className={classes.fuck} onClick={() => stopAudio(item.fileID)}/> }
                <AddIcon className={classes.fuck}/>
              </div>
            </Card>
            <audio className={item.fileID} key={item.fileID}>
              <source src={item.httpaddr}></source>
            </audio>
          </ListItem>
        </div>
        )}
      </List>
    </div>
  );
}

