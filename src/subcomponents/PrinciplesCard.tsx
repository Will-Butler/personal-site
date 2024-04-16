import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import { AiOutlineCheck } from "react-icons/ai";


const PrinciplesCard: React.FC = () => {
    return (
        <div className="projects__card projects__principles-card">
            <div className="projects__card-header-container">
                <AiOutlineStar/>
                <div className={`projects__card-header-title ${montserrat.className}`}>Principles</div>
            </div>
        </div>
    )
};

export default PrinciplesCard;