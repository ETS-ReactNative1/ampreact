import React from 'react';
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';


export default function AddToPlaylist() {
    var plList = localStorage.getItem("playlistList")
    var newplList = JSON.parse(plList)
    console.log(newplList)
    
    return (
        <Tooltip title="Add to Playlist">
            <IconButton>
                <AddIcon style={{fontSize: 55, textOverflow: "…", color: "gold"}}/>
            </IconButton>
        </Tooltip>
    );
}