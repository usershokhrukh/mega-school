import React from 'react'
import SmoothFadeAutoSlider from '../swiper/MainSlider'
import "./hero.modules.scss"

const Hero = ({introRef}) => {
  return (
    <div ref={introRef} className='hero'>
      <SmoothFadeAutoSlider/>
      <div className='hero__box'>
        <h1 className='hero__title'>
          Build your future with us
        </h1>
        <p className='hero__subtitle'>
          MEGA SCHOOL English language teaching center is one of the best centers in Uzbekistan. MEGA SCHOOL has been operating since 2013. Currently, there are 10 branches in Tashkent.
        </p>
        <span className='hero__subtext'>
          students 7800+
        </span>
        <button className='hero__submit'>Submit a request</button>
      </div>
    </div>
  )
}

export default Hero