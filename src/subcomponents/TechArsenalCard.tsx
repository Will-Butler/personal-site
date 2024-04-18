import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import { TechArsenalArray1, TechArsenalArray3 } from "@/text/TechArsenalArray";
//TODO: make slight ring of opacity/blur around the sides
        //make double carousel animation 
const TechArsenalCard: React.FC = () => {
    return (
        <div className="projects__card projects__tech-arsenal-card">
            <div className="projects__card-header-container">
                <AiOutlineCode/>
                <div className={`projects__card-header-title ${montserrat.className}`}>Tech Arsenal</div>
            </div>
            <div className="multi-carousel-container">
                <div className="carousel-wrapper">
                    <div className="carousel-forward">
                        {TechArsenalArray1.map((item) => (
                            <span className="carousel-card">{item}</span>
                        ))}
                    </div>
                    <div className="carousel-forward">
                        {TechArsenalArray1.map((item) => (
                            <span className="carousel-card">{item}</span>
                        ))}
                    </div>
                </div>
                <div className="carousel-wrapper">
                    <div className="carousel-backward">
                        {TechArsenalArray3.map((item) => (
                            <span className="carousel-card">{item}</span>
                        ))}
                    </div>
                    <div className="carousel-backward">
                        {TechArsenalArray3.map((item) => (
                            <span className="carousel-card">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TechArsenalCard;