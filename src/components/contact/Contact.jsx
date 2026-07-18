"use client";

import React, {useContext, useEffect, useState} from "react";
import "./contact.modules.scss";
import PhoneInput from "react-phone-input-2";
import {isValidPhoneNumber} from "libphonenumber-js";
import {sendContactForm} from "@/app/botAction";
import Image from "next/image";
import { ErrorContext } from "../context/ErrorContext";
import { InfoContext } from "../context/InfoContext";

const Contact = () => {
  const [cleanPhone, setCleanPhone] = useState("+");

  const setError = useContext(ErrorContext)  
  const setInfo = useContext(InfoContext)

  const handleChange = (formattedValue) => {
    const pureNumbers = formattedValue.replace(/[\s()+-]/g, "");
    setCleanPhone(`+${pureNumbers}`);
  };
  const handleSubmit = (e) => {
    const name = e.get("name");
    const phone = e.get("phone");
    if (name && phone) {
      if (isValidPhoneNumber(phone)) {
        try {
          sendContactForm(e);
          setCleanPhone("+998");
          setInfo({text:"The administration will be in touch soon!"});
        } catch (err) {
          setError({text:"Something went wrong!"});
        }
      } else {
        setError({text:"Phone number is incorrect!"});
      }
    } else {
      setError({text:"Fill all inputs!"});
    }
  };
  return (
    <div className="contact">
      <div className="contact__container">
        <h2 className="contact__title">
          Savollaringiz qoldimi?<span>Biz bilan bog'laning!</span>
        </h2>
        <form className="contact__form" action={handleSubmit}>
          <input
            placeholder="ismingiz"
            name="name"
            className="contact__input"
            type="text"
          />
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
          <input
            className="contact__input"
            type="hidden"
            name="phone"
            value={cleanPhone}
          />
          <button className="contact__submit" type="submit">
            Ariza qoldirish
          </button>
        </form>
        <Image
          className="contact__img"
          width={200}
          height={200}
          priority
          unoptimized
          quality={100}
          src={"images/faq/FAQ-img.png"}
        />
      </div>
    </div>
  );
};

export default Contact;
