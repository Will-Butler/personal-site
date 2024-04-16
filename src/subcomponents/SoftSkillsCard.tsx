import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';


const SoftSkillsCard: React.FC = () => {
    return (
        <div className="projects__card projects__soft-skills-card">
            <div className="projects__card-header-container">
                <AiOutlineTeam/>
                <div className={`projects__card-header-title ${montserrat.className}`}>Soft Skills</div>
            </div>
        </div>
    )
};

export default SoftSkillsCard;