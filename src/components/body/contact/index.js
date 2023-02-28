import React from "react";
import SocialContact from "../../common/social-contact";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <label className="section-title">Contacto</label>
      <div className="contact-container">
        <div className="contact-email">
          <a
            href="mailto:luisamoralesocp@gmail.com?subject=%C2%A1Estoy%20interesado(a)%20en%20contactarte!&body=Hola!"
            className="link-email"
          >
            Enviarme un email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
