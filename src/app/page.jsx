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
import React, {useEffect, useRef, useState} from "react";

const HomePage = () => {
  const introRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const introElement = introRef.current;

    if(!introElement) return;
     const options = { rootMargin: "-10% 0px 0px 0px" };
     const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsScrolled(!entry.isIntersecting);
      });
    }, options);

    observer.observe(introElement);

    return () => {
      if (introElement) observer.unobserve(introElement);
    };

  }, [])
  return (
    <div className="main-page">
      <Header isScrolled={isScrolled}/>
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
    </div>
  );
};

export default HomePage;
