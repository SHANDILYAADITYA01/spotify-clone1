import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './components/Spotify'
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./components/Player"
import { useDataLayerValue } from "./DataLayer";
import reducer from "./components/reducer"

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();
  // Run code based on given condition 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      // setToken(_token)
      console.log("tok while auth", _token)
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        console.log("Playlists are:", playlists  )
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
      spotify.getPlaylist("https://open.spotify.com/playlist/6YKtgyN8Y7Nf7gLyN0cEqh").then(response =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discver_weekly: response,
          
        })
      })
    }
    console.log('I have a token>>>>', token);
    console.log(playlists)
  },);
  console.log("person", user)
  console.log("alien", token)
  return (
    <div className="app">
      {token ?<Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
