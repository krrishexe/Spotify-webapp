import React from 'react'
import "../css/Player.css"
import Sidebar from "../components/Sidebar"
import Body from './Body'


function Player(spotify) {
  return (
    <div className='player'>
      <div className="player__body">
        <Sidebar/>
        <Body/>
      </div>
        
    </div>
  )
}

export default Player
