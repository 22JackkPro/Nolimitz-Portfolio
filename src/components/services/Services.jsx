import React from 'react'
import './services.css'
import {CgCheckO} from 'react-icons/cg'
// import Aos from 'aos'
// import { useEffect } from 'react'
// import 'aos/dist/aos.css'

const Services = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000});
  // }, []);
  return (
    <section id='service'>
      <h5 data-aos="fade-right">What I Offer</h5>
      <h2 data-aos="fade-left">Services</h2>

      <div className="container services__container">
         <article className='service' data-aos="fade-down">
            
            <ul className="service__list">
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>High-quality, pixel-perfect web UI UX design.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Website landing page UI with Figma.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Bootstrap grid system UI layout.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Assets for the development team.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Website design Figma and more.</p>
              </li>
            </ul>
            <div className="service__head">
              <h3>UX/UI Design</h3>
            </div>
         </article>
         {/*====== end of ui/ui design ======*/}
         <article className='service-middle' data-aos="fade-up">
            <div className="service__head-middle">
              <h3>Front End Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Build a Great Responesive for your Web Project.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Maintenance and optimization of websites and user interfaces.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Transform a UX/UI design (sketch, mockup) into reality.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Improve user usability with new features and processes.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Build a Hight-Quality web interface for Clients.</p>
              </li>
            </ul>
         </article>
         {/*====== end of Web development ======*/}
         <article className='service' data-aos="fade-down">
            
            <ul className="service__list">
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Build a hight-quality website banner design.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Build a hight-quality Business Card design.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Build a hight-quality Poster Product design</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Build a hight-quality and Creative Logo design.</p>
              </li>
              <li>
                <CgCheckO className='service__list-icon'/>
                <p>Design and Edit Artwork for Clients</p>
              </li>
            </ul>
            <div className="service__head">
              <h3>Freelance Design</h3>
            </div>
         </article>
         {/*====== end of freelance design ======*/}
      </div>
    </section>
  )
}

export default Services