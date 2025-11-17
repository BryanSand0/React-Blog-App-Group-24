import React, { useState } from 'react'
import './ContactPage.css'

function ContactPage() {

  //Class that will give us a nice look
  const formClass = 'border border-gray-300 rounded p-2'

  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formInput);
  };
  return (
    <div className='contact-container'> 
      <h2>Contact us!</h2>
      <form className='contact-form' onSubmit={submitForm}>
        <input 
          placeholder='Name' 
          className={formClass} 
          value={formInput.name} 
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
          required
        />
        <input 
          placeholder='Email' 
          className={formClass}
          value={formInput.email} 
          onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
          required
        />
        <textarea 
          placeholder='Message' 
          className={formClass} 
          value={formInput.message} 
          onChange={(e) => setFormInput({ ...formInput, message: e.target.value })}
          required
        >
        </textarea>

        <input id="send_message" type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default ContactPage;