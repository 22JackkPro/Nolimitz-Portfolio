import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const headerSocials = () => {
    return (
        <div className='header__socials'>
            <a data-Aos="fade-right" href="https://www.facebook.com/ro.twentytwo" target="_blank"><BsFacebook /></a>
            <a data-Aos="fade-down" href="https://github.com/22JackkPro" target="_blank"><BsGithub /></a>
            <a data-Aos="fade-left" href="https://t.me/RoNoLimit" target="_blank"><BsTelegram /></a>
        </div>
    )
}

export default headerSocials