import React from 'react';



export default function PlaylistButtonGroup() {
    
    const [showadd, setShowAdd] = useState(false)
    const handleAddClick = () => {
      if (showadd) {
        setShowAdd(false)
      } else {
        setShowAdd(true)
      }
    }
  
    const [showaddrandom, setShowAddRandom] = useState(false);
    const handleAddRandomClick = () => {
      if (showaddrandom) {
        setShowAddRandom(false);
      } else {
        setShowAddRandom(true);
      }
    }
    return (
    <div>
        <Box className={classes.p1}>
            <h1 >Playlists</h1>
            <ButtonGroup style={{padding: "1em"}}>
                <Button 
                    data={{showadd:showadd}}
                    onClick={handleAddClick}
                    // href="/AddPlaylist"
                    size="large" 
                    variant="contained" 
                    style={{backgroundColor: "black", color: "gold"}}>
                    Add
                </Button>
                <Button 
                    // href="/AddRandomPlaylist"
                    onClick={handleAddRandomClick}
                    size="large" 
                    variant="contained" 
                    style={{backgroundColor: "black", color: "gold"}}>
                    Add Random
                </Button>
            </ButtonGroup>
        </Box>
        {showadd ? <AddPlaylists /> : null}
        {showaddrandom ? <AddRandomPlaylists /> : null }
    </div>
    );
}