import React from 'react';
// import ReactDOM from 'react-dom';
import ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import clsx from 'clsx';
// import Home from './pages/Home.js';
// import Artists from './pages/Artists.js';
// import Albums from './pages/Albums.js';
// import Songs from './pages/Songs.js';
// import Playlists from './pages/Playlists';
// import AddPlaylists from './pages/AddPlaylists';
// import Player from './pages/Player';
// import AlbumSongs from './pages/AlbumsSongs';
// import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AlbumIcon from '@material-ui/icons/Album';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import HomeIcon from '@material-ui/icons/Home';
// import ArtistAlbums from '../pages/ArtistAlbums';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function AmpBarComp() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <Link to="/">
            <ListItemText primary={"Home"} />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <Link to="/Artists">
            <ListItemText primary={"Artists"} />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><AlbumIcon /></ListItemIcon>
          <Link to="/Albums">
            <ListItemText primary={"Albums"} />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <Link to="/Songs">
            <ListItemText primary={"Songs"} />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>  
        <ListItem>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <Link to="/Playlists">
            <ListItemText primary={"Playlists"} />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><MusicNoteIcon /></ListItemIcon>
            

            <Link to="/Player" >
              
              <ListItemText primary={"Player"} />
            </Link>
          
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {/* <div>
        
        <Route path='/' component={Home} />
        <Route path='/Artists' component={Artists} />
        <Route path='/Albums' component={Albums} />
        <Route path='/Songs' component={Songs} />
        <Route path='/Playlists' component={Playlists} />
        <Route path='/AddPlaylists' component={AddPlaylists} />
        <Route path='/Player' component={Player} />
        <Route path='/ArtistAlbums' component={ArtistAlbums} />
        <Route path='/AlbumsSongs' component={AlbumSongs} />
      </div> */}
      <AppBar position="static" color="transparent">
        <Toolbar >
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <React.Fragment key={'left'}>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
              {list('left')}
            </Drawer>
          </React.Fragment>
          <Typography variant="h6" className={classes.title}>
            AmpGo
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      
      <audio className={"Audio1"} controls={true}>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source>
      </audio>
      



    </div>
  );
}

// ReactDOM.render((
//   <BrowserRouter>
//     <IndexPage />
//   </BrowserRouter>
//   ), document.getElementById('root')
// );
