import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';


const ArticlesCard: React.FC = () => {
    return (
        <div className="projects__card projects__articles-card">
            <div className="projects__card-header-container">
                <AiOutlineFileText/>
                <div className={`projects__card-header-title ${montserrat.className}`}>Articles</div>
            </div>
        </div>
    )
};

export default ArticlesCard;