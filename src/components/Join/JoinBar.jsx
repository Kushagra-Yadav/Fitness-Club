import React,{ useRef } from 'react'
import './JoinBar.css'
import emailjs from '@emailjs/browser'
const JoinBar = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zrxm1ju', 'template_65sekik', form.current, 'e7RGxJSj5FAWXDqZj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='join-bar-wrapper'>
        <div className='join-bar-wrapper-l'>
          <div>
            <span className='text-stroke'>ready to</span>
            <span style={{color:"white"}}>level up</span>
          </div>
          <div>
            <span style={{color:"white"}}>your body</span>
            <span className='text-stroke'>with us ?</span>
          </div>
        </div> 
        <div className='join-bar-wrapper-r'>
            <form ref={form} className='email-container' onSubmit={sendEmail} >
              <input type="email" name="user_email" placeholder='Enter your Email'/>
              <button className='btn mail-btn'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default JoinBar;