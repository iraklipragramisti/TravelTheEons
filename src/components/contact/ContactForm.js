import React from 'react'
import "./ContactForm.css"
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm()

  const myOnSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(myOnSubmit)}>
        <input className="name" type="text" name="name" placeholder="Your name" style={{ borderRadius: '5px' }} ref={register} />
        <br />
        <input className="mail" type="mail" name="mail" placeholder="Your mail" style={{ borderRadius: '5px' }} ref={register({ required: true, minLength: 8 })} />
        <br />
        <textarea name="" id="" cols="30" rows="1"
          className="message-text" type="text" placeholder="Your message" style={{ borderRadius: '5px' }}>

        </textarea>
        {errors.mail && <p>Password invalid</p>}
        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  )
}

export default ContactForm
