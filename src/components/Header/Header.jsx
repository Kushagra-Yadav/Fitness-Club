import React from 'react'
import './Header.css'
import logo from 'C:/Users/kusha/OneDrive/Desktop/FITCLUB/FitClub-Starter/src/assets/logo.png';
const Header = () => {
  return (
    <div className='header'>
       <img src={logo}/>
       <ul className='header-items'>
         <li>Home</li>
         <li>Program</li>
         <li>Why us</li>
         <li>Plans</li>
         <li>Testimonials</li>
       </ul>
    </div>
  )
}

export default Header;