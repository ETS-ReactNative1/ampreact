import React from 'react';
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
    backgroundColor: 'grey',
  },
  AddPlaylisth2: {
    marginTop: '.5em',
  },
  AddPlaylistButton: {
    marginTop: '.5em',
    marginBottom: '.5em',
  }
}));

export default function AddPlaylist() {
  const classes = useStyles();

  const [name, setName] = React.useState();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = (event) => {
    fetch(`http://192.168.0.91:9090/AddPlaylist?name=${name}`)
    .then(response => console.log(response))
  }

  return (
    <div className={classes.Box1Div}>
      <Box className={classes.Box1}>
        <h2>Add Playlist</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="Name"
              label="Playlist Name"
              placeholder="Playlist Name"
              multiline
              variant="outlined"
              onChange={handleNameChange}
            />
          </div>
          <Button href="/Playlists" onClick={handleClick} className={classes.AddPlaylistbutton}>Create</Button>
        </form>
      </Box>
    </div>
  );
}
