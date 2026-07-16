import React from 'react';
import './testimonials.modules.scss';

const testimonialsData = [
  {
    id: 1,
    name: "Lobar Ahrorova",
    initials: "LA",
    stars: 5,
    text: "The lessons at Mega School are incredibly interactive! My daughter scored a 7.5 on her IELTS! A huge thank you to all the teachers!."
  },
  {
    id: 2,
    name: "Asadbek Olimov",
    initials: "AO",
    stars: 5,
    text: "The absolute best language center! The atmosphere at Mega School is amazing, helping you learn the language naturally and quickly. Highly recommended!"
  },
  {
    id: 3,
    name: "Zilola Rustamova",
    initials: "ZR",
    stars: 5,
    text: "I started from absolute scratch at Mega School, and now I can speak confidently! The courses are engaging, practical, and very well-structured."
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__box">
        <h2 className="testimonials__h2">testimonials</h2>
        <p className="testimonials__p">Real reviews from parents and students about the Mega School educational center.</p>

        <div className="testimonials__grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonials__card">
              
              <div className="testimonials__stars">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <span key={i} className="testimonials__star">★</span>
                ))}
              </div>

              <p className="testimonials__text">"{item.text}"</p>

              <div className="testimonials__user">
                <div className="testimonials__avatar-placeholder">
                  {item.initials}
                </div>
                <div className="testimonials__info">
                  <h4 className="testimonials__name">{item.name}</h4>
                  <span className="testimonials__role">{item.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;