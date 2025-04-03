import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from "../styles/fonts";
import { TechArsenalArray1, TechArsenalArray3 } from "@/text/TechArsenalArray";
//TODO: make slight ring of opacity/blur around the sides
//make double carousel animation
const TechArsenalCard: React.FC = () => {
  return (
    <div className="bentobox__card bentobox__tech-arsenal-card">
      <div className="bentobox__card-header-container">
        <AiOutlineCode />
        <div className={`bentobox__card-header-title ${montserrat.className}`}>
          Tech Arsenal
        </div>
      </div>
      <div className="multi-carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-forward">
            {TechArsenalArray1.map((item) => (
              <span key={item} className="carousel-card">
                {item}
              </span>
            ))}
          </div>
          <div className="carousel-forward">
            {TechArsenalArray1.map((item) => (
              <span key={`${item}2`} className="carousel-card">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel-backward">
            {TechArsenalArray3.map((item) => (
              <span key={item} className="carousel-card">
                {item}
              </span>
            ))}
          </div>
          <div className="carousel-backward">
            {TechArsenalArray3.map((item) => (
              <span key={`${item}2`} className="carousel-card">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechArsenalCard;
