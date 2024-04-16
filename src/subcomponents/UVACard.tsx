import React from "react";
import { PiGraduationCapLight } from "react-icons/pi";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';


const UVACard: React.FC = () => {
    return (
        <div className="projects__card projects__uva-card">
            <div className="projects__card-header-container">
                <PiGraduationCapLight/>
                <div className={`projects__card-header-title ${montserrat.className}`}>University Experience</div>
            </div>
        </div>
    )
};

export default UVACard;