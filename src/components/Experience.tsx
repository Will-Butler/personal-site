import React from 'react';
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import ExperienceCard from '../../subcomponents/ExperienceCard';
import NasaLogo from '../../public/NasaLogo.png';
import AmazonLogo from '../../public/AmazonLogo.png';
import UVALogo from '../../public/UVALogo.png';
import { experienceBullets } from '../text/ExperienceBullets'


const Experience = () => {
    return(
        <div className='experience'>
            <div className={`experience__title ${montserrat.className}`}>EXPERIENCE</div>
            <div className='experience__card-container'>
                <ExperienceCard
                    time="Jul 2023 - Current"
                    organization="Gap Year"
                    position="Explorer"
                    location="Taiwan"
                    logo=""
                    content={[
                        experienceBullets["GAP_YEAR_BULLET1"], 
                        experienceBullets["GAP_YEAR_BULLET2"], 
                        experienceBullets["GAP_YEAR_BULLET3"] 
                    ]}
                />
                <ExperienceCard
                    time="Summer 2022"
                    organization="Amazon"
                    position="Software Development Intern"
                    location="Seattle"
                    logo={AmazonLogo}
                    content={[
                        experienceBullets["AMAZON_BULLET1"],
                        experienceBullets["AMAZON_BULLET2"],
                        experienceBullets["AMAZON_BULLET3"]
                    ]}
                />
                <ExperienceCard
                    time="Summer 2021"
                    organization="NASA"
                    position="Project Intern"
                    location="Remote"
                    logo={NasaLogo}
                    content={[
                        experienceBullets["NASA_BULLET1"],
                        experienceBullets["NASA_BULLET2"],
                        experienceBullets["NASA_BULLET3"]
                    ]}
                />
                <ExperienceCard
                    time="Sep 2020 - May 2022"
                    organization="University of Virginia"
                    position="CS Teaching Assistant"
                    location="Charlottesville"
                    logo={UVALogo}
                    content={[
                        experienceBullets["TA_BULLET1"],
                        experienceBullets["TA_BULLET2"]
                    ]}
                />
                <ExperienceCard
                    time="Sep 2019 - May 2023"
                    organization="University of Virginia"
                    position="Student"
                    location="Charlottesville"
                    logo={UVALogo}
                    content={[
                        experienceBullets["UVA_BULLET1"],
                        experienceBullets["UVA_BULLET2"]
                    ]}
                />
                <a className={`experience__resume-link ${montserrat.className}`} href='/Resume.pdf'>Download My Resume</a>
            </div>
        </div>
    )
};

export default Experience;