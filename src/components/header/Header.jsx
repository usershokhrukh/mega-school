"use client";

import React, { useState, useEffect } from "react";
import "./header.modules.scss";
import Image from "next/image";

const Header = ({isScrolled}) => {
  console.log(isScrolled);
  
  const [open, setOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    img: "/images/language/english.webp",
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
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#about">About</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#courses">Courses</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#teachers">Teachers</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#results">Results</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#testimonials">Testimonials</a></li>
        <li className="header__li"><a className={`header__link ${isScrolled ? "light-link" : ""}`} href="#faq">FAQ</a></li>
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

          {open && (
            <div className="header__language-dropdown-box">
              <button
                className="header__language-button"
                onClick={() =>
                  changeLanguage("Russian", "/images/language/russia.png")
                }
              >
                <Image
                  src="/images/language/russia.png"
                  alt="Russian"
                  width={30}
                  height={30}
                />
                <span>Русский</span>
              </button>

              <button
                className="header__language-button"
                onClick={() =>
                  changeLanguage("English", "/images/language/english.webp")
                }
              >
                <Image
                  src="/images/language/english.webp"
                  alt="English"
                  width={30}
                  height={30}
                />
                <span>English</span>
              </button>

              <button
                className="header__language-button"
                onClick={() =>
                  changeLanguage("Uzbek", "/images/language/uzbek.png")
                }
              >
                <Image
                  src="/images/language/uzbek.png"
                  alt="Uzbek"
                  width={30}
                  height={30}
                />
                <span>O'zbek</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;