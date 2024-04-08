import React from "react";
import { openSans, montserrat, playfairDisplay } from '../src/styles/fonts';
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { AiOutlineDown } from "react-icons/ai";

interface ExperienceCardProps {
    time: string;
    organization: string;
    position: string;
    location: string;
    logo: string | StaticImport;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({time, organization, position, location, logo}) => {
    return(
        <div className="experience__card-subcontainer">
            <div className="experience__card">
                <div className={`experience__card-time ${playfairDisplay.className}`}>{time}</div>
                <div className="experience__card-divider1"></div>
                <div className="experience__card-organization-container">
                    <div className="experience__card-organization-logo-overflow-container">
                        <Image
                        className="experience__card-organization-logo"
                        alt=""
                        src={logo}
                        quality={100}
                        />
                    </div>
                    <div className={`experience__card-organization ${playfairDisplay.className}`}>{organization}</div>
                </div>
                <div className="experience__card-divider2"/>
                <div className={`experience__card-position ${playfairDisplay.className}`}>{position}</div>
                <div className="experience__card-divider3"/>
                <div className={`experience__card-location ${playfairDisplay.className}`}>{location}</div>
            </div>
            <AiOutlineDown
                className="experience__expand-arrow"/>
        </div>
    )

}

export default ExperienceCard;