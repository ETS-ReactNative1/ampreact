import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    width: '100%',
    // color: "gold",
    backgroundColor: "black",
    marginTop: '1em',
    marginBottom: '1em',
  },
  BotNavIcon: { 
    fontSize: 45,
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [showIcon, setShowIcon] = React.useState(true);

  function playSong() {
    setShowIcon(false)
    //   document.getElementById("Audio2").setAttribute('src', songhttp);
    const audioEl1 = document.getElementsByClassName("Audio2")[0]
    audioEl1.play()

  }

  function stopSong() {
    setShowIcon(true)
    //   document.getElementById("Audio2").setAttribute('src', songhttp);
    const audioEl2 = document.getElementsByClassName("Audio2")[0]
    audioEl2.pause()
  }

  return (
    <div>
      <Box className={classes.root} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <IconButton color="inherit"><RemoveIcon color="inherit" style={{fontSize: 37}}/></IconButton>
        { 
            showIcon 
        ? 
            <IconButton color="inherit"><PlayArrowIcon color="inherit" style={{fontSize: 37}} onClick={() => playSong()} /></IconButton>
        :
            <IconButton color="inherit"><PauseIcon color="inherit" style={{fontSize: 37}} onClick={() => stopSong()} /></IconButton>
        }
        <IconButton color="inherit" style={{fontSize: 37}}><AddIcon color="inherit"/></IconButton>
      </Box>
    </div>
  );
}
