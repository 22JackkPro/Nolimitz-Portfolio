import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio1.png'
import IMG2 from '../../assets/Portfolio2.webp'
import IMG3 from '../../assets/Portfolio3.webp'
import IMG5 from '../../assets/Portfolio5.webp'
import IMG4 from '../../assets/Portfolio4.webp'
import IMG6 from '../../assets/Portfolio6.webp'
// import Aos from 'aos'
// import { useEffect } from 'react'
// import 'aos/dist/aos.css'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Convert Decimal to Binary App',
    github: 'https://github.com/22JackkPro',
    demo: 'https://lively-empanada-c164da.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: '...!',
    github: 'https://github.com/22JackkPro',
    demo: 'https://dribbble.com/Jackk22'
  },
  {
    id: 3,
    image: IMG3,
    title: '...!',
    github: 'https://github.com/22JackkPro',
    demo: 'https://dribbble.com/Jackk22'
  },
  {
    id: 5,
    image: IMG5,
    title: '...!',
    github: 'https://github.com/22JackkPro',
    demo: 'https://dribbble.com/Jackk22'
  },
  {
    id: 4,
    image: IMG4,
    title: '...!',
    github: 'https://github.com/22JackkPro',
    demo: 'https://dribbble.com/Jackk22'
  },
  {
    id: 6,
    image: IMG6,
    title: '...!',
    github: 'https://github.com/22JackkPro',
    demo: 'https://dribbble.com/Jackk22'
  },
]

const Portfolio = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <section id='portfolio'>
      <h5 data-aos="fade-right">My Recent Works</h5>
      <h2 data-aos="fade-left">Projects</h2>

      <div className="container portfolio__container">
      {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item' data-aos="fade-left">
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div data-aos="fade-right"className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio