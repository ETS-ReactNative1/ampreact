import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouterDOM from 'react-router-dom';
// const { BrowserRouter, Route, Link } = ReactRouterDOM;
const { BrowserRouter, Route } = ReactRouterDOM;
import Home from './pages/Home.js';
import Albums from './pages/Albums.js';
import Songs from './pages/Songs.js';
import Playlists from './pages/Playlists';
import AddPlaylists from './pages/AddPlaylists';
import Player from './pages/Player';
import AlbumsSongs from './pages/SongsForAlbum';
import SongsForAlbum from './pages/SongsForAlbum';
import './index.css';
import Artists from './pages/Artists';

export default function IndexPage() {

  return (
    <div>
      <audio id="Audio2" className={"Audio2"} controls={true}>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source>
      </audio> 
      <Route exact path='/' component={Home} />
      <Route path='/Artists' component={Artists} />
      <Route path='/Albums' component={Albums} />
      <Route path='/Songs' component={Songs} />
      <Route path='/Playlists' component={Playlists} />
      <Route path='/AddPlaylists' component={AddPlaylists} />
      <Route path='/Player' component={Player} />
      <Route path='/SongsForAlbum' component={SongsForAlbum} />
      <Route path='/Z' component={AlbumsSongs} />
    </div>
  );
}

ReactDOM.render((
  <BrowserRouter>
    <IndexPage />
  </BrowserRouter>
  ), document.getElementById('root')
);
