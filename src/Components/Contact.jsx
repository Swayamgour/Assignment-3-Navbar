import React from 'react'
import { useNavigate } from 'react-router-dom'
import './All.css'
import About from '../Components/About'
function Home() {

    



  return (
    <div className='navbar'>
   
    <About />
     <h1 style={{textAlign:'center' , marginTop:'18rem'}}>Contact Page</h1>

    </div>
  )
}

export default Home