import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';



const Footer = () => {
  return (
<div className='footer'>
    <hr/>
    <div>
     <img src={linkedin} alt="" /><img src={instagram} alt="" /><img src={github} alt="" />
    </div>
    <div>
        <img src={logo} alt=''></img>
    </div>
    <div className='blur footer-left-blur'></div>
    <div className='blur footer-right-blur'></div>

</div> 
 )
}

export default Footer