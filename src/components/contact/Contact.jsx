"use client";

import React, {useEffect, useState} from "react";
import "./contact.modules.scss";
import PhoneInput from "react-phone-input-2";
import {isValidPhoneNumber} from "libphonenumber-js";
import {sendContactForm} from "@/app/botAction";

const Contact = () => {
  const [cleanPhone, setCleanPhone] = useState("+");

  const handleChange = (
    formattedValue,
  ) => {
    const pureNumbers = formattedValue.replace(/[\s()+-]/g, "");
    setCleanPhone(`+${pureNumbers}`);
  };
  const handleSubmit = (e) => {
    const name = e.get("name");
    const phone = e.get('phone');    
    if(name && phone) {
      if(isValidPhoneNumber(phone)){
        sendContactForm(e)
      }
    }
  }  

  return (
    <div className="contact">
      <div className="contact__container">
        <h2 className="contact__title">
          Savollaringiz qoldimi?<span>Biz bilan bog'laning!</span>
        </h2>
        <form className="contact__form" action={handleSubmit}>
          <input placeholder="ismingiz" name="name" className="contact__input" type="text" />
          <PhoneInput
            country={"uz"}
            onlyCountries={["uz"]}
            countryCodeEditable={false}
            value={cleanPhone}
            onChange={handleChange}
            inputProps={{
              maxLength: 17,
            }}
            specialLabel={false}
            inputClass="contact__input"

          />
          <input className="contact__input" type="hidden" name="phone" value={cleanPhone} />
          <button className="contact__submit" type="submit">Ariza qoldirish</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
