"use client";

import React, {useState} from "react";
import "./faq.modules.scss";

const faqData = [
  {
    question:
      "Individual darslar va guruh mashg‘ulotlari qaysi vaqtlarda o‘tkaziladi?",
    answer:
      "Individual darslar odatda soat 07:30, 09:00, 10:30 va 12:00 da o‘tkaziladi. Guruh mashg‘ulotlari esa soat 09:00, 10:30, 12:00, 14:00, 15:30, 17:00 va 18:30 da bo‘lib o‘tadi. Faqat onlayn darslar uchun soat 20:00 da ham ochiq guruhlar mavjud.",
  },
  {
    question: "Qaysi filialda eng yaxshi o‘qituvchilar bor?",
    answer:
      "Barcha filiallarda o‘qituvchilarimiz bir xil o‘quv tizimi asosida tayyorlanadi va Bosh o‘qituvchi nazorati ostida faoliyat yuritadi. Shu sababli, darslar sifati har bir filialda birdek yuqori darajada bo‘ladi.",
  },
  {
    question: "Yosh bo‘yicha cheklovlar bormi?",
    answer:
      "Barcha filiallarimizda guruh mashg‘ulotlari uchun yosh chegarasi 13 dan 30 yoshgacha etib belgilangan, chunki dastur aynan yoshlar uchun moslashtirilgan. Shu sababli, barcha filiallarda darslar sifati birdek yuqori darajada. Individual mashg‘ulotlarda esa tilni o‘rganish istagida bo‘lgan har qanday yoshdagi kishilarga ingliz tilini o‘rgatamiz.",
  },
  {
    question: "O‘zim xohlagan darajada o‘qishni boshlash uchun nima qilishim kerak?",
    answer:
      "Markazimizga tashrif buyuring; u yerda ma’murlar sizga barcha zarur ma’lumotlarni taqdim etadilar. Tanlagan darajangizda o‘qishni boshlash uchun og‘zaki suhbat va bilim darajasini aniqlash testidan muvaffaqiyatli o‘tishingiz kerak.",
  },
  {
    question:
      "Agar Mega School da o‘qishni boshlasam, darslik va daftarlarni o‘zim sotib olishim kerakmi?",
    answer:
      "Mega School da har bir yangi o‘quvchi yoki keyingi bosqichga o‘tayotgan o‘quvchi darslik va daftar bilan bepul ta’minlanadi (daftar faqat bir marta beriladi).",
  },
  {
    question: "O‘qish uchun to‘lovning yuqori bo‘lishiga nima sabab?",
    answer:
      "Bizning ta'lim to'lovlarimiz taqdim etayotgan ta'lim sifatiga to'liq mos keladi, chunki biz Oxford University Press dasturi, IELTS-X, Student App platformasi, uch nafar o'qituvchi tomonidan olib boriladigan tizimli mashg'ulotlar va video darslardan foydalanish imkoniyatini taklif qiluvchi yagona markazmiz.",
  },
  {
    question: "Eng kechki darslar soat nechada tugaydi?",
    answer:
      "O‘qituvchilarning ish jadvali va transport bilan bog‘liq masalalar tufayli kechki darslar soat 18:30 da boshlanadi. Faqat onlayn darslar uchun soat 20:00 da ochiq guruhlar mavjud.",
  },
  {
    question: "Onlayn darslar yozib olingan videolarmi yoki jonli darslarmi?",
    answer:
      "Onlayn darslar jonli efirda o‘tkaziladi. Siz o‘qituvchi bilan bevosita muloqot qilasiz — bular oldindan yozib olingan videolar emas. Batafsil ma’lumot",
  },
];

const Faq = () => {
  const [active, setActive] = useState(1);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div id="faq" className="faq">
      <div className="faq__box">
        <h1 className="faq__h1">FAQ</h1>

        {faqData.map((item, index) => (
          <div
            className={`faq__item ${
              active === index ? "faq__item--active" : ""
            }`}
            key={index}
          >
            <button className="faq__question" onClick={() => toggle(index)}>
              <span>{item.question}</span>

              <span className="faq__icon">{active === index ? "−" : "+"}</span>
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
