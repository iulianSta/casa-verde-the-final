import React from "react";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import ContactSven from "./ContactSven";
import Map from "./Map";

const Contact = () => {
  return (
    <div>
      <div className="animated-envelope">
      <img src="./images/37147-contact-us.gif" alt="envelope animation" title="envelope"></img>
      </div>
      <ContactInformation />
      <div className="form-map">
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
