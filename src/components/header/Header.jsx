import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './headerSocials'
import LG from '../../assets/logo portfollio.png'
import {MdVerified} from 'react-icons/md'

// import Aos from 'aos'
// import { useEffect } from 'react'
// import 'aos/dist/aos.css'


const Header = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000});
  // }, []);
  return (
    <header>
      <div  className="container header__container">
        <div data-aos="fade-down" className='logo'>
            <img src={LG} alt="logo portfolio" />
        </div>
        <h5 data-aos="fade-left">Welcome To</h5>
        <h1 data-aos="fade-right">NoLiMitz<MdVerified className='icon-verifies'data-aos="fade-up"/></h1> 
        <h1 data-aos="fade-down"className="text-light">Frontend Developer</h1>
        <CTA />
        <HeaderSocials />

        <div className='me'>
           <img src={ME} alt="me"data-aos="fade-left" />
        </div>
      </div>
    </header>
  )
}

export default Header