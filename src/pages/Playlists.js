import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PlayListBox from '../components/PlayListBox';
// import PlayListDeleteButton from '../components/PlayListDeleteButton';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';

import AddPlaylistDialog from '../components/AddPlaylistDialog';
import AddRandomDialog from '../components/AddRandomDialog';

// import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  p1: {
    textAlign: "center",
  }
}));

export default function PlaylistsCard() {
  const classes = useStyles();
  
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchPlaylists() {
      const response = await fetch(
        "http://192.168.0.91:9090/AllPlaylists"
      );
      const fetchPlaylistz = await response.json(response);
      setData(fetchPlaylistz);
    }
    fetchPlaylists();
  }, []);
  var playlists = JSON.stringify(data);
  localStorage.setItem("playlistList", playlists);

  console.log(data)

  const [plists, setPLists] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
    var playlistsSTRING = localStorage.getItem('playlistList');
    var newplist = JSON.parse(playlistsSTRING);
    setPLists(newplist);
  };

  function handleClose(plid) {
    setAnchorEl(null);
    var plidd = JSON.stringify(plid);
    localStorage.setItem("currentPlayListID", plidd);
  };

  return ( 
    <div>
      <div>
        <Box className={classes.p1}>
          {/* <h1>Playlists</h1> */}
          <ButtonGroup style={{padding: "1em"}}>
            <AddPlaylistDialog />
            <AddRandomDialog />
          </ButtonGroup>
          <Box>
            <Tooltip title="Load Selected Playlist">
              <IconButton color="inherit" >
                <GetAppIcon color="inherit"/>
              </IconButton>
            </Tooltip>

            <Tooltip title="Edit Selected Playlist">
              <IconButton color="inherit" >
                <EditIcon color="inherit"/>
              </IconButton>
            </Tooltip>

            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleSettingsClick} color="inherit" >
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
              <IconButton color="inherit" >
                <DeleteIcon color="inherit"/>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </div>
        <div className={classes.root}>
          <List >
            {data.map((item) =>
              <ListItem key={item.PlayListID}>
                <Accordion id={item.PlayListID} style={{width: "100%", backgroundColor: "gold", }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                  <PlayListBox data={{playlistname:item.PlayListName, playlistcount:item.PlayListCount}}/>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* { 
                      item.Playlist.length > 0
                    ?
                    
                    item.PlayList.map((itemitem) => 
                      <Typography style={{color: "green"}} component="h6" variant="h6">
                        {itemitem.FileID}
                      </Typography> )
                    :
                    <Typography>Fuck</Typography>
                    
                    } */}
                    {/* <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                      <Button>Load</Button>
                      <Button>Edit</Button>
                      <PlayListDeleteButton data={{playlistID:item.PlayListID}}/>
                    </ButtonGroup> */}
                  </AccordionDetails>
                </Accordion>
              </ListItem>
            )}
      </List>
    </div>
  </div>
  );
}
