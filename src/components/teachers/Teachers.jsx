import React from "react";
import "./teachers.modules.scss";
import Image from "next/image";
const Teachers = () => {
  const teachers = [
    {
      image: "/images/teachers/teacher-madina.webp",
      experience: 8,
      students: 4000,
      achievement: "IELTS 8.0",
    },
    {
      image: "/images/teachers/teacher-dilshod.webp",
      experience: 12,
      students: 10000,
      achievement: "ICCR Winner",
    },
    {
      image: "/images/teachers/teacher-otabek.webp",
      experience: 25,
      students: 5000,
      achievement: "grant from the US State Department",
    },
    {
      image: "/images/teachers/teacher-olimjon.webp",
      experience: 23,
      students: 4000,
      achievement: "GRE 530",
    },
    {
      image: "/images/teachers/teacher-timur.webp",
      experience: 10,
      students: 15000,
      achievement: "ICCR Winner",
    },
  ];
  return (
    <div className="teachers">
      <div className="teachers__wrap">
        <h2 className="teachers__title">Our Teachers</h2>
        <div className="teachers__cards">
          {teachers?.map(({image, experience, students, achievement}) => (
            <div className="teachers__item">
              <Image className="teachers__bg" fill src={"/images/teachers/teachers-bg.jpg"}/>
              <span className="teachers__item-img-span">
                <Image className="teachers__image" width={200} height={200}  src={image} quality={100} priority unoptimized/>
              </span>
              <div className="teachers__item-bottom">
                <span className="teachers__item-b-span">
                  <span className="teachers__itmbspan-title">experience</span>
                  <span className="teachers__itmbspan-text">{experience}+</span>
                </span>
                <span className="teachers__item-b-span">
                  <span className="teachers__itmbspan-title">students</span>
                  <span className="teachers__itmbspan-text">{students}+</span>
                </span>
                <span className="teachers__item-b-span">
                  <span className="teachers__itmbspan-title">achievement</span>
                  <span className="teachers__itmbspan-text">{achievement}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
