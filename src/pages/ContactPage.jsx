// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function ContactPage() {
  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find Me <i className="uil uil-corner-right-down"></i>
            </h2>
            <p>
              <FaEnvelope />
              yahyaayyas112@gmail.com
            </p>
            <p>
              <FaPhone /> +6285719353783
            </p>
          </div>
        </div>
        {/* <div className="col">
          <div className="form-control">
            <div className="form-inputs">
              <input type="text" className="input-field" placeholder="Name" />
              <input type="text" className="input-field" placeholder="Email" />
            </div>
            <div className="text-area">
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="form-button">
              <button className="btn">
                Send <i className="uil uil-message"></i>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default ContactPage;
