import React from 'react'
import './All.css'
import {  NavLink} from 'react-router-dom'
function Home() {





  return (
    <div className='navbar'>
   
     <ul className='nav1'>
   <li >  <NavLink to = '/Home' className='nav'>Home</NavLink></li>
   <li>  <NavLink to = '/Help' className='nav'>Help</NavLink></li>
   <li>  <NavLink to = '/Contact' className='nav'>Contact</NavLink></li>
   <li>  <NavLink to = '/About1' className='nav'>About</NavLink></li>

     </ul>

    </div>
  )
}

export default Home