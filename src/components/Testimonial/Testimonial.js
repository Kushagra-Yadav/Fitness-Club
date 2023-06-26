import React, { useState } from 'react'
import './Testimonial.css'
import { testimonialsData } from '../../data/testimonialsData'
import left_arrow from '../../assets/leftArrow.png'
import right_arrow from '../../assets/rightArrow.png';
import {motion} from  'framer-motion';

const Testimonial = () => {
    const [selected,setSelected]=useState(0);
    const tlength=testimonialsData.length;
    const transition={transition:"spring",duration:6};
  return (
    <div className='testimonial'>
        <div className='testimonial-l'>
           <span>testimonial</span>
           <span className='text-stroke'>What they</span>
           <span>say about us</span>
           <div>
                <motion.span
                key={selected}
                initial={{x:-100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{transition}}
                exit={{opacity:0,x:-100}}>
                {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span>{testimonialsData[selected].name}</span>
                    {"-"}
                    <span>{testimonialsData[selected].status}</span>
                </span>
          </div>
        </div>
        <div className='testimonial-r'>
              <motion.div
              initial={{opacity:0,x:-100}}
              transition={{transition}}
              whileInView={{opacity:1,x:0}}></motion.div>
              <motion.div
              initial={{opacity:0,x:100}}
              transition={{transition}}
              whileInView={{opacity:1,x:0}}></motion.div>
              <div>
                <img onClick={()=>
                (
                    selected==0?setSelected(tlength-1):
                                setSelected((prev)=>
                                        prev-1)
                )} 
                src={left_arrow}/>
                <img  onClick={()=>
                (selected==tlength-1?setSelected(0):
                                        setSelected((prev)=>
                                        prev+1))}
                src={right_arrow}/>      
                </div>
              <motion.img
              key={selected}
              initial={{opacity:0,x:-100}} 
              animate={{opacity:1,x:0}}
              exit={{opacity:0,x:-100}}
              transition={{transition}}
              src={testimonialsData[selected].image}/>
        </div>
    </div>
  )
}

export default Testimonial