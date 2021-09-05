import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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
  myh1: {
    textAlign: "center",
  }
}));

export default function ArtistCard() {
  const classes = useStyles();

  // var store = require('store')
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   async function fetchAlbums() {
  //     const response = await fetch(
  //       "http://192.168.0.91:9090/InitAlbumInfo"
  //     );
  //     const fetchAlbumz = await response.json(response);
  //     setData(fetchAlbumz);
  //   }
  //   fetchAlbums();
  // }, []);

  // console.log(data);

  // function albumIdToLocalStorage(albid) {
  //   console.log(albid)
  //   store.set('albumID', { albumID:albid })
  // };


  return ( 
  <div>
    <h1 className={classes.myh1}>Songs Page</h1>
    <List>
      <ListItem>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Concrete And Steele
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                ZZ Top
              </Typography>
            </CardContent>
          </div>
        </Card>
        <IconButton>
          <AddCircleOutlineIcon style={{ color: 'gold', paddingLeft: "10px" }}/>
        </IconButton>
      </ListItem>
      <ListItem>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Blue Jeans Blues
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                ZZ Top
              </Typography>
            </CardContent>
          </div>
        </Card>
        <IconButton>
          <AddCircleOutlineIcon style={{ color: 'gold', paddingLeft: "10px" }}/>
        </IconButton>
      </ListItem>
    </List>
  </div>
  );
}

