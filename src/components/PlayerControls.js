import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
// import SettingsIcon from '@material-ui/icons/Settings';
import Tooltip from '@material-ui/core/Tooltip';

// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import DeleteIcon from '@material-ui/icons/Delete';

// import GetAppIcon from '@material-ui/icons/GetApp';
// import EditIcon from '@material-ui/icons/Edit';

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

  var playSong = () => {
    setShowIcon(false)
    //   document.getElementById("Audio2").setAttribute('src', songhttp);
    const audioEl1 = document.getElementsByClassName("Audio2")[0]
    audioEl1.play()

  }

  var stopSong = () => {
    setShowIcon(true)
    //   document.getElementById("Audio2").setAttribute('src', songhttp);
    const audioEl2 = document.getElementsByClassName("Audio2")[0];
    audioEl2.pause();
  }


  // const [plists, setPLists] = React.useState([]);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const handleSettingsClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   var playlistsSTRING = localStorage.getItem('playlistList');
  //   var newplist = JSON.parse(playlistsSTRING);
  //   setPLists(newplist);
  // };

  // function handleClose(plid) {
  //   setAnchorEl(null);
  //   var plidd = JSON.stringify(plid);
  //   localStorage.setItem("currentPlayListID", plidd);
  // };


  return (
    <div>
      <Box className={classes.root} display="flex" flexDirection="row" justifyContent="center" alignItems="center">

          {/* <Tooltip title="Load Selected Playlist">
            <IconButton color="inherit" style={{fontSize: 37}}>
              <GetAppIcon color="inherit"/>
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit Selected Playlist">
            <IconButton color="inherit" style={{fontSize: 37}}>
              <EditIcon color="inherit"/>
            </IconButton>
          </Tooltip> */}

          {/* <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleSettingsClick} color="inherit" style={{fontSize: 37}}>
            <Tooltip title="Select A Playlist">
              <SettingsIcon color="inherit"/>
            </Tooltip>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {plists.map((item) => 
              <MenuItem key={item.PlayListID} onClick={() => handleClose(item.PlayListID)}>{item.PlayListName}</MenuItem>
            )}
          </Menu>
          <Tooltip title="Delete Selected Playlist">
            <IconButton color="inherit" style={{fontSize: 37}}>
              <DeleteIcon color="inherit"/>
            </IconButton>
          </Tooltip> */}



        <Tooltip title="Previous Song">
          <IconButton color="inherit" >
            <RemoveIcon color="inherit" style={{fontSize: 37}}/>
          </IconButton>
         
        </Tooltip>
        
        { 
            showIcon 
        ? 
          <Tooltip title="Play Song">
            <IconButton color="inherit" onClick={playSong} ><PlayArrowIcon color="inherit" style={{fontSize: 37}}/></IconButton>
          </Tooltip>
            
        :
          <Tooltip title="Pause Song">
            <IconButton color="inherit" onClick={stopSong} ><PauseIcon color="inherit" style={{fontSize: 37}}/></IconButton>
          </Tooltip>
            
        }
        <Tooltip title="Next Song">
          <IconButton color="inherit" style={{fontSize: 37}}><AddIcon color="inherit"/></IconButton>
        </Tooltip>

        
        
          {/* <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleSettingsClick} color="inherit" style={{fontSize: 37}}>
            <Tooltip title="Select A Playlist">
              <SettingsIcon color="inherit"/>
            </Tooltip>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {plists.map((item) => 
              <MenuItem key={item.PlayListID} onClick={() => handleClose(item.PlayListID)}>{item.PlayListName}</MenuItem>
            )}
          </Menu>
          <Tooltip title="Delete A Playlist">
            <IconButton color="inherit" style={{fontSize: 37}}>
              <DeleteIcon color="inherit"/>
            </IconButton>
          </Tooltip> */}
      </Box>
    </div>
  );
}
