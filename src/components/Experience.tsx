import React, { useEffect } from 'react';
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import ExperienceCard from '../subcomponents/ExperienceCard';
import NasaLogo from '../../public/NasaLogo.png';
import AmazonLogo from '../../public/AmazonLogo.png';
import UVALogo from '../../public/UVALogo.png';
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
            cards.forEach((card, index) => {
                gsap.from(card, {
                    xPercent: 0,
                    y: index * -100,
                    // duration: 5 - index,
                    scrollTrigger: {
                        trigger: "#experience",
                        // markers: true,
                        start: "top center",
                        end: "bottom center",
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
                    id="card1"
                    time="Jul 2023 - Current"
                    organization="Gap Year"
                    position="Surf Instructor/Developer/Musician"
                    location="Taiwan"
                    logo=""
                    content={[
                        experienceBullets["GAP_YEAR_BULLET1"], 
                        experienceBullets["GAP_YEAR_BULLET2"], 
                        experienceBullets["GAP_YEAR_BULLET3"] 
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
                    id="card4"
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
                    id="card5"
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
                <a className={`experience__resume-link ${montserrat.className}`} href='/Resume.pdf'>
                <span><TfiNewWindow/></span><span>Resume</span>
                </a> 
            </div>
        </div>
    )
};

export default Experience;