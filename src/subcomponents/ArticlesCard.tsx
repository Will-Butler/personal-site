import React, { useState } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import Image from "next/image";
import { TfiNewWindow } from "react-icons/tfi";
import mediumImage from '../../public/medium.png';


const ArticlesCard: React.FC = () => {
    const [loadingSite, setLoadingSite] = useState(true);

    return (
        <div className="projects__card projects__articles-card">
            <div className="projects__card-header-container">
                <AiOutlineFileText/>
                <div className={`projects__card-header-title ${montserrat.className}`}>Published Articles</div>
            </div>
            {/* <iframe
                className="articles__iframe"
                src="https://medium.com/@will-butler"
                onLoad={() => setLoadingSite(false)}                
            ></iframe>
            {loadingSite ? <p> Loading articles</p> : null} */}
            <a href="https://medium.com/@will-butler" 
                target="_blank" 
                className="projects__principles-embed">
                <Image
                    style={{borderRadius: '0 0 10px 10px', maxHeight: '275px'}}
                    src={mediumImage}
                    title="View Articles"
                    alt="Click Here to View Articles"
                />
                <div className="principles__new-tab-icon">
                    <TfiNewWindow />
                </div>
            </a>
        </div>
    )
};

export default ArticlesCard;