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

export default function AddRandomPlaylist() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
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
              onChange={handleChange}
            />
            <TextField
              id="Random-Number"
              label="Number Of Songs"
              placeholder="Number Of Songs"
              multiline
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <Button className={classes.AddPlaylistbutton}>Create</Button>
        </form>
      </Box>
    </div>
  );
}