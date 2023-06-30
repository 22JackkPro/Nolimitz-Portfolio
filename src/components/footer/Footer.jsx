import React from 'react'
import './footer.css'
import LGF from '../../assets/logo portfollio.png'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { DiCodeigniter } from 'react-icons/di'
// import Aos from 'aos'
// import { useEffect } from 'react'
// import 'aos/dist/aos.css'

const Footer = () => {
  // useEffect(() => {
  //   Aos.init({ duration:2000});
  // }, []);
  return (
    <footer>
      <div className='logo-footer' data-aos="fade-down">
        <img src={LGF} alt="logo footer" />
      </div>
      <a data-aos="fade-left" href="#" className='footer__logo'>NoLiMitz</a>

      <ul className='permalinks'>
        <DiCodeigniter data-aos="fade-right" className='icon-style' />
        <li data-aos="fade-down"><a href="#">Home</a></li>
        <li data-aos="fade-up"><a href="#about">About</a></li>
        <li data-aos="fade-down"><a href="#experience">Experience</a></li>
        <li data-aos="fade-up"><a href="#service">Service</a></li>
        <li data-aos="fade-down"><a href="#portfolio">Portfolio</a></li>
        <li data-aos="fade-up"><a href="#contact">Contact</a></li>
        <DiCodeigniter data-aos="fade-left" className='icon-style' />
      </ul>

      <div className='footer__socials'>
        <a data-aos="fade-right" href="https://www.facebook.com/ro.twentytwo/"><BsFacebook /></a>
        <a data-aos="fade-up" href="https://twitter.com/Jackk227"><AiFillTwitterCircle /></a>
        <a data-aos="fade-left" href="https://www.instagram.com/22cgaa/"><FaInstagramSquare /></a>
      </div>

      <div className="footer__copyright" data-aos="fade-up">
        <small>&copy;NoLimitz Portfolio. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer