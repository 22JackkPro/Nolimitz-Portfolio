import React from 'react'
import './contact.css'
import { MdMarkEmailRead } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
// import Aos from 'aos'
// import { useEffect } from 'react'
// import 'aos/dist/aos.css'

const Contact = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000});
  // }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p1gratl', 'template_vnyc28l', form.current, 'HugcRquz6kc4WC8Qo')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5 data-aos="fade-down">Get In Touch</h5>
      <h2 data-aos="fade-up">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article data-Aos="fade-right" className="contact__option">
            <MdMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Example22@gmail.com</h5>
            <a href="Mylinkeemail.com" target='_blank'>Send a Message</a>
          </article>
          <article data-Aos="fade-left" className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ro Jackk</h5>
            <a href="https://m.me/ro.twentytwo" target='_blank'>Send a Message</a>
          </article>
          <article data-Aos="fade-right" className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+855 96 429 5628</h5>
            <a href="https://wa.link/ovvbaq" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/*==== end of contact option==== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your First Name' required data-aos="fade-down"/>
          <input type="email" name='email' placeholder='Your Email' required data-aos="fade-right"/>
          <textarea name="message" rows="7" placeholder='Your Message' required data-aos="fade-left"></textarea>
          <button data-aos="fade-up" type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact