import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/* eslint-disable */
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  Box1Div: {
    display: 'block',
    marginLeft: 'auto',
    marginright: 'auto',
  },
  Box1: {
    display: 'block',
    marginTop: '5em',
    textAlign: 'center',
    // backgroundColor: 'grey',
  },
  AddPlaylisth2: {
    marginTop: '.5em',
  },
  AddPlaylistButton: {
    marginTop: '.5em',
    marginBottom: '.5em',
  }
}));

export default function AddRandomPlaylist() {
  const classes = useStyles();
  const [name, setName] = React.useState();
  const [songcount, setSongCount] = React.useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name)
  };

  const handleSongCountChange = (event) => {
    setSongCount(event.target.value);
    console.log(songcount)
  };

  const handleClick = () => {
    fetch(`http://192.168.0.91:9090/AddRandomPlaylist?songcount=${songcount}&&name=${name}`)
        .then(response => console.log(response));
  };

  return (
    <div className={classes.Box1Div}>
      <Box className={classes.Box1}>
        <h2>Add Random Playlist</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="Random-Name"
              label="Random Playlist Name"
              placeholder="Random Playlist Name"
              multiline
              variant="outlined"
              onChange={handleNameChange}
              value={name}
            />
            <TextField
              id="Random-Number"
              label="Number Of Songs"
              placeholder="Number Of Songs"
              multiline
              variant="outlined"
              onChange={handleSongCountChange}
              value={songcount}
            />
          </div>
          <Button onClick={handleClick} className={classes.AddPlaylistbutton}>Create</Button>
        </form>
      </Box>
    </div>
  );
}