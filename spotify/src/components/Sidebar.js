import React from 'react'
import "../css/Sidebar.css"
import SidebarOption from './SidebarOption'
import home from "../media/icons8-home-page-24.png"
import lib from "../media/icons8-music-library-30.png"
import search from "../media/icons8-search-30.png"
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Sidebar() {
  return (
    <div className='sidebar'>
      <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

      <SidebarOption title="Home" Icon={home} />
      <SidebarOption title="Search" Icon={search} />
      <SidebarOption title="Your Library" Icon={lib} />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      <SidebarOption title="Your Library" />
      <SidebarOption title="Your Library" />

    </div>
  )
}

export default Sidebar
