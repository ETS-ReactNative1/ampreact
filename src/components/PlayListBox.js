import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function PlayListBox(props) {
    return (
       <Box>
            <Typography>{props.data.playlistname}</Typography>
            <Typography>{props.data.playlistcount} songs</Typography>
        </Box> 
    )
}