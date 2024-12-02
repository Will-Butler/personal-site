import React, { useEffect } from 'react';
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import ExperienceCard from '../subcomponents/ExperienceCard';
import NasaLogo from '../../public/NasaLogo.png';
import AmazonLogo from '../../public/AmazonLogo.png';
import UVALogo from '../../public/UVALogo.png';
import TaiwanFlag from '../../public/TaiwanFlag.png';
import UnifoundersLogo from '../../public/UniFounders-Logo.png';
import { experienceBullets } from '../text/ExperienceBullets'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TfiNewWindow } from "react-icons/tfi";


const Experience = () => {

    ///////Scroll Animations///////
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: .5});
    useEffect(() => {
        let ctx = gsap.context(() => {
            var cards = gsap.utils.toArray('.experience__card-subcontainer');
            cards!.forEach((card: any, index) => {
                gsap.from(card, {
                    xPercent: 0,
                    y: index * -100,
                    // duration: 5 - index,
                    scrollTrigger: {
                        trigger: "#experience",
                        // markers: true,
                        start: "top center",
                        end: "bottom top",
                        toggleActions: "play reverse restart reverse", 
                    }
                })
            });
        });
        return () => ctx.revert();
    }, [])
    return(
        <div id="experience" className='experience'>
            <div className={`experience__title ${montserrat.className}`}>EXPERIENCE</div>
            <div className='experience__card-container'>
                <div id="card1">
                <ExperienceCard
                    id="card0"
                    time="Jul 2024 - Current"
                    organization="UniFounders"
                    position="Founder & Software Developer"
                    location="Remote"
                    logo={UnifoundersLogo}
                    content={[
                        experienceBullets["UNIFOUNDERS_BULLET1"], 
                        experienceBullets["UNIFOUNDERS_BULLET2"], 
                        experienceBullets["UNIFOUNDERS_BULLET3"], 
                    ]}
                />
                <ExperienceCard
                    id="card1"
                    time="Jul 2023 - Jul 2024"
                    organization="Gap Year"
                    position="Professional Vagabond"
                    location="Taiwan"
                    logo={TaiwanFlag}
                    content={[
                        experienceBullets["GAP_YEAR_BULLET1"], 
                        experienceBullets["GAP_YEAR_BULLET2"], 
                        experienceBullets["GAP_YEAR_BULLET3"] 
                    ]}
                />
                <ExperienceCard
                    id="card5"
                    time="Sep 2019 - May 2023"
                    organization="UVA"
                    position="Student"
                    location="Charlottesville"
                    logo={UVALogo}
                    content={[
                        experienceBullets["UVA_BULLET1"],
                        experienceBullets["UVA_BULLET2"]
                    ]}
                />
                </div>
                <ExperienceCard
                    id="card2"
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
                    id="card3"
                    time="Summer 2021"
                    organization="NASA"
                    position="Mission Design Intern"
                    location="Remote"
                    logo={NasaLogo}
                    content={[
                        experienceBullets["NASA_BULLET1"],
                        experienceBullets["NASA_BULLET2"],
                        experienceBullets["NASA_BULLET3"]
                    ]}
                />
                <ExperienceCard
                    id="card4"
                    time="Sep 2020 - May 2022"
                    organization="UVA"
                    position="CS Teaching Assistant"
                    location="Charlottesville"
                    logo={UVALogo}
                    content={[
                        experienceBullets["TA_BULLET1"],
                        experienceBullets["TA_BULLET2"]
                    ]}
                />
                <a className={`experience__resume-link ${montserrat.className}`} href='/Resume12.24.pdf' target="_blank">
                <span><TfiNewWindow/></span><span>Resume</span>
                </a> 
            </div>
        </div>
    )
};

export default Experience;