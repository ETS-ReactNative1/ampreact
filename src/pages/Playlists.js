import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PlayListBox from '../components/PlayListBox';
import PlayListDeleteButton from '../components/PlayListDeleteButton';


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
  console.log(data)

  return ( 
    <div>
      <div>
        <Box className={classes.p1}>
          <h1 >Playlists</h1>
          <ButtonGroup style={{padding: "1em"}}>
            <Button 
              href="/AddPlaylist"
              size="large" 
              variant="contained" 
              style={{backgroundColor: "black", color: "gold"}}>
              Add
            </Button>
            <Button 
              href="/AddRandomPlaylist"
              size="large" 
              variant="contained" 
              style={{backgroundColor: "black", color: "gold"}}>
              Add Random
            </Button>
          </ButtonGroup>
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
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                      <Button>Load</Button>
                      <Button>Edit</Button>
                      <PlayListDeleteButton data={{playlistID:item.PlayListID}}/>
                    </ButtonGroup>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
            )}
      </List>
    </div>
  </div>
  );
}
