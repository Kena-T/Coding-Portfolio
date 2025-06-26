import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>Tilah039@umn.edu</h5>
            <a href="mailto:tilah039@umn.edu">Send a message</a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>LinkedIn</h4>
            <h5>Tilah039@umn.edu</h5>
            <a href="mailto:tilah039@umn.edu">Send a message</a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>Tilah039@umn.edu</h5>
            <a href="mailto:tilah039@umn.edu">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact