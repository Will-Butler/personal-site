import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import { SoftSkillsArray1, SoftSkillsArray2 } from "../text/SoftSkillsArray";

const SoftSkillsCard: React.FC = () => {
    return (
        <div className="projects__card projects__soft-skills-card">
            <div className="projects__card-header-container">
                <AiOutlineTeam/>
                <div className={`projects__card-header-title ${montserrat.className}`}>Soft Skills</div>
            </div>
            <div className="multi-carousel-container">
                <div className="carousel-wrapper" style={{"--time": "40s"} as React.CSSProperties}>
                    <div className="carousel-backward">
                        {SoftSkillsArray2.map((item) => (
                            <span key={item} className="carousel-card">{item}</span>
                        ))}
                    </div>
                    <div className="carousel-backward">
                        {SoftSkillsArray2.map((item) => (
                            <span key={`${item}2`} className="carousel-card">{item}</span>
                        ))}
                    </div>
                </div>
                <div className="carousel-wrapper" style={{"--time": "15s"} as React.CSSProperties}>
                    <div className="carousel-forward">
                        {SoftSkillsArray1.map((item) => (
                            <span key={item} className="carousel-card">{item}</span>
                        ))}
                    </div>
                    <div className="carousel-forward">
                        {SoftSkillsArray1.map((item) => (
                            <span key={`${item}2`} className="carousel-card">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SoftSkillsCard;