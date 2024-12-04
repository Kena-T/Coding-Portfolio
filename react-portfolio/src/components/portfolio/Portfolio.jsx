import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="contaniner portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Kena-T/Website" className='btn'>Github</a>
          {/* <a href="https://github.com/Kena-T/Website" className='btn btn-primary'>Live Demo</a> */}
        </article>
      </div>
    </section>
  )
}

export default Portfolio