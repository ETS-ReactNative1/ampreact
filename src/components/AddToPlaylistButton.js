import React from 'react';
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';


export default function AddToPlaylist(props) {
    
    const handleClick = () => {
        var plID = localStorage.getItem("currentPlayListID")
        var parsedPlayListID = JSON.parse(plID)
        var URL = `http://192.168.0.91:9090/AddSongToPlaylist?playlistid=${parsedPlayListID}&&fileid=${props.fileID}`
        console.log(URL)
        fetch(URL).then(response => console.log(response));
    }
    
    return (
        <Tooltip title="Add to Playlist">
            <IconButton onClick={handleClick} >
                <AddIcon style={{fontSize: 55, textOverflow: "…", color: "gold"}}/>
            </IconButton>
        </Tooltip>
    );
}