import '../styles/Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
 
  return (

    <div className="inner-contact-con">
      <div>
        <h1 className="page-title text-center">Contact me</h1>
      </div>
     
        <form ref={form} onSubmit={sendEmail} className="container form-container" action="">
          <div className="row d-flex justify-content-center input-container ">
            <label className="" htmlFor="">Name<span class="required">*</span></label>
            <input className="col col-9 " type="text" name="user_name" required />
          </div>
          <div className="row  d-flex justify-content-center input-container">
          <label htmlFor="">Email<span class="required">*</span></label>
            <input className="col col-9" type="email" name="user_email" required />
          </div>
          <div className="row  d-flex justify-content-center input-container">
            <label htmlFor="">Message<span class="required">*</span></label>
            <textarea id="w3review" name="Message" rows="4" cols="50" placeholder='' className="col col-9 non-resizable" required >
            </textarea>
          </div>
          <div className="d-flex justify-contant-center"> 
            <button className="btn btn-xl btn-primary" type="submit" value="send">Send</button>
          </div>
        </form>
      
      
      
    </div>
  );
}

export default Contact;