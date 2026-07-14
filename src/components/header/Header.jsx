import Image from 'next/image'
import React from 'react'
import './header.modules.scss'

const Header = () => {
  return (
    <div className="header">

      <div className="header__logo">
        <img
          className="header__logo-img" 
          src="/logos/logo.svg" 
          alt="Logo" 
          width={50} 
          height={20} 
        />
      </div>

      <ul className="header__ul">
        <li className="header__li">
          <a className="header__link" href="#">About</a>
        </li>
        <li className="header__li">
          <a className="header__link" href="#">Courses</a>
        </li>
        <li className="header__li">
          <a className="header__link" href="#">Teachers</a>
        </li>
        <li className="header__li">
          <a className="header__link" href="#">Results</a>
        </li>
        <li className="header__li">
          <a className="header__link" href="#">Testimonials</a>
        </li>
        <li className="header__li">
          <a className="header__link" href="#">FAQ</a>
        </li>
       
      </ul>

      <div className="header__lang-wrapper">
        <li className="header__li">
          <a className="header__link" href="tel:+998787777707">+998 (78) 777-77-07</a>
        </li>
        <select id="languages" name="languages" className="header__lang-select">
          <option value="r">Русский</option>
          <option value="a">English</option>
          <option value="u">O'zbekcha</option> 
        </select>
      </div> 

    </div>
  )
}

export default Header