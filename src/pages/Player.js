// import React, { useState } from 'react';
import React from 'react';
// import StockImg from "./images/two.jpg";
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import PauseIcon from '@material-ui/icons/Pause';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import { ButtonGroup } from '@material-ui/core';
import Box from '@material-ui/core/Box';
// import AmpBarComp from '../components/AmpBarComp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginTop: "5em",
    marginRight: "auto",
    marginLeft: "auto",
  },
  playerButtonGroup: {
    marginTop: "5em",
    textAlign: "center",
  },
  // iconSizeLarge: {
  //   fontSize: 70,
  // },
  h1: {
    textAlign: 'center',
  }
}));

export default function PlayerCard(props) {
  console.log(props)
  const classes = useStyles();
  // const [showIcon, setShowIcon] = useState(true)





  // function iconShow() {
  //   setShowIcon(true)
  //   stopAudio();
  // }

  // function iconHide() {
  //   setShowIcon(false)
    
  //   playAudio();
  // }

  // function playAudio() {
  //   const audioEl = document.getElementsByClassName("Audio2")[0]
  //   audioEl.play()
  // }

  // function stopAudio() {
  //   const audioEl = document.getElementsByClassName("Audio2")[0]
  //   audioEl.pause()
  // }

  var store = require('store');
  var picpath = store.get('currentArtHTTP');
  console.log(picpath['currentArtHTTP'])

  return ( 
    <div  > 
      {/* <AmpBarComp /> */}
      <h1 className={classes.h1}>Player Page</h1>
      <img src={picpath['currentArtHTTP']} alt="logo" className={classes.root}/>
      <div>
        <Box className={classes.playerButtonGroup}>
          {/* <ButtonGroup>
          <SkipPreviousIcon />

          { 
            showIcon 
          ? 
            <PlayArrowIcon onClick={() => iconHide()}/>
          :
            <PauseIcon onClick={() => iconShow()} /> 
          }
            
            <SkipNextIcon style={{fontSize: 55}}/>
          </ButtonGroup> */}
        </Box>
      </div>
    </div>
  );
}