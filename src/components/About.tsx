import React from 'react';
import Image from "next/image";
import { Link } from 'react-router-dom';
import headshot from '../../public/tundyheadshot3.png';
import { openSans, montserrat, playfairDisplay } from '../styles/fonts';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { aboutSections } from '@/text/AboutSections';

const About = () => {
    return(
        <div className='about'>
            <div className='about__header-container'>
                <div className='about__headshot'></div>
                <Image
                className="about__headshot"
                alt="Headshot"
                src={headshot}
                placeholder="blur"
                quality={100}
                />
                <div className='about__title-media-container'>
                    <div className={`about__title ${montserrat.className}`}>About</div>
                    <div className='about__media-icons-container'>
                        <a href="https://github.com/Will-Butler" target="_blank">
                            <AiFillGithub
                            className='about__icon'
                            />
                        </a>
                        <a href="https://www.instagram.com/gunthbutler/" target="_blank">
                            <AiFillInstagram
                            className='about__icon'
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/will-butler-782242197/" target="_blank">
                            <AiFillLinkedin
                            className='about__icon'
                            />
                        </a>
                        <a href="mailto:will.butler24@gmail.com?Subject=Personal Website Inquiry">
                            <AiFillMail
                            className='about__icon'
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className='about__content-container'>
                <div className={`about__content-section ${playfairDisplay.className}`}>{aboutSections["SECTION1"]}</div>
                <div className={`about__content-section ${playfairDisplay.className}`}>{aboutSections["SECTION2"]}</div>
                <div className={`about__content-section ${playfairDisplay.className}`}>{aboutSections["SECTION3"]}</div>
            </div>
        </div>
    )
};

export default About;