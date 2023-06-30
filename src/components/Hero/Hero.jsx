import React from 'react'
import './Hero.css';
import hero from '../../assets/hero_image.png'
import hero_back_image from '../../assets/hero_image_back.png'
import heart_image from '../../assets/heart.png'
import calorie_image from '../../assets/calories.png'
import Header from '../Header/Header';
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion';
const Hero = () => {
    const transition={type:"spring",duration:4};
  return (
    <div className='hero' id='home'>
        <div className='hero-l'>
            <Header/>
            <div className='blur hero-blur'></div>
            <div className='best-add'>
                <motion.div
                initial={{left:"238px"}}
                whileInView={{left:"8px"}}
                transition={{...transition,duration:5}}>
                </motion.div>
                <span>the best fitness club in the town</span>
            </div>
            <div className='hero-text'>
             <div>
                <span className='text-stroke'>Shape</span>
                <span className='span1'> your</span>
             </div>
             <div>
             <span className='span1'><span>ideal</span><span> body</span></span>
             </div>
             <div>
                <span>Here we help you to build and shape your body and live your life to the fullest</span>
             </div>
            </div>
            <div className='hero-figures'>
                <div>
                    <span><NumberCounter start={60} end={140} preFix="+" delay="6"/></span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                    <span><NumberCounter start={500} end={940}delay="2" preFix="+"/></span>
                    <span>Member Joined</span>
                </div>
                <div>
                    <span><NumberCounter start={0} end={50} delay="4" preFix="+"/></span>
                    <span>programmes</span>
                </div>
            </div>
            <div className='hero-buttons'>
                <button className='btn b1'>Get Started</button>
                <button className='btn b2'>Learn More</button>

            </div>
        </div>
        <div className='hero-r'>
          <button className='btn join'>JOIN NOW</button>
          <motion.div className='heart-box'
          initial={{x:100}}
          whileInView={{x:0}}
          transition={{...transition,duration:4}}

          >
             <div className='heart-image'><img src={heart_image}/></div>
             <div><span>Heart Rate</span></div>
             <div><span>116bpm</span></div>
          </motion.div>
          <img className="hero-img" src={hero}/>
          <motion.img 
          initial={{x:100}}
          whileInView={{x:0}}
          transition={{...transition,duration:5}} className="hero-back-img" src={hero_back_image}/>
            <motion.div 
            initial={{x:-100}}
            whileInView={{x:0}}
            transition={{...transition,duration:4}}
            className='calorie'>
            <img src={calorie_image}/>
            <div>
                <span>Calorie burnt</span>
                <span>48kcal</span>
            </div>
            </motion.div>
          </div>
        </div>
  
  )
}

export default Hero;