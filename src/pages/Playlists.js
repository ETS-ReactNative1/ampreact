import React from 'react';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    background: "gold",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  p1: {
    textAlign: "center",
  }
}));

export default function PlaylistsCard() {
  const classes = useStyles();
  return ( 
    <div>
      <Box className={classes.p1}>
        <h1 >Playlists</h1>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Link to="/AddPlaylists"><PlaylistAddIcon style={{ fontSize: 60, color: "gold"}} /></Link>
          <a href="/AddPlaylists"><PlaylistAddIcon style={{ fontSize: 60, color: "gold"}} /></a>
        </ButtonGroup>
      </Box>
      <List>
        <ListItem>
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  MyCoolPlaylist
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  10 songs
                </Typography>
              </CardContent>
            </div>
          </Card>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <EditIcon fontSize="large" color="gold" />
            <DeleteIcon fontSize="large" color="gold" />
          </ButtonGroup>
        </ListItem>
        <ListItem>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    MyCoolPlaylist2
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    33 songs
                  </Typography>
                </CardContent>
              </div>
            </Card>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <EditIcon fontSize="large" color="gold" />
              <DeleteIcon fontSize="large" color="gold" />
            </ButtonGroup>
        </ListItem>
        <ListItem>
          <ListItemText primary={"Playlist1"} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Playlist2"} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Playlist3"} />
        </ListItem>
      </List>
    </div>
  );
}
