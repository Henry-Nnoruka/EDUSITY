import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  //Your EmailJs service ID, template ID, and Public key
const serviceId = 'service_1fgzcqe';
const templateId = 'template_7kz0g7x';
const publicKey = 'YEvXTClOqpmwIM2O1';

// create a new object that contains dynamic template paras
const templateParams = {
  from_name: name,
  from_email: email,
  to_name: 'Web Chidest',
  message: message,
};


// Send the email using Emailjs
emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
          console.log('Email sent successfully', response);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email', error);
        });
  }

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are 
                important to us as we strive to provide exceptional service to our university
                communit.</p>
                <ul>
                    <li> <img src={mail_icon} alt="" />nnorukahenrychidest8383@gmail.com</li>
                    <li><img src={phone_icon} alt='' />+444 243-353-354</li>
                    <li> <img src={location_icon} alt='' />32 Kenny junction <br /> Ma 102938, Canada</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit= {handleSubmit} className='emailform'>
                <label>Your name</label>
                <input type="text" name='name' value={name} 
                placeholder='Enter your name' onChange={(e) => setName(e.target.value)} required/>
                <label>Email</label>
                <input type="email" name='email' value={email} 
                placeholder='Enter your email'  onChange={(e) => setEmail(e.target.value)}  required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" value={message} 
                placeholder='Enter your message'  onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            
        </div>
      
    </div>
  )
};

export default Contact