import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
// import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
// import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import CardContent from '@material-ui/core/CardContent';
// import ReactRouterDOM from 'react-router-dom';
// const { Link } = ReactRouterDOM;
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    width: '100%',
    // background: "gold",
  },
  // details: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  // content: {
  //   flex: '1 0 auto',
  // },
  p1: {
    textAlign: "center",
  }
}));

export default function PlaylistsCard() {
  const classes = useStyles();
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
        <ListItem>
        <Accordion style={{width: "100%", backgroundColor: "gold", }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography>My Cool Playlist 1</Typography>
              <Typography>5 songs</Typography>
            </Box>
            
          </AccordionSummary>
          <AccordionDetails>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button>Load</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ButtonGroup>
          </AccordionDetails>
        </Accordion>
        </ListItem>
        
        
        <ListItem>
        <Accordion style={{width: "100%", backgroundColor: "gold", }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography>My Cool Playlist 2</Typography>
              <Typography>15 songs</Typography>
            </Box>
            
          </AccordionSummary>
          <AccordionDetails>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button>Load</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ButtonGroup>
          </AccordionDetails>
        </Accordion>
        </ListItem>
        <ListItem>
        <Accordion style={{width: "100%", backgroundColor: "gold", }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography>My Cool Playlist 3</Typography>
              <Typography>55 songs</Typography>
            </Box>
            
          </AccordionSummary>
          <AccordionDetails>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button>Load</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ButtonGroup>
          </AccordionDetails>
        </Accordion>
        </ListItem>
        <ListItem>
        <Accordion style={{width: "100%", backgroundColor: "gold", }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
              <Typography>My Cool Playlist 4</Typography>
              <Typography>25 songs</Typography>
            </Box>
            
          </AccordionSummary>
          <AccordionDetails>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button>Load</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ButtonGroup>
          </AccordionDetails>
        </Accordion>
        </ListItem>
      </List>
    </div>
  </div>
  );
}
