import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Website',
    github: 'https://github.com/Kena-T/Website',
    // demo: 'https://github.com/Kena-T/Website'
  },
  {
    id: 2,
    image: IMG2,
    title: 'N/A',
    github: 'https://github.com/Kena-T',
    // demo: 'https://github.com/Kena-T'
  },
  {
    id: 3,
    image: IMG3,
    title: 'N/A',
    github: 'https://github.com/Kena-T',
    // demo: 'https://github.com/Kena-T'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="contaniner portfolio_container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {/* <a href="https://github.com/Kena-T/Website" className='btn btn-primary' target='_blank'>Live Demo</a> */}
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