import './css/App.css';
import Login from './components/Login';
import { useEffect } from 'react';
import { getTokenFormUrl } from './spotify';
import { useState } from 'react';

function App() {

  const [token,setToken] = useState(null);

  useEffect(()=>{
    const hash = getTokenFormUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    
    if(_token){
      setToken(_token);
    }

    console.log("access spotify 🚀" , _token); 
  },[]);

  return (
    <div className="app">
      {
        token ? <h1>Congrats you are logged in !!</h1>:<Login/>
      }

    </div>
  );
}

export default App;
