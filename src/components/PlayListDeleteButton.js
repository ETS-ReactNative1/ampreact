import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';


export default function PlayListDeleteButton(props) {

    // const [delsongid, setDelSongID] = useState();

    // useEffect(() => {
    //     async function fetchDeletePlaylist() {
    //       const response = await fetch(
    //         `http://192.168.0.91:9090/DeletePlayList?playlistid=${delsongid}`
    //       );
    //       const fetchPlaylistResp = await response.json();
    //       console.log(fetchPlaylistResp)
    //       // setDelSongID(fetchPlaylistz);
    //     }
    //     fetchDeletePlaylist();
    //   }, [delsongid]);
    //   console.log(delsongid)

    //   function runDelete() {
    //       console.log(props.data.playlistID)
    //       setDelSongID(props.data.playlistID);
    //     //   fetchDeletePlaylist();
    //   }

      function handleClick() {
        fetch(`http://192.168.0.91:9090/DeletPlayList?playlistid=${props.data.playlistID}`)
            .then(response => console.log(response));
      };
    
    return (
        <Button onClick={handleClick}>Delete</Button>
    )
}