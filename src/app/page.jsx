import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Cookie from '@/components/cookie/Cookie'
import Courses from '@/components/courses/Courses'
import Faq from '@/components/faq/Faq'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Order from '@/components/order/Order'
import Results from '@/components/results/Results'
import Teachers from '@/components/teachers/Teachers'
import Testimonials from '@/components/testimonials/Testimonials'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Courses/>
      <Teachers/>
      <Results/>
      <Testimonials/>
      <Faq/>
      <Order/>
      <Contact/>
      <Footer/>
      <Cookie/>
    </div>
  )
}

export default HomePage