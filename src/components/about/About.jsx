import React from 'react'
import './about.css'
import Myimg from '../../assets/Me.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { FaFolderPlus } from 'react-icons/fa'
// import Aos from 'aos'
// import { useEffect } from 'react'
// import 'aos/dist/aos.css'

const About = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000});
  // }, []);
  return (
    <section id='about'>
      <h5 data-aos="fade-down">Get To Know</h5>
      <h2 data-aos="fade-left">About Me</h2>
      <div className="container about__container">
      <div data-aos="fade-up" className="about__me">
          <div className="about__me-image">
            <img src={Myimg} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article data-aos="fade-right" className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            {/* <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>30+ Worldwide</small>
            </article> */}

            <article data-aos="fade-left" className='about__card'>
              <FaFolderPlus className='about__icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p data-aos="fade-up">
           I am ROM DARO ( NoLiMitz ), Front End Developer from Cambodia, 
           Phnom Penh. I have experience in web site design for front end building
           and customization, also I am good at design skill. I love to talk 
           with you about our unique.
          </p>

          <a data-aos="fade-left" href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About