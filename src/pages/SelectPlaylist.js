import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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
    
    const handleClick = (plid) => {
        plidd = JSON.stringify(plid);
        localStorage.setItem('currentplaylistID', plidd);
    };

    return (
        <div>
            <List>
                {data.map((item) =>
                    <ListItem >
                        <Button 
                            href="/" 
                            onClick={() => handleClick(item.PlayListID)} 
                            style={{backgroundColor: "gold", width: "100%", height:"4em", fontSize: 18}}
                            >
                            {item.PlayListName}
                        </Button>
                    </ListItem>
                )}
            </List>
        </div>
    );
}