"use client";

import React, { useState, useEffect } from "react";
import "./header.modules.scss";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    img: "/images/language/english.webp",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLanguage = (name, img) => {
    setSelectedLanguage({ name, img });
    setOpen(false);
  };

  return (
    <div className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <Image
        className="header__logo-img"
        width={50}
        height={50}
        src="/logos/logo.svg"
        alt="Logo"
      />

      <ul className="header__ul">
        <li className="header__li"><a className="header__link" href="#">About</a></li>
        <li className="header__li"><a className="header__link" href="#">Courses</a></li>
        <li className="header__li"><a className="header__link" href="#">Teachers</a></li>
        <li className="header__li"><a className="header__link" href="#">Results</a></li>
        <li className="header__li"><a className="header__link" href="#">Testimonials</a></li>
        <li className="header__li"><a className="header__link" href="#">FAQ</a></li>
      </ul>

      <div className="header__lang-wrapper">
        <li className="header__li">
          <a className="header__link" href="tel:+998787777707">
            +998 (78) 777-77-07
          </a>
        </li>

        <div className="header__language-dropdown">
          <button
            className="header__language-button-global"
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