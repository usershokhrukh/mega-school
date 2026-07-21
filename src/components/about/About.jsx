"use client";

import React, {useContext, useEffect, useRef, useState} from "react";
import "./about.modules.scss";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {ErrorContext} from "../context/ErrorContext";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const setError = useContext(ErrorContext);

  useGSAP(
    () => {
      gsap.from(".about-text-block", {
        x: 150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-block",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    {scope: containerRef},
  );

  const containerRefFull = useRef(null);
  const [isFull, setIsFull] = useState(null);
  // const handleToggleFullScreen = () => {
  //   if (typeof window === "undefined") return;
  //   if (!document.fullscreenElement) {
  //     containerRefFull.current.requestFullscreen().catch((err) => {
  //       console.error(`Error attempting to enable fullscreen: ${err.message}`);
  //       setError(`Error attempting to enable fullscreen: ${err.message}`);
  //     });
  //     setIsFull(true);
  //   } else {
  //     document.exitFullscreen();
  //     setIsFull(false);
  //   }
  // };
  const handleToggleFullScreen = () => {
    const body = document.querySelector("body");
    var video = document.querySelector(".about__video-play-full");
    if (!isFull) {
      video.pause();
      video.currentTime = 0;
      video.play();
      body.classList.add("no-scroll");
    } else if(isFull != null) {
      video.pause();
      body.classList.remove("no-scroll");
    }

    setIsFull(!isFull);
  };

  return (
    <div id="about" ref={containerRef} className="about">
      <div
        style={{display: `${isFull ? "flex" : "none"}`}}
        className="about__full"
        ref={containerRefFull}
      >
        <video
          src="/videos/mega-school-video.mp4"
          className="about__video-play-full"
          controls
          controlslist="nofullscreen nodownload"
          preload={"auto"}
        ></video>
        <span onClick={handleToggleFullScreen} className="about__close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18 7H22V9H16V3H18V7ZM8 9H2V7H6V3H8V9ZM18 17V21H16V15H22V17H18ZM8 15V21H6V17H2V15H8Z"></path>
          </svg>
        </span>
      </div>

      <div className="about__cont">
        <h2 className="about__title">BIZ HAQIMIZDA</h2>
        <div className="about__bottom">
          <div className="about__video">
            <span className="about__vplay-cont" onClick={handleToggleFullScreen}>
              <svg className="about__vplay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>
            </span>
            <video
              src="/videos/mega-school-video.mp4"
              className="about__video-play"
              width={830}
              height={442}
            ></video>
          </div>
          <div className="about__b-right">
            <p className="about__b-main-txt about-text-block">
              "MEGA SCHOOL" o‘quv markazi 2013-yil 22-iyulda tashkil etilgan. Hozirgi kunda Toshkent shahrining eng qulay hududlarida ushbu o‘quv markazining ilg‘or texnologiyalar bilan jihozlangan va sifatli ta’lim olish uchun barcha sharoitlarga ega 6 ta yirik filiali faoliyat yuritmoqda. Mashg‘ulotlar dunyodagi eng yaxshi ta’lim muassasalaridan biri — Oksford universiteti (Oxford University Press) tomonidan ishlab chiqilgan maxsus dastur asosida olib boriladi! Bizning o‘quv markazimiz O‘zbekistonda ushbu dasturni litsenziyali asosda qo‘llagan birinchi markaz hisoblanadi.

            </p>
          </div>
        </div>
        <div className="about__card" id="courses">
          <div className="about__c-item">
            <p className="about__cit-txt">
              Filiallar <span className="about__cit-txt-span">6</span>
            </p>
            <span className="about__g-span">
              <svg xmlns="http://w3.org" viewBox="0 0 480 480">
                <path
                  d="M360 289.7c43.4 0 86.9-16.6 120-49.7a169.2 169.2 0 0 0-120-49.7 169.2 169.2 0 0 0 49.7-120c-46.9 0-89.3 19-120 49.7 0-43.4-16.6-86.9-49.7-120a169.2 169.2 0 0 0-49.7 120 169.2 169.2 0 0 0-120-49.7c0 46.8 19 89.3 49.7 120-43.4 0-86.9 16.6-120 49.7a169.2 169.2 0 0 0 120 49.7 169.2 169.2 0 0 0-49.7 120c46.8 0 89.3-19 120-49.7 0 43.4 16.6 86.9 49.7 120a169.2 169.2 0 0 0 49.7-120 169.2 169.2 0 0 0 120 49.7c0-46.9-19-89.3-49.7-120Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
          <div className="about__c-item">
            <p className="about__cit-txt">
              O'quvchilar <span className="about__cit-txt-span">7800+</span>
            </p>
            <span className="about__g-span">
              <svg xmlns="http://w3.org" viewBox="0 0 480 480">
                <path
                  d="M447.6 180.2v-.2A127.3 127.3 0 0 0 300 32S240 0 240 0l-60 32.1h-.2A127.3 127.3 0 0 0 32 179.8v.2L0 240l32.1 60v.2A127.3 127.3 0 0 0 179.8 448h.2l60 32.1 60-32.1h.3a127.3 127.3 0 0 0 147.6-147.7v-.2l32.1-59-32.4-60.8Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
          <div className="about__c-item">
            <p className="about__cit-txt">
              Ishchilar <span className="about__cit-txt-span">6+</span>
            </p>
            <span className="about__g-span">
              <svg xmlns="http://w3.org" viewBox="0 0 480 480">
                <g fill="currentColor">
                  <circle cx="120" cy="120" r="120"></circle>
                  <circle cx="120" cy="360" r="120"></circle>
                  <circle cx="360" cy="120" r="120"></circle>
                  <circle cx="360" cy="360" r="120"></circle>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
