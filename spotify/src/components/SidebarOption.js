import React from 'react'
import "../css/SidebarOption.css"


function SidebarOption({title,Icon}) {
  return (
    <div className='SidebarOption'>
        {Icon && <img className='sidebarOption__icon' src = {Icon} alt=""/>}
       {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption
