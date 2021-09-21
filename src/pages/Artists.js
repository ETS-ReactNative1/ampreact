import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  acord: {
    backgroundColor: 'gold',
  },
  link: {
    textDecoration: "none",
    color: "green",
  }
}));

export default function Artists() {
  const classes = useStyles();

  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchArtists() {
      const response = await fetch(
        "http://192.168.0.91:9090/InitArtistInfo2"
      );
      const fetchArtistz = await response.json(response);
      setData(fetchArtistz);
    }
    fetchArtists();
  }, []);

  var store = require('store')
  function albumIdToLocalStorage(albid, albname) {
    store.set('albumID', { albumID:albid })
    store.set('albname', { albname:albname })
  };
  
  return (

    <div className={classes.root}>
      {data.map((item) =>
        <Accordion className={classes.acord} key={item.ArtistID}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Box flexDirection="column">
              <Typography className={classes.heading} component="h5" variant="h5">
                {item.Artist}
              </Typography>
              <Typography className={classes.heading}>
                {item.Albums.length} albums
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box flexDirection="column">
              {item.Albums.map((itemitem) =>
                <Typography style={{color: "green"}}
                            key={itemitem.fileID}
                            component="h6" variant="h6"
                            onClick={(() => albumIdToLocalStorage(itemitem.albumID, itemitem.album))}
                >
                <a href="/SongsForAlbum" className={classes.link}>{itemitem.album}</a>
                {/* <Link to="/SongsForAlbum">{itemitem.album}</Link> */}
                </Typography>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
}
