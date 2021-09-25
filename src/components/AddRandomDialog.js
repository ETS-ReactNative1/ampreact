import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState();
    const [songcount, setSongCount] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
            .then(response => 
            console.log(response)
        )
        setOpen(false);
    };

  return (
    <div>
        <Button 
            variant="outlined"
            onClick={handleClickOpen} 
            style={{backgroundColor: "black", color: "gold", fontSize: 22}}
        >
            Add Random
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                Add Random Playlist
            </DialogTitle>
            <DialogContent>
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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClick} color="primary">
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
