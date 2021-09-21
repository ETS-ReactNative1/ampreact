import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

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
//   const [value, setValue] = React.useState(0);
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
        
        <SkipPreviousIcon className={classes.BotNavIcon} />

        { 
            showIcon 
        ? 
            <PlayArrowIcon id="PlayBtn" className={classes.BotNavIcon} onClick={() => playSong()} />
        :
            <PauseIcon id="PauseBtn" className={classes.BotNavIcon} onClick={() => stopSong()} />
        }
        
        
        <SkipNextIcon className={classes.BotNavIcon} />
      </Box>


     </div>
  );
}
