import React from 'react'
import SmoothFadeAutoSlider from '../swiper/MainSlider'
import "./hero.modules.scss"

const Hero = ({introRef}) => {
  return (
    <div ref={introRef} className='hero'>
      <SmoothFadeAutoSlider/>
      <div className='hero__box'>
        <h1 className='hero__title'>
         Kelajagingizni biz bilan quring
        </h1>
        <p className='hero__subtitle'>
          MEGA SCHOOL ingliz tilini o‘qitish markazi O‘zbekistondagi eng yaxshi markazlardan biridir. MEGA SCHOOL 2013-yildan beri faoliyat yuritib kelmoqda. Hozirgi vaqtda Toshkent shahrida uning 10 ta filiali mavjud.
        </p>
        <span className='hero__subtext'>
          talabalar 7800+
        </span>
        <button className='hero__submit'>So‘rov yuborish
</button>
      </div>
    </div>
  )
}

export default Hero