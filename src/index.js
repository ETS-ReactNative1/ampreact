import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouterDOM from 'react-router-dom';
// const { BrowserRouter, Route, Link } = ReactRouterDOM;
const { BrowserRouter, Route } = ReactRouterDOM;
import Home from './pages/Home.js';
import Albums from './pages/Albums.js';
import Songs from './pages/Songs.js';
import Playlists from './pages/Playlists';
import AddPlaylist from './pages/AddPlaylist';
import Player from './pages/Player';
import AlbumsSongs from './pages/SongsForAlbum';
import SongsForAlbum from './pages/SongsForAlbum';
import './index.css';
import Artists from './pages/Artists';
// import BackGround from "./pages/images/bg.png";
import BottomPlayerControls from './components/BottomPlayerControls';
import AmpBarComp from './components/AmpBarComp';
import ReactAudioPlayer from 'react-audio-player';

import AddRandomPlaylist from './pages/AddRandomPlaylist.js';



// const queryClient = new QueryClient()


export default function IndexPage({props}) {

  return (
    <div >
      <ReactAudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        controls
        id={"Audio2"}
        className={"Audio2"}
      />

      {/* <BottomPlayerControls /> */}
      {/* <audio id="Audio2" className={"Audio2"}> */}
      {/* <audio id="Audio2" className={"Audio2"} controls={true}>
      
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source>
      </audio>  */}
      <Route exact path='/' component={Home} />
      <Route path='/Artists' component={Artists} />
      <Route path='/Albums' component={Albums} />
      <Route path='/Songs' component={Songs} />
      <Route path='/Playlists' component={Playlists} />
      <Route path='/AddPlaylist' component={AddPlaylist} />
      <Route path='/AddRandomPlaylist' component={AddRandomPlaylist} />
      <Route path='/Player' component={Player} />
      <Route path='/SongsForAlbum' component={SongsForAlbum} />
      <Route path='/Z' component={AlbumsSongs} />
      
    </div>
  );
}

ReactDOM.render((
  
    <BrowserRouter>
      
      <AmpBarComp />
      <IndexPage />
    </BrowserRouter>
  
  ), document.getElementById('root')
);
