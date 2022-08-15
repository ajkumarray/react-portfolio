import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_awue2fq",
        "template_ny6wyzm",
        form.current,
        "loaHdYSyx6bluQPkH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>ajkumarrayoff@gmail.com</h5>
            <a
              href="mailto:ajkumarrayoff@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>+91 72729 36843</h5>
            <a href="https://wa.me/7272936843" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__icon" />
            <h4>Telegram</h4>
            <h5>ajkumarray</h5>
            <a href="https://t.me/ajkumarray" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn__submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
