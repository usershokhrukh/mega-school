"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "./courses.modules.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Courses() {
  const slides = [
    {
      id: 1,
      title: "Corporate",
      price: 999,
      list: [
        "Unlimited number of employees",
        "2 books (Students' book and Home book)",
        "Grammar workbook",
        "Academic Support service",
        "Teacher comes to your location with all devices",
      ],
    },
    {
      id: 2,
      title: "IELTS",
      price: 666,
      list: [
        "Group of 13 (±1) students",
        "Our Students’ App and 1 book (Students’ book)",
        "Grammar workbook",
        "Academic Support service",
        "Video Arsenal for each lesson",
        "Mock IELTS every week",
      ],
    },
    {
      id: 3,
      title: "English Basics",
      price: 555,
      list: [
        "Group of 13 (±1) students",
        "Our Students’ App and 1 book (Students’ book)",
        "Grammar workbook",
        "Academic Support service",
        "Video Arsenal for each lesson",
      ],
    },
    {
      id: 4,
      title: "English Basics",
      price: 888,
      list: [
        "Group of 13 (±1) students",
        "Our Students’ App and 1 book (Students’ book)",
        "Grammar workbook",
        "Academic Support service",
        "Video Arsenal for each lesson",
        "Speaking Club and Masterclass",
      ],
    },
  ];

  return (
    <div className="courses">
      <div className="courses__cont">
        <h2 className="courses__title">Tariffs and Prices</h2>
        <Swiper
          className="courses__swiper"
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={500}
          observer={true}
          observeParents={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="courses__slide">
              <div className="courses__card">
                <div
                  style={
                    slide.id % 2
                      ? {
                          background:
                            "linear-gradient(135deg,#1a355a  0%,    #2b4c7e 25%,  #4a3f75 55%,   #1e3c63 80%,   #0f1f38 100%",
                        }
                      : {
                          background:
                            "linear-gradient(135deg, #ffb3a7 0%,   #f99313 40%,   #d96206 75%,  #8c3200 100%   ",
                        }
                  }
                  className="courses__c-top"
                >
                  <p className="courses__ct-title">{slide.title}</p>
                  <span className="courses__ctit-wrap">
                    <h2 className="courses__ct-price">{slide.price} 000 UZS</h2>
                  </span>
                </div>
                <ul className="courses__ul-list">
                  {slide.list?.map((item) => (
                    <li className="courses__list">
                      <span className="courses__l-svg">
                        <svg
                          className="courses__l-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M13 10H20L11 23V14H4L13 1V10Z"></path>
                        </svg>
                      </span>
                      <p className="courses__list-txt">{item}</p>
                    </li>
                  ))}
                </ul>
                <button className="courses__button">Study {slide.title}</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
