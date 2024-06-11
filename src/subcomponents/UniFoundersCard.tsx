import React, {useState} from "react";
import logo from "../../public/FinalLogo.png";
import homePage from "../../public/UniFoundersLP.png"
import Image from "next/image";
import { AiOutlineProject } from "react-icons/ai";
import { TfiNewWindow } from "react-icons/tfi";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';

const UniFoundersCard: React.FC = ({}) => {
    const [loadingSite, setLoadingSite] = useState(true);

    return (
        <div className="projects__card projects__unifounders-card">
            <div className="projects__card-header-container">
                <AiOutlineProject/>
                <div className={`projects__card-header-title ${montserrat.className}`}>Project</div>
            </div>
            {/* <iframe
                className="unifounderscard__iframe"
                src="https://unifounders.onrender.com"
                onLoad={() => setLoadingSite(false)}           
            ></iframe>
            {loadingSite ? <p> Loading articles</p> : null} */}
            {/* <div className="unifounderscard__header-container">
                <Image 
                    src={logo}
                    className="unifounderscard__icon"
                    alt="UniFounders Icon"
                    placeholder="blur"
                    quality={100}
                    />
                <div className="unifounderscard__title">Founders</div>
            </div> */}
            {/* <div className="unifounderscard__image-container">
                <Image 
                    src={homePage}
                    className="unifounderscard__image"
                    alt="UniFounders Image"
                    placeholder="blur"
                    quality={100}
                    // fill
                    style={{objectFit: "cover"}}	
                />
            </div> */}
            <a href="https://unifounders.onrender.com" 
                target="_blank" 
                className="projects__principles-embed">
                <Image
                    style={{objectFit: "cover", height: '100%'}}	
                    src={homePage}
                    title="View UniFounders Site"
                    alt="Click Here to View UniFounders Site"
                />
                <div className="principles__new-tab-icon">
                    <TfiNewWindow />
                </div>
            </a>
        </div>
    )
};

export default UniFoundersCard;