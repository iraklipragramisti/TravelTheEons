import React from 'react'
import "./Contact.css"
import ContactForm from "./ContactForm"
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"


const Contact = () => {
  return (
    <div>
      <h1 className="contact">Contact</h1>
      <ul className="home-ul">
        < li>
          <AiOutlineHome size='50px' />
        </li>
        <li>
          <h3>Dummy address: Bneltevri, Akhmeta</h3>
        </li>
      </ul>
      <ul className="phone-ul">
        <li>
          <AiOutlinePhone size='50px' />
        </li>
        <li>
          <h3>Dummy number: 599 39 39 39</h3>
        </li>
      </ul>
      <ul className="mail-ul">
        <li>
          <AiOutlineMail size='45px' />
        </li>
        <li>
          <h3>Dummy mail: Zurabura@gmail.com</h3>
        </li>
      </ul>
      <ContactForm></ContactForm>
      
    </div>
  )
}

export default Contact
