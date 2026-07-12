import React from "react";
import "./about.modules.scss";
const About = () => {
  return (
    <div className="about">
      <div className="about__cont">
        <h2 className="about__title">ABOUT US</h2>
        <div className="about__bottom">
          <div className="about__video">
            <span>
              <svg
                className="about__vplay"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"></path>
              </svg>
            </span>
          </div>
          <div className="about__b-right">
            <p className="about__b-main-txt">
              MEGA SCHOOL TRAINING CENTER was created on July 22, 2013.
              Currently, in the most convenient places in the city of Tashkent,
              there are 6 large branches of the educational center, equipped
              with advanced technologies and having good conditions for
              training. Training is conducted according to a special program
              developed by Oxford University (Oxford University Press), which is
              one of the best! Our TRAINING CENTER is the first in Uzbekistan to
              use this program in a licensed format.
            </p>
          </div>
        </div>
        <div className="about__card">
          <div className="about__c-item">
            <p className="about__cit-txt">
              branches <span className="about__cit-txt-span">6</span>
            </p>
            <span className="about__g-span">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
                <path
                  d="M360 289.7c43.4 0 86.9-16.6 120-49.7a169.2 169.2 0 0 0-120-49.7 169.2 169.2 0 0 0 49.7-120c-46.9 0-89.3 19-120 49.7 0-43.4-16.6-86.9-49.7-120a169.2 169.2 0 0 0-49.7 120 169.2 169.2 0 0 0-120-49.7c0 46.8 19 89.3 49.7 120-43.4 0-86.9 16.6-120 49.7a169.2 169.2 0 0 0 120 49.7 169.2 169.2 0 0 0-49.7 120c46.8 0 89.3-19 120-49.7 0 43.4 16.6 86.9 49.7 120a169.2 169.2 0 0 0 49.7-120 169.2 169.2 0 0 0 120 49.7c0-46.9-19-89.3-49.7-120Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
          <div className="about__c-item">
            <p className="about__cit-txt">
              students <span className="about__cit-txt-span">7800+</span>
            </p>
            <span className="about__g-span">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
                <path
                  d="M447.6 180.2v-.2A127.3 127.3 0 0 0 300 32S240 0 240 0l-60 32.1h-.2A127.3 127.3 0 0 0 32 179.8v.2L0 240l32.1 60v.2A127.3 127.3 0 0 0 179.8 448h.2l60 32.1 60-32.1h.3a127.3 127.3 0 0 0 147.6-147.7v-.2l32.1-59-32.4-60.8Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
          <div className="about__c-item">
            <p className="about__cit-txt">
              employees <span className="about__cit-txt-span">6+</span>
            </p>
            <span className="about__g-span">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
                <g fill="currentColor">
                  <circle cx="120" cy="120" r="120"></circle>
                  <circle cx="120" cy="360" r="120"></circle>
                  <circle cx="360" cy="120" r="120"></circle>
                  <circle cx="360" cy="360" r="120"></circle>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
