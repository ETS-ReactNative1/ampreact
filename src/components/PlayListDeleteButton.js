import React from 'react';
import Button from '@material-ui/core/Button';

export default function PlayListDeleteButton(props) {

  function handleClick() {
    fetch(`http://192.168.0.91:9090/DeletPlayList?playlistid=${props.data.playlistID}`)
        .then(response => console.log(response));
  };
  
  return (
      <Button onClick={handleClick}>Delete</Button>
  )
}