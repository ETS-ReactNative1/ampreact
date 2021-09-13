import React, { useState } from 'react';
import StockImg from "./images/two.jpg";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { ButtonGroup } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AmpBarComp from '../components/AmpBarComp';
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
  iconSizeLarge: {
    fontSize: 70,
  },
  h1: {
    textAlign: 'center',
  }
}));

export default function PlayerCard() {
  const classes = useStyles();
  const [showIcon, setShowIcon] = useState(true)

  function iconShow() {
    setShowIcon(true)
  }

  function iconHide() {
    setShowIcon(false)
  }

  return ( 
    <div  > 
      <AmpBarComp />
      <h1 className={classes.h1}>Player Page</h1>
      <img src={StockImg} alt="logo" className={classes.root}/>
      <div>
        <Box className={classes.playerButtonGroup}>
          <ButtonGroup>
          <SkipPreviousIcon className={classes.iconSizeLarge} />

          { showIcon ? <PlayArrowIcon className={classes.iconSizeLarge} onClick={() => iconHide()}/>
          : <PauseIcon className={classes.iconSizeLarge} onClick={() => iconShow()} /> }
            
            <SkipNextIcon className={classes.iconSizeLarge} />
          </ButtonGroup>
        </Box>
      </div>
    </div>
  );
}