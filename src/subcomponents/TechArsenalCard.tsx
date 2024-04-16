import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';


const TechArsenalCard: React.FC = () => {
    return (
        <div className="projects__card projects__tech-arsenal-card">
            <div className="projects__card-header-container">
                <AiOutlineCode/>
                <div className={`projects__card-header-title ${montserrat.className}`}>Tech Arsenal</div>
            </div>
        </div>
    )
};

export default TechArsenalCard;