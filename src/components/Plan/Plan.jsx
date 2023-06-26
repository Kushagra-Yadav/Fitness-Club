import React from 'react'
import {plansData} from '../../data/plansData';
import './Plan.css'
import whiteTick from '../../assets/whiteTick.png'
import rightarrow from '../../assets/rightArrow.png'
const Plan = () => {
  return (
    <div className='plan'>
        <div className='program-header'>
            <span className='text-stroke'>ready to start</span>
            <span>you journey</span>
            <span className='text-stroke'>now with us</span>
        </div>
        <div className='plan-card'>
        {
            plansData.map((data,i)=>(
                <div className='plan-detail' key={i}>
                    {data.icon}
                    <span>{data.name}</span> 
                    <span>$ {data.price}</span>
                {
                    data.features.map((feature,ind)=>
                    (
                        <div className='feature-of' key={ind}>
                          <img src={whiteTick} /> <span>{feature}</span>
                        </div>
                    ))
                }
                <span>See more benefit<img src={rightarrow}></img></span>
                 <button className='btn'>Join Now</button>
                </div>
            ))
          }
            <div className='blur plan-l-blur'></div>
          <div className='blur plan-r-blur'></div>
        </div>
    </div>
  )
}

export default Plan;