import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddPlaylistDialog() {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // const [show, setShow] = useState(false)
  const handleAddClick = (event) => {
    // console.log(props.data.showadd)
    // setShow(props.data.showadd)
    fetch(`http://192.168.0.91:9090/AddPlaylist?name=${name}`)
    .then(response => console.log(response));
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
        variant="outlined" 
        onClick={handleClickOpen} 
        style={{backgroundColor: "black", color: "gold", fontSize: 22}}
      >
        Add Playlist
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create An Empty Playlist</DialogTitle>
        <DialogContent>
          <TextField
              id="Name"
              label="Playlist Name"
              placeholder="Playlist Name"
              multiline
              variant="outlined"
              onChange={handleNameChange}
              // style={{backgroundColor: "black", color: "gold"}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClick} color="primary">
            Create
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
