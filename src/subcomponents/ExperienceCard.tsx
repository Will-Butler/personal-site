import React, { useState } from "react";
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { AiOutlineDown } from "react-icons/ai";
import clsx from 'clsx';


interface ExperienceCardProps {
    id: string;
    time: string;
    organization: string;
    position: string;
    location: string;
    logo: string | StaticImport;
    content: Array<string|React.JSX.Element>;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({time, organization, position, location, logo, content}) => {
    const [moreInfo, setMoreInfo] = useState(false);

    const contentList = content.map((item, index) => (
        <li key={index} className={`${openSans.className}`}>{item}</li>
    ));

    return(
        <div className="experience__card-subcontainer">
            <div className={clsx(
                "experience__card",
                {'experience__card-expand': moreInfo}
                )}>
                <div className={`experience__card-time ${playfairDisplay.className}`}>{time}</div>
                <div className="experience__card-divider1"></div>
                <div className={`experience__card-position ${playfairDisplay.className}`}>{position}</div>
                <div className="experience__card-divider2"/>
                <div className="experience__card-organization-container">
                    <div className="experience__card-organization-logo-overflow-container">
                        {logo ? 
                        <Image
                        className="experience__card-organization-logo"
                        alt=""
                        src={logo}
                        quality={100}
                        />
                        :
                        ''
                        }
                    </div>
                    <div className={`experience__card-organization ${playfairDisplay.className}`}>{organization}</div>
                </div>
                <div className="experience__card-divider3"/>
                <div className={`experience__card-location ${playfairDisplay.className}`}>{location}</div>
            </div>
            <div className={clsx(
                'experience__expand-container',
                {'experience__expand-container-open': moreInfo},
            )}>
                <ul style={{ listStyleType: 'circle', marginBottom: '10px' }}>{contentList}</ul>
            </div>
            <button onClick={() => setMoreInfo(!moreInfo)}>
                <AiOutlineDown className={clsx(
                    "experience__expand-arrow",
                    {'experience__expand-arrow-flip': moreInfo}
                )}/>
            </button>
        </div>
    )

}

export default ExperienceCard;