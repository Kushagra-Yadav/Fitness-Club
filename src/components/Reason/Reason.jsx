import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png';
import nike from '../../assets/nike.png';
import adidas from '../../assets/adidas.png';
import nb from '../../assets/nb.png'
import './Reason.css'
const Reason = () => {
  return (
    <div className='reason' id='reason'>
        <div className='reason-l'>
           <div className='images'>
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>

           </div>
        </div>
        <div className='reason-r'>
         <div className='some-reason'>Some reasons</div>
         <div><span className='text-stroke'>Why</span><span>Choose us ?</span></div>
         <div className='reasons-value'>
            <div><img src={tick}></img><span>over 140+ expert coaches</span></div>
            <div><img src={tick}></img><span>trains smarter and faster than before</span></div>
            <div><img src={tick}></img><span>free program for new member</span></div>
            <div><img src={tick}></img><span>1 reliable partners</span></div>
         </div>
         <div className='our-partner'>
            <span>Our Partner</span>
            <div>
                <img src={nb}/>
                <img src={nike}/>
                <img src={adidas}/>
                
            </div>
         </div>
        </div>
    </div>
  )
}

export default Reason