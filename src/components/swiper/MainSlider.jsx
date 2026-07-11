"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

export default function SmoothFadeAutoSlider() {
  const slides = [
    { id: 6, src: "/images/interior-3.webp"},
    { id: 1, src: "/images/3d-model.webp"},
    { id: 5, src: "/images/interior-2.webp"},
    { id: 3, src: "/images/arduino.webp"},
    { id: 4, src: "/images/interior-1.webp"},
    { id: 2, src: "/images/arduino-child.webp"},
    { id: 7, src: "/images/interior-4.webp"},
    { id: 9, src: "/images/programming.webp"},
    { id: 8, src: "/images/interior-5.webp"},
  ];

  return (
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        fadeEffect={{ crossFade: true }} 
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        allowTouchMove={false} 
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="hero__swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide className="hero__swiper-slider" key={slide.id}>
            <Image src={slide.src} width={100} height={100} className="hero__swiper-image"/>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
