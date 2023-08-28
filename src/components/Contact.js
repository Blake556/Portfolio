import "../styles/Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [messageSent, setMessageSent] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formElement = form.current;
    emailjs
      .sendForm(
        "service_h49fmm3",
        "template_7tdlj1q",
        formElement,
        "CaO7EsXX0kFVSMR9b"
      )
      .then(
        (result) => {
          setMessageSent(true);
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          setMessageSent(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="inner-contact-con">
      <div>
        <h1 className="page-title text-center">Contact me</h1>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="container form-container"
        action=""
      >
        <div className="row d-flex justify-content-center input-container ">
          <label className="" htmlFor="">
            Name<span class="required">*</span>
          </label>
          <input className="col col-9 " type="text" name="user_name" required />
        </div>
        <div className="row  d-flex justify-content-center input-container">
          <label htmlFor="">
            Email<span class="required">*</span>
          </label>
          <input
            className="col col-9"
            type="email"
            name="user_email"
            required
          />
        </div>
        <div className="row  d-flex justify-content-center input-container">
          <label htmlFor="">
            Message<span class="required">*</span>
          </label>
          <textarea
            id="w3review"
            name="Message"
            rows="4"
            cols="50"
            placeholder=""
            className="col col-9 non-resizable"
            required
          >
            {/* At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies. */}
          </textarea>
        </div>
        <div className="d-flex justify-contant-center">
          {messageSent === true ? (
            <span className="sent-msg">Message sent, Thank you!</span>
          ) : messageSent === false ? (
            <span className="fail-msg">Message Failed to send. Please try again or click the icon at the bottom left of the screen to get in touch.</span>
          ) : (
            <button
              className="btn btn-xl btn-primary"
              type="submit"
              value="send"
            >
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Contact;
