"use client";

import React, { useState } from "react";
import "./faq.modules.scss";

const faqData = [
  {
    question: "At what times are individual lessons held, and at what times are group lessons held?",
    answer:
      "Individual lessons are usually held at 07:30, 09:00, 10:30, and 12:00. Group lessons take place at 09:00, 10:30, 12:00, 14:00, 15:30, 17:00, and 18:30. Only for online classes do we also have open groups at 20:00.",
  },
  {
    question: "Which branch has the best teachers?",
    answer:
      "In all branches, our teachers are trained according to the same training system and are supervised by the Head Teacher. Therefore, the quality of lessons is the same high level in every branch.",
  },
  {
    question: "Are there any age restrictions?",
    answer:
      "In all our branches, the age range for group classes is from 13 to 30, as the program is specially adapted for young people. Therefore, the quality of lessons is equally high in all branches. In individual classes, we teach English to learners of any age who wish to study the language.",
  },
  {
    question: "What do I need to do to start studying at the level I want?",
    answer:
      "Come to our center, where the administrators will provide you with all the necessary information. To start studying at your desired level, you must successfully pass an oral interview and a placement test.",
  },
  {
    question: "If I start studying at INTER NATION SCHOOL, do I need to buy textbooks and notebooks myself?",
    answer:
      "At INTER NATION SCHOOL, every new student or student advancing to the next level receives a textbook and a notebook for free (the notebook is provided only once).",
  },
  {
    question: "What is the reason for the high tuition fee?",
    answer:
      "Our tuition fees fully correspond to the quality of education we provide, as we are the only center that offers training based on the Oxford University Press program, IELTS-X, the Student App platform, systematic instruction by three teachers, and access to video lessons.",
  },
  {
    question: "What time do the latest classes end?",
    answer:
      "The evening classes start at 18:30 because of the teachers' work schedules and transportation issues. Only for online classes, we have open groups available at 20:00.",
  },
  {
    question: "Are online classes recorded videos or live lessons?",
    answer:
      "Online classes are conducted live. You communicate directly with the teacher - these are not pre-recorded videos. More details",
  },
];

const Faq = () => {
  const [active, setActive] = useState(1);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="faq__box">
        <h1 className="faq__h1">Faq</h1>

        {faqData.map((item, index) => (
          <div
            className={`faq__item ${
              active === index ? "faq__item--active" : ""
            }`}
            key={index}
          >
            <button
              className="faq__question"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>

              <span className="faq__icon">
                {active === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`faq__answer ${
                active === index ? "faq__answer--show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;