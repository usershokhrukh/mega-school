import React from 'react';
import './testimonials.modules.scss';

const testimonialsData = [
  {
    id: 1,
    name: "Lobar Ahrorova",
    initials: "LA",
    stars: 5,
    text: "Mega School dagi darslar juda interaktiv! Qizim IELTS imtihonida 7,5 ball oldi! Barcha o‘qituvchilarga katta rahmat!"
  },
  {
    id: 2,
    name: "Asadbek Olimov",
    initials: "AO",
    stars: 5,
    text: "Eng zo‘r til markazi! Mega School’dagi muhit ajoyib bo‘lib, tilni tabiiy va tez o‘rganishingizga yordam beradi. Barchaga tavsiya qilaman!"
  },
  {
    id: 3,
    name: "Zilola Rustamova",
    initials: "ZR",
    stars: 5,
    text: "Mega School’da mutlaqo noldan boshlaganman va hozirda o‘zimga ishonch bilan gapira olaman! Kurslar qiziqarli, amaliy va juda puxta tuzilgan."
  }
];

const Testimonials = () => {
  return (
    <div id='testimonials' className="testimonials">
      <div className="testimonials__box">
        <h2 className="testimonials__h2">Fikr-mulohazalar</h2>
        <p className="testimonials__p">"Mega School" o‘quv markazi haqida ota-onalar va o‘quvchilarning haqiqiy fikr-mulohazalari.</p>

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