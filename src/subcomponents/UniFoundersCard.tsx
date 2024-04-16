import React from "react";
import logo from "../../public/FinalLogo.png";
import homePage from "../../public/UniFoundersHome.png"
import Image from "next/image";
import { AiOutlineProject } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';

const UniFoundersCard: React.FC = ({}) => {
    return (
        <div className="projects__card projects__unifounders-card">
            <div className="projects__card-header-container">
                <AiOutlineProject/>
                <div className={`projects__card-header-title ${montserrat.className}`}>Project</div>
            </div>
            <div className="unifounderscard__header-container">
                {/* <div className="unifounderscard__icon"> */}
                <Image 
                    src={logo}
                    className="unifounderscard__icon"
                    alt="UniFounders Icon"
                    placeholder="blur"
                    quality={100}
                    />
                {/* </div> */}
                <div className="unifounderscard__title">Founders</div>
            </div>
            <div className="unifounderscard__image-container">
                <Image 
                    src={homePage}
                    className="unifounderscard__image"
                    alt="UniFounders Image"
                    placeholder="blur"
                    quality={100}
                    // fill
                />
            </div>
        </div>
    )
};

export default UniFoundersCard;