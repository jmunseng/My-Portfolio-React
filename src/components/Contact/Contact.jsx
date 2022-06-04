import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { CgCheckO } from "react-icons/cg";

const Contact = () => {
  const form = useRef();

  const [emailSuccess, setEmailSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qg0hunf",
        "template_241i1ll",
        form.current,
        "KRNa8QPWKfVS6v-Pl"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            console.log("first");
            setEmailSuccess(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jmunseng@gmail.com</h5>
            <a
              href="mailto:jmunseng@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Sent a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Munseong Jeong</h5>
            <a
              href="https://m.me/100004964462359"
              target="_blank"
              rel="noreferrer"
            >
              Sent a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+61452462858</h5>
            <a
              href="https://api.whatsapp.com/send?phone=61452462858"
              rel="noreferrer"
              target="_blank"
            >
              Sent a message
            </a>
          </article>
        </div>
        {/* {END OF CONTACT OPTION} */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
            {emailSuccess && (
              <CgCheckO
                className={`contact-checkbutton ${emailSuccess ? "bump" : ""}`}
              />
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
