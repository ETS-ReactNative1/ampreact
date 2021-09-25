import React from 'react';
import Button from '@material-ui/core/Button';

export default function PlayListDeleteButton(props) {

  const handleClick = () => {
    const URL = `http://192.168.0.91:9090/DeletePlayList?playlistid=${props.data.playlistID}`
    fetch(URL).then(response => console.log(response));
  };
  
  return (
      <Button onClick={handleClick}>Delete</Button>
  )
}