import React from 'react'
import './Program.css'
import rightArrow from '../../assets/rightArrow.png';
import {programsData} from '../../data/programsData.js';
const Program = () => {
  return (
    <div className='program' id="program" >
        <div className='program-header'>
            <span className='text-stroke'>explore our</span>
            <span>programs </span>
            <span className='text-stroke'>to shape you</span>
        </div>
        <div className='program-categories'>
        { programsData.map((program)=>
        {
            return(
                <div className='category'> 
                 <div>{program.image}</div>
                  <div>{program.heading}</div>
                  <div>{program.details}</div>
                  <div className='join-now'><span>Join Now</span><img src={rightArrow}/></div>
                </div>
                  );
        })

    }
        </div>
    </div>
  )
}

export default Program;