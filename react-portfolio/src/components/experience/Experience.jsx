import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4></h4>
              <small>Experienced</small>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4></h4>
              <small>Experienced</small>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience