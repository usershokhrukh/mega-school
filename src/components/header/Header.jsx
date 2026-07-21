"use client";

import React, { useState, useEffect } from "react";
import "./header.modules.scss";
import Image from "next/image";

const Header = ({isScrolled}) => {
  console.log(isScrolled);
  
  const [open, setOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "Uzbek",
    img: "/images/language/uzbek.png",
  });


  const changeLanguage = (name, img) => {
    setSelectedLanguage({ name, img });
    setOpen(false);
  };

  return (
    <div className={`header ${isScrolled ? "light-header" : ""}`}>
      <Image
        className="header__logo-img"
        width={50}
        height={50}
        src="/logos/logo.svg"
        alt="Logo"
      />

      <ul className="header__ul">
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#about">Haqida</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#courses">Kurslar</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#teachers">O‘qituvchilar</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#results">Natijalar</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#testimonials">Fikr-mulohazalar</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#faq">FAQ</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#order">Buyurtma</a></li>
      </ul>

      <div className="header__lang-wrapper">
        <li className="header__li">
          <a className={`header__link ${isScrolled ? "light-link" : ""}`} href="tel:+998787777707">
            +998 (78) 777-77-07
          </a>
        </li>

        <div className="header__language-dropdown">
          <button
            className={`header__language-button-global ${isScrolled ? "light-box" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <Image
              src={selectedLanguage.img}
              alt={selectedLanguage.name}
              width={25}
              height={25}
              className="header__language-image"
              unoptimized
            />
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default Header;