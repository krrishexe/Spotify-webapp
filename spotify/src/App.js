import './css/App.css';
import Login from './components/Login';
import { useEffect } from 'react';
import { getTokenFromResponse } from './spotify';
// import { useState } from 'react';
import {useDataLayerValue} from "./components/DataLayer"
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
// import { useDataLayerValue } from './components/DataLayer';



const s = new SpotifyWebApi();

function App() {
  const [ token , dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    console.log(token);
    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;






















// const spotify = new SpotifyWebApi();


// function App() {
//   // const [token,setToken] = useState(null);
//   const [user,{token},dispatch] = useDataLayerValue();  // put '{}' after you are finished developing.

//   useEffect(()=>{
//     const hash = getTokenFormUrl();
//     window.location.hash = "";
//     const _token = hash.access_token;

//     if(_token){
      
//       dispatch({
//         type:"SET_TOKEN",
//         token:_token
//       });

//       spotify.setAccessToken(_token); 
//       spotify.getMe().then((user) =>{     // .then bcoz the getMe() method return a promise.
//         dispatch({
//           type:'SET_USER',            // dispatch is like a gun , it will grab the user by the .getMe() method and then will shoot the user to the datalayer and the reducer.
//           user:user
//         });
//         // console.log("user", user);
//       });

//       spotify.getUserPlaylists().then((playlists) => {
//         dispatch({
//           type:"SET_PLAYLISTS",
//           playlists,
//         });
//       });

//     }
    
//     console.log("access spotify 🚀", _token); 
//     // eslint-disable-next-line
//   },[token,dispatch]);

//   console.log("user" , user);
//   console.log("token" , token);

//   return (
//     <div className="app">
//       {
//         token ? <Player spotify={spotify} /> : <Login/>  
//         // if the user comes with a access token in the url then run the player component otherwise run Login component again.
//       }

//     </div>
//   );
// }

// export default App;
