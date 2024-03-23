import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
        <Navbar/>      
        <Outlet/>  
        <div className='footer-container'> 
        {/* <Footer/> */}
          </div>    
    </div>
  )
}
export default RootLayout






















