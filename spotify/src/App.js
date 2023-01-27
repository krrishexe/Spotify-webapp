import './css/App.css';
import Login from './components/Login';
import { useEffect } from 'react';
import { getTokenFormUrl } from './spotify';
// import { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue } from './components/DataLayer';

const spotify = new SpotifyWebApi();


function App() {
  // const [token,setToken] = useState(null);
  const [user,token,dispatch] = useDataLayerValue();  // put '{}' after you are finished developing.

  useEffect(()=>{
    const hash = getTokenFormUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })

      spotify.setAccessToken(_token); 
      spotify.getMe().then((user) =>{     // .then bcoz the getMe() method return a promise.
        dispatch({
          type:'SET_USER',            // dispatch is like a gun , it will grab the user by the .getMe() method and then will shoot the user to the datalayer and the reducer.
          user:user
        });
        // console.log("user", user);
      })
    }
    
    console.log("access spotify 🚀", _token); 
    // eslint-disable-next-line
  },[]);

  console.log("user" , user);
  console.log("token" , token);

  return (
    <div className="app">
      {
        token ? <Player spotify={spotify} /> : <Login/>  // if the user comes with a access token in the url then run the player component otherwise run Login component again.
      }

    </div>
  );
}

export default App;
