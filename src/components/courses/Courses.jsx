"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "./courses.modules.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Courses() {
  const slides = [
    {
      id: 1,
      title: "Korporativ",
      price: 999,
      list: [
        "Cheksiz miqdordagi xodimlar",
        "2 ta kitob (O‘quvchi kitobi va Uy vazifalari kitobi)",
        "Grammatika bo‘yicha mashqlar daftari",
        "Akademik qo‘llab-quvvatlash xizmati",
        "O‘qituvchi barcha jihozlar bilan sizning manzilingizga keladi",
      ],
    },
    {
      id: 2,
      title: "IELTS",
      price: 666,
      list: [
        "O‘qituvchi barcha zarur vositalar bilan siz belgilagan joyga tashrif buyuradi (13 ±1 nafar talabadan iborat guruh)",
        "Talabalar uchun maxsus ilova va 1 ta darslik (Students’ book)",
        "Grammatika bo‘yicha mashqlar daftari",
        "Akademik qo‘llab-quvvatlash xizmati",
        "Har bir dars uchun video-materiallar to‘plami",
        "Har hafta o‘tkaziladigan IELTS sinov imtihoni",
      ],
    },
    {
      id: 3,
      title: "Ingliz tilining asoslari",
      price: 555,
      list: [
        "13 (±1) nafar talabadan iborat guruh",
        "Talabalar uchun ilovamiz va 1 ta kitob (talabalar uchun darslik)",
        "Grammatika bo‘yicha mashq daftari",
        "Akademik qo‘llab-quvvatlash xizmati",
        "Har bir dars uchun video-materiallar to‘plami",
      ],
    },
    {
      id: 4,
      title: "Ingliz tilining asoslari",
      price: 888,
      list: [
        "13 (±1) nafar talabadan iborat guruh",
        "Talabalar uchun ilova va 1 ta kitob (asosiy darslik)",
        "Grammatika bo‘yicha mashqlar daftari",
        "Akademik qo‘llab-quvvatlash xizmati",
        "Har bir dars uchun video-materiallar to‘plami",
        "So‘zlashuv klubi va mahorat darsi",
      ],
    },
  ];

  return (
    <div className="courses">
      <div className="courses__cont">
        <h2 className="courses__title">Tariflar va narxlar</h2>
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
                <button className="courses__button">O‘rganish {slide.title}</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <span className="courses__bg">
        <Image fill quality={100} unoptimized priority src={"/images/courses/courses-3d-bg.png"}/>
      </span>
    </div>
  );
}
