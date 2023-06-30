import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
import {BsBookHalf} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageDots} from 'react-icons/bi'
import { useState } from 'react'
// import Aos from 'aos'
// import { useEffect } from 'react'
// import 'aos/dist/aos.css'

const Nav = () => {
  // useEffect(() => {
  //   Aos.init({ duration:2000 });
  // }, []);
  const [activeNav, setactiveNav] = useState('#')
  return (
    <nav data-aos="fade-up">
       <a href="#" onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
       <a href="#about" onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserPlus/></a>
       <a href="#experience" onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookHalf/></a>
       <a href="#service" onClick={() => setactiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceFill/></a>
       <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDots/></a>
    </nav>
  )
}

export default Nav