import React from 'react'
import './experience.css'
import { TbShieldCheckFilled } from 'react-icons/tb'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {TbBrandReact} from 'react-icons/tb'
import {IoLogoAngular} from 'react-icons/io'
import {SiPhp} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {FaFigma} from 'react-icons/fa'
import {SiBlender} from 'react-icons/si'
import {TbBrandLaravel} from 'react-icons/tb'
// import Aos from 'aos'
// import { useEffect } from 'react'
// import 'aos/dist/aos.css'

const Experience = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000});
  // }, []);
  return (
    <section id='experience'>
      <h5 data-aos="fade-down">My Skills</h5>
      <h2 data-aos="fade-left">My Experience</h2>

      <div className="container experience__container">
        <div className="experience__backend" data-aos="fade-right">
          <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiPhp className='experience__details-icon' />
              <div>
                <h4>Php</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon' />
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon' />
              <div>
                <h4>PostgreSql</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCsharp className='experience__details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Learing</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandLaravel className='experience__details-icon' />
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Learning</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend" data-aos="fade-up">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <ImHtmlFive className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandReact className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>
            {/* <article className='experience__details'>
              <IoLogoAngular className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>

        <div className="experience__design" data-aos="fade-left">
          <h3>Design Work Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiAdobephotoshop className='experience__details-icon' />
              <div>
                <h4>Adobe Photoshop</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAdobeillustrator className='experience__details-icon' />
              <div>
                <h4>Adobe illustrator</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaFigma className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Medium</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiBlender className='experience__details-icon' />
              <div>
                <h4>Blender</h4>
                <small className='text-light'>Learning</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience