import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AmpBarComp from '../components/AmpBarComp';
import { Container } from '@material-ui/core';

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
    textAlign: 'center',
  },
  mycard: {
    width: "100%",
    textDecoration: 'none',
  },
  a: {
    underline: "none",
  },
  myul: {
    display: "none"
  }
}));

export default function ArtistCard() {
  const classes = useStyles();
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchArtists() {
      const response = await fetch(
        "http://192.168.0.91:9090/InitArtistInfo"
      );
      const fetchArtistz = await response.json(response);
      setData(fetchArtistz);
    }
    fetchArtists();
  }, []);

  const [showlist1, setShowList1] = useState(false);

  return ( 
    <div>
      <AmpBarComp />
      <h1 className={classes.myh1}>Artist Page</h1>
      <List >
        {data.map((item) =>
        <div key={"divlistitem" + item.artistID}>
          <ListItem onClick={() => setShowList1(true)}  key={item.artistID}>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {item.artist} 
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {item.albcount} albums
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            <Container style={{ display: showlist1 ? "block" : "none" }}>
              <div>
                <ul>
                  <li key="0" onClick={() => setShowList1(false)}>fuck one</li>
                  <li key="1" onClick={() => setShowList1(false)}>fuck two</li>
                  <li key="2" onClick={() => setShowList1(false)}>fuck three</li>
                </ul>
              </div>
            </Container> 
          </ListItem>
        </div>
        )}
      </List>
    </div>
  );
}
