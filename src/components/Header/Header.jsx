import React, { useState } from 'react'
import './Header.css'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
const Header = () => {
  const  mobile=window.innerWidth<=768?true:false;
  const[menuOpened,setMenuOpened]=useState(false);
  return (
    <div className='header'>
       <img src={logo}/>
       {mobile && !menuOpened?
       (<div><img style={{width:"2rem",height:"2rem",backgroundColor:"var(--appColor)" ,borderRadius:"5px",padding:"0.2rem"}} onClick={()=>setMenuOpened(true)} src={bars}/></div>):
       (<ul className='header-items'>
         <li><Link onClick={()=>setMenuOpened(false)}
         to='home'
         span={true}
         smooth={true}>
          Home</Link></li>
         <li><Link  onClick={()=>setMenuOpened(false)}
         to='program'
         spy={true}
         smooth={true}>Program</Link></li>
         <li><Link onClick={()=>setMenuOpened(false)}
         to='reason'
         spy={true}
         smooth={true}>Why us</Link></li>
         <li><Link to='plan'  onClick={()=>setMenuOpened(false)}
         spy={true}
          smooth={true}>Plans</Link></li>
         <li ><Link to="testimonial" onClick={()=>setMenuOpened(false)}
         spy={true} smooth={true}>Testimonials</Link></li>
       </ul>) }
       
    </div>
  )
}

export default Header;