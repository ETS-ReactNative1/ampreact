import React, { useEffect, useState } from 'react';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';

export default function SelectPlaylist() {

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


    // const [value2, setValue2] = useState();
    
    const handleClick = (plid) => {
        // setValue2(plid)
        localStorage.setItem('currentplaylistID', { currentplaylistID:plid })
    //     //   setValue(event.target.value);
    };


    return (
        <div>
            <List>
                {data.map((item) =>
                <ListItem >
                    <Button href="/" onClick={() => handleClick(item.PlayListID)} style={{backgroundColor: "gold", width: "100%", height:"4em", fontSize: 18}}>{item.PlayListName}</Button>
                    {/* <ListItemText>{item.PlayListName}</ListItemText> */}
                    
                </ListItem>

                )}
            </List>

       
        
        

  
        </div>
    );
}