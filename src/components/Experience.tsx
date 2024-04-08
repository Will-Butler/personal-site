import React from 'react';
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import ExperienceCard from '../../subcomponents/ExperienceCard';
import NasaLogo from '../../public/NasaLogo.png';
import AmazonLogo from '../../public/AmazonLogo.png';
import UVALogo from '../../public/UVALogo.png';


const Experience = () => {
    return(
        <div className='experience'>
            <div className={`experience__title ${montserrat.className}`}>EXPERIENCE</div>
            <div className='experience__card-container'>
                <ExperienceCard
                    time="Current"
                    organization="Gap Year"
                    position="Explorer"
                    location="Taiwan"
                    logo=""
                />
                <ExperienceCard
                    time="Summer 2022"
                    organization="Amazon"
                    position="Software Development Intern"
                    location="Seattle"
                    logo={AmazonLogo}
                />
                <ExperienceCard
                    time="Summer 2021"
                    organization="NASA"
                    position="Project Intern"
                    location="Remote"
                    logo={NasaLogo}
                />
                <ExperienceCard
                    time="Sep 2020 - May 2022"
                    organization="UVA"
                    position="CS Teaching Assistant"
                    location="Charlottesville"
                    logo={UVALogo}
                />
                <ExperienceCard
                    time="Sep 2019 - May 2023"
                    organization="UVA"
                    position="Student"
                    location="Charlottesville"
                    logo={UVALogo}
                />
            </div>
        </div>
    )
};

export default Experience;