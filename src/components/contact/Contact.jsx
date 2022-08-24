import React from 'react'
import './contact.scss'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
<div className="container header_container">
         <div className='title'>
        
    <h2>Contact</h2>
</div>
<div className='contact_content'>
<div className='contact_options'>
<article className='contact_option'>
  <AiOutlineMail className='contact_icon'/>
  <h4>Email</h4>
  <h5>sebastian.mazur.p@gmail.com</h5>
  <a href="mailto: sebastian.mazur.p@gmail.com" target="_blank">Send a message</a>
</article>
<article className='contact_option'>
  <BsInstagram className='contact_icon'/>
  <h4>WhatsApp</h4>
  <h5>+48693551488</h5>
  <a href="https://api.whatsapp.com/send?phone=+48693551488" target="_blank">Send a message</a>
</article>
<article className='contact_option'>
  <RiMessengerLine className='contact_icon'/>
  <h4>Messenger</h4>
  <h5>Sebastian Mazur</h5>
  <a href="https://m.me/sebastian.mazur.98871" target="_blank">Send a message</a>
</article>
</div>
<form className='form_option' action="">
<input type="text" name='name' placeholder='Your Full Name' required/>
<input type="text" name='email' placeholder='Your Email' required/>
<textarea name="message"  rows="5" placeholder='Your Message' required></textarea>

<button type='submit' className='btn ' >Send Message</button>
</form>



 </div>

</div>
    </section>
  )
}

export default Contact


