import React from 'react';
import StockImg from "./images/two.jpg";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { ButtonGroup } from '@material-ui/core';
import Box from '@material-ui/core/Box';

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
  myh1: {
    textAlign: 'center',
  }
}));

export default function PlayerCard() {
  const classes = useStyles();
  return ( 
    <div  > 
      <h1 className={classes.myh1}>Player Page</h1>
      <img src={StockImg} alt="logo" className={classes.root}/>
      <div>
        <Box className={classes.playerButtonGroup}>
          <ButtonGroup>
          <SkipPreviousIcon className={classes.iconSizeLarge} />
            <PlayArrowIcon className={classes.iconSizeLarge} />
            <StopIcon className={classes.iconSizeLarge} />
            <SkipNextIcon className={classes.iconSizeLarge} />
          </ButtonGroup>
        </Box>
      </div>
    </div>
  );
}