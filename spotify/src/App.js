import './css/App.css';
import Login from './components/Login';
import { useEffect } from 'react';
import { getTokenFormUrl } from './spotify';
import { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';

const spotify = new SpotifyWebApi();


function App() {
  const [token,setToken] = useState(null);

  useEffect(()=>{
    const hash = getTokenFormUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token); 
      spotify.getMe().then(user =>{     // .then bcoz the getMe() method return a promise.
        console.log("user",user);
      })
    }
    
    console.log("access spotify 🚀", _token); 
  },[]);

  return (
    <div className="app">
      {
        token ? <Player/> : <Login/>  // if the user comes with a access token in the url then run the player component otherwise run Login component again.
      }

    </div>
  );
}

export default App;
