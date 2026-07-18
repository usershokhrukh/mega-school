"use client";

import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Cookie from "@/components/cookie/Cookie";
import Courses from "@/components/courses/Courses";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Order from "@/components/order/Order";
import Results from "@/components/results/Results";
import Teachers from "@/components/teachers/Teachers";
import Testimonials from "@/components/testimonials/Testimonials";
import "./page.modules.scss";
import React, {useContext, useEffect, useRef, useState} from "react";
import {ErrorContext} from "@/components/context/ErrorContext";
import {InfoContext} from "@/components/context/InfoContext";

const HomePage = () => {
  const introRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const introElement = introRef.current;

    if (!introElement) return;
    const options = {rootMargin: "-10% 0px 0px 0px"};
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsScrolled(!entry.isIntersecting);
      });
    }, options);

    observer.observe(introElement);

    return () => {
      if (introElement) observer.unobserve(introElement);
    };
  }, []);

  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [errorClose, setErrorClose] = useState(false);
  const [infoClose, setInfoClose] = useState(false);

  useEffect(() => {
    if (error.trim().length) {
      setErrorClose(true);
      setTimeout(() => {
        setErrorClose(null);
      }, 5000);
    } else if (errorClose != false) {
      setErrorClose(null);
    }
  }, [error]);
  useEffect(() => {
    if (info.trim().length) {
      setInfoClose(true);
      setTimeout(() => {
        setInfoClose(null);
      }, 5000);
    } else if (errorClose != false) {
      setInfoClose(null);
    }
  }, [info]);
  return (
    <div className="main-page">
      <ErrorContext.Provider value={setError}>
        <InfoContext.Provider value={setInfo}>
          <span
            className={`error__span-wrap ${errorClose ? "animate-notify" : errorClose == false ? "error__none" : "animate-notify-close"}`}
          >
            <span className="error__span">
              <svg
                className="error__span-error"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path>
              </svg>
              <span className="error__span-text">{error}</span>
            </span>
          </span>

          <span
            className={`error__span-wrap ${infoClose ? "animate-notify" : infoClose == false ? "error__none" : "animate-notify-close"}`}
          >
            <span className="error__span">
              <svg
                className="error__span-info"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path>
              </svg>
              <span className="error__span-text">{info}</span>
            </span>
          </span>

          <Header isScrolled={isScrolled} />
          <Hero introRef={introRef} />
          <About />
          <Courses />
          <Teachers />
          <Results />
          <Testimonials />
          <Faq />
          <Order />
          <Contact />
          <Footer />
          <Cookie />
        </InfoContext.Provider>
      </ErrorContext.Provider>
    </div>
  );
};

export default HomePage;
